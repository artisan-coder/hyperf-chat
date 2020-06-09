# Introduction

This is a simple hyperf chat
# Requirements
 - PHP >= 7.2
 - Swoole PHP extension >= 4.4，and Disabled `Short Name`
 - OpenSSL PHP extension
 - JSON PHP extension
 - PDO PHP extension （If you need to use MySQL Client）
 - Redis PHP extension （If you need to use Redis Client）
 - Protobuf PHP extension （If you need to use gRPC Server of Client）

# Installation using Composer

The easiest way to create a new Hyperf project is to use Composer. If you don't have it already installed, then please install as per the documentation.

To create your new Hyperf project:

$ git clone git@github.com:artisan-coder/hyperf-chat.git
$ composer install -vvv

Once installed, you can run the server immediately using the command below.


$ php bin/hyperf.php start

This will start the cli-server on port `9501`, and bind it to all network interfaces. You can then visit the site at `http://localhost:9501/`

which will bring up Hyperf default home page.
# sample images
* login
![login](https://i.loli.net/2020/06/09/XmHd4p6abhgFrWZ.png)
* single_talk1
![single_talk](https://i.loli.net/2020/06/09/iBL1hFr7PASdIWT.png)
* single_talk2
![lsingle_talk](https://i.loli.net/2020/06/09/wdZ5XSqPzRYy9jh.png)
* room talk
![room talk](https://i.loli.net/2020/06/09/6Q3SOi2V5naoTZg.png)
