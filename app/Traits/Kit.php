<?php

namespace App\Traits;
trait Kit
{
    protected $users=[];
    protected $user;


    protected function hasUser($user)
    {
        foreach ($this->users as $item){
            if($item['name']===$user['name']){
                return true;
            }
        }
        return  false;
    }

    protected function delUser($id)
    {
        foreach ($this->users as $item){
            if($item['id']===$id){
               unset($this->users[$id]);
            }
        }
    }

}
