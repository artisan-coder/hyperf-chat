<?php

declare(strict_types=1);

namespace App\Controller;

use App\Traits\Kit;
use Hyperf\SocketIOServer\Annotation\Event;
use Hyperf\SocketIOServer\Annotation\SocketIONamespace;
use Hyperf\SocketIOServer\BaseNamespace;
use Hyperf\SocketIOServer\Socket;

/**
 * @SocketIONamespace("/")
 */
class WebSocketController extends BaseNamespace
{
    use Kit;

    /**
     * @Event("login")
     * @param Socket $socket
     * @param $data
     */
    public function onLogin(Socket $socket, $data)
    {
        if ($this->hasUser($data)) {
            $this->emit('loginFail', "登录失败,昵称已存在!");

            return;
        }
        $user              = $data;
        $user['id']        = $socket->getSid();
        $user['roomId']    = $user['id'];
        $user['loginTime'] = time();
        $this->user        = $user;
        $this->to($user['roomId'])->emit('loginSuccess', $user, $this->users);
        $this->users[$user['id']] = $user;
        $socket->broadcast(true)->emit('system', $user, 'join');
    }

    /**
     * @Event("message")
     * @param Socket $socket
     * @param $from
     * @param $to
     * @param $message
     * @param $type
     * @return string
     */
    public function onChatMessage(Socket $socket, $from, $to, $message, $type)
    {
        print_r(__FUNCTION__);
        $socket->broadcast(true)->to($to['roomId'])->emit('message', $from, $to, $message, $type);
    }

    /**
     * @Event("groupMessage")
     * @param Socket $socket
     * @param $from
     * @param $to
     * @param $message
     * @param $type
     */
    public function onGroupMessage(Socket $socket, $from, $to, $message, $type)
    {
        $socket->broadcast(true)->emit('groupMessage', $from, $to, $message, $type);
    }

    /**
     * @Event("disconnect")
     * @param Socket $socket
     * @param $data
     */
    public function disconnect(Socket $socket, $data)
    {
        if ($this->user !== null) {
            $this->delUser($this->user['id']);
            $this->emit('system', $this->user, 'logout');
        }
    }
}