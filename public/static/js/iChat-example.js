(function () {
    //表情插件
    var uiExpression = {
        install: function (Vue, options) {
            var baseUrl = "http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal";
            var expressions = [{"title": "[坏笑]", "url": "/50/pcmoren_huaixiao_org.png"},
                {"title": "[舔屏]", "url": "/40/pcmoren_tian_org.png"},
                {"title": "[污]", "url": "/3c/pcmoren_wu_org.png"},
                {"title": "[允悲]", "url": "/2c/moren_yunbei_org.png"},
                {"title": "[笑而不语]", "url": "/3a/moren_xiaoerbuyu_org.png"},
                {"title": "[费解]", "url": "/3c/moren_feijie_org.png"},
                {"title": "[憧憬]", "url": "/37/moren_chongjing_org.png"},
                {"title": "[并不简单]", "url": "/fd/moren_bingbujiandan_org.png"},
                {"title": "[微笑]", "url": "/5c/huanglianwx_org.gif"},
                {"title": "[嘻嘻]", "url": "/0b/tootha_org.gif"},
                {"title": "[哈哈]", "url": "/6a/laugh.gif"},
                {"title": "[可爱]", "url": "/14/tza_org.gif"},
                {"title": "[可怜]", "url": "/af/kl_org.gif"},
                {"title": "[挖鼻]", "url": "/0b/wabi_org.gif"},
                {"title": "[吃惊]", "url": "/f4/cj_org.gif"},
                {"title": "[害羞]", "url": "/6e/shamea_org.gif"},
                {"title": "[挤眼]", "url": "/c3/zy_org.gif"},
                {"title": "[闭嘴]", "url": "/29/bz_org.gif"},
                {"title": "[鄙视]", "url": "/71/bs2_org.gif"},
                {"title": "[爱你]", "url": "/6d/lovea_org.gif"},
                {"title": "[泪]", "url": "/9d/sada_org.gif"},
                {"title": "[偷笑]", "url": "/19/heia_org.gif"},
                {"title": "[亲亲]", "url": "/8f/qq_org.gif"},
                {"title": "[生病]", "url": "/b6/sb_org.gif"},
                {"title": "[太开心]", "url": "/58/mb_org.gif"},
                {"title": "[白眼]", "url": "/d9/landeln_org.gif"},
                {"title": "[右哼哼]", "url": "/98/yhh_org.gif"},
                {"title": "[左哼哼]", "url": "/6d/zhh_org.gif"},
                {"title": "[嘘]", "url": "/a6/x_org.gif"},
                {"title": "[衰]", "url": "/af/cry.gif"},
                {"title": "[委屈]", "url": "/73/wq_org.gif"},
                {"title": "[吐]", "url": "/9e/t_org.gif"},
                {"title": "[哈欠]", "url": "/cc/haqianv2_org.gif"},
                {"title": "[抱抱_旧]", "url": "/27/bba_org.gif"},
                {"title": "[怒]", "url": "/7c/angrya_org.gif"},
                {"title": "[疑问]", "url": "/5c/yw_org.gif"},
                {"title": "[馋嘴]", "url": "/a5/cza_org.gif"},
                {"title": "[拜拜]", "url": "/70/88_org.gif"},
                {"title": "[思考]", "url": "/e9/sk_org.gif"},
                {"title": "[汗]", "url": "/24/sweata_org.gif"},
                {"title": "[困]", "url": "/40/kunv2_org.gif"},
                {"title": "[睡]", "url": "/96/huangliansj_org.gif"},
                {"title": "[钱]", "url": "/90/money_org.gif"},
                {"title": "[失望]", "url": "/0c/sw_org.gif"},
                {"title": "[酷]", "url": "/40/cool_org.gif"},
                {"title": "[色]", "url": "/20/huanglianse_org.gif"},
                {"title": "[哼]", "url": "/49/hatea_org.gif"},
                {"title": "[鼓掌]", "url": "/36/gza_org.gif"},
                {"title": "[晕]", "url": "/d9/dizzya_org.gif"},
                {"title": "[悲伤]", "url": "/1a/bs_org.gif"},
                {"title": "[抓狂]", "url": "/62/crazya_org.gif"},
                {"title": "[黑线]", "url": "/91/h_org.gif"},
                {"title": "[阴险]", "url": "/6d/yx_org.gif"},
                {"title": "[怒骂]", "url": "/60/numav2_org.gif"},
                {"title": "[互粉]", "url": "/89/hufen_org.gif"},
                {"title": "[心]", "url": "/40/hearta_org.gif"},
                {"title": "[伤心]", "url": "/ea/unheart.gif"},
                {"title": "[猪头]", "url": "/58/pig.gif"},
                {"title": "[熊猫]", "url": "/6e/panda_org.gif"},
                {"title": "[兔子]", "url": "/81/rabbit_org.gif"},
                {"title": "[ok]", "url": "/d6/ok_org.gif"},
                {"title": "[耶]", "url": "/d9/ye_org.gif"},
                {"title": "[good]", "url": "/d8/good_org.gif"},
                {"title": "[NO]", "url": "/ae/buyao_org.gif"},
                {"title": "[赞]", "url": "/d0/z2_org.gif"},
                {"title": "[来]", "url": "/40/come_org.gif"},
                {"title": "[弱]", "url": "/d8/sad_org.gif"},
                {"title": "[草泥马]", "url": "/7a/shenshou_org.gif"},
                {"title": "[神马]", "url": "/60/horse2_org.gif"},
                {"title": "[囧]", "url": "/15/j_org.gif"},
                {"title": "[浮云]", "url": "/bc/fuyun_org.gif"},
                {"title": "[给力]", "url": "/1e/geiliv2_org.gif"},
                {"title": "[围观]", "url": "/f2/wg_org.gif"},
                {"title": "[威武]", "url": "/70/vw_org.gif"},
                {"title": "[话筒]", "url": "/9f/huatongv2_org.gif"},
                {"title": "[蛋糕]", "url": "/3a/cakev2_thumb.gif"},
                {"title": "[蜡烛]", "url": "/d9/lazhuv2_org.gif"},
                {"title": "[广告]", "url": "/60/ad_new0902_org.gif"},
                {"title": "[doge]", "url": "/b6/doge_org.gif"},
                {"title": "[喵喵]", "url": "/4a/mm_org.gif"},
                {"title": "[二哈]", "url": "/74/moren_hashiqi_org.png"},
                {"title": "[哆啦A梦无奈]", "url": "/96/dora_wunai_org.png"},
                {"title": "[哆啦A梦笑]", "url": "/54/dora_xiao_org.png"},
                {"title": "[哆啦A梦亲亲]", "url": "/e0/dora_qinqin_org.png"},
                {"title": "[哆啦A梦美味]", "url": "/21/dora_meiwei_org.png"},
                {"title": "[哆啦A梦开心]", "url": "/df/dora_kaixin_org.png"},
                {"title": "[笑cry]", "url": "/34/xiaoku_org.gif"},
                {"title": "[摊手]", "url": "/09/pcmoren_tanshou_org.png"},
                {"title": "[抱抱]", "url": "/70/pcmoren_baobao_org.png"},
                {"title": "[红包飞]", "url": "/c8/../e0/hongbao1_org.gif"},
                {"title": "[发红包]", "url": "/ca/fahongbao_org.gif"},
                {"title": "[冰川时代希德奶奶]", "url": "/35/bhsj5_nainai_org.gif"},
                {"title": "[快银]", "url": "/7e/xman_kuaiyin_org.gif"},
                {"title": "[暴风女]", "url": "/7b/xman_baofengnv_org.gif"},
                {"title": "[芒果流口水]", "url": "/64/mango_07_org.gif"},
                {"title": "[芒果点赞]", "url": "/5c/mango_12_org.gif"},
                {"title": "[芒果大笑]", "url": "/9f/mango_02_org.gif"},
                {"title": "[芒果得意]", "url": "/ee/mango_03_org.gif"},
                {"title": "[芒果萌萌哒]", "url": "/49/mango_11_org.gif"},
                {"title": "[羊年大吉]", "url": "/cc/yangniandj_org.gif"},
                {"title": "[西瓜]", "url": "/6b/watermelon.gif"},
                {"title": "[足球]", "url": "/c0/football.gif"},
                {"title": "[老妈我爱你]", "url": "/46/mothersday_org.gif"},
                {"title": "[母亲节]", "url": "/36/carnation_org.gif"},
                {"title": "[肥皂]", "url": "/e5/soap_org.gif"},
                {"title": "[有钱]", "url": "/e6/youqian_org.gif"},
                {"title": "[地球一小时]", "url": "/dc/earth1r_org.gif"},
                {"title": "[国旗]", "url": "/dc/flag_org.gif"},
                {"title": "[许愿]", "url": "/87/lxhxuyuan_org.gif"},
                {"title": "[风扇]", "url": "/92/fan.gif"},
                {"title": "[炸鸡和啤酒]", "url": "/f4/zhaji_org.gif"},
                {"title": "[雪]", "url": "/00/snow_org.gif"},
                {"title": "[马上有对象]", "url": "/ee/mashangyouduixiang_org.gif"},
                {"title": "[马到成功旧]", "url": "/30/madaochenggong_org.gif"},
                {"title": "[青啤鸿运当头]", "url": "/f8/hongyun_org.gif"},
                {"title": "[让红包飞]", "url": "/0b/hongbaofei2014_org.gif"},
                {"title": "[ali做鬼脸]", "url": "/20/alizuoguiliannew_org.gif"},
                {"title": "[ali哇]", "url": "/de/aliwanew_org.gif"},
                {"title": "[xkl转圈]", "url": "/f4/xklzhuanquan_org.gif"},
                {"title": "[酷库熊顽皮]", "url": "/46/kxwanpi_org.gif"},
                {"title": "[bm可爱]", "url": "/95/bmkeai_org.gif"},
                {"title": "[BOBO爱你]", "url": "/74/boaini_org.gif"},
                {"title": "[转发]", "url": "/02/lxhzhuanfa_org.gif"},
                {"title": "[得意地笑]", "url": "/d4/lxhdeyidixiao_org.gif"},
                {"title": "[ppb鼓掌]", "url": "/7e/ppbguzhang_org.gif"},
                {"title": "[din推撞]", "url": "/dd/dintuizhuang_org.gif"},
                {"title": "[moc转发]", "url": "/cb/moczhuanfa_org.gif"},
                {"title": "[lt切克闹]", "url": "/73/ltqiekenao_org.gif"},
                {"title": "[江南style]", "url": "/67/gangnamstyle_org.gif"},
                {"title": "[笑哈哈]", "url": "/32/lxhwahaha_org.gif"}]
            Vue.component("ui-expression", {
                template: "#tpl",
                data: function () {
                    return {
                        expressions: expressions,
                        baseUrl: baseUrl
                    }
                },
                methods: {
                    pickerExpression: function (expression) {
                        this.$emit("picker-expression", expression)
                    }
                }
            })

            function getIndex(str) {
                var index = -1;
                expressions.forEach(function (item, i) {
                    if (item.title == str) {
                        index = i;
                    }
                })
                return index
            }

            // 4. 添加事例方法
            Vue.prototype.$parseExpression = function (text) {
                if (typeof (text) != "undefined") {
                    var sArr = text.match(/\[.*?\]/g);
                    if (sArr && sArr.length > 0) {
                        for (var i = 0; i < sArr.length; i++) {
                            var index = getIndex(sArr[i]);
                            if (index != -1) {
                                var reStr = "<img src=" + baseUrl + expressions[index].url + " height='20' width='20' />";
                                text = text.replace(sArr[i], reStr);
                            }
                        }
                    }
                }
                return text;
            }
        }
    }
    if (window.Vue) {
        Vue.use(uiExpression)
    } else {
        window.uiExpression = uiExpression;
    }
})()
//尝试修复键盘遮挡输入框的问题
if (/Android/gi.test(navigator.userAgent)) {
    window.addEventListener('resize', function () {
        if (document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') {
            window.setTimeout(function () {
                document.activeElement.scrollIntoViewIfNeeded();
            }, 0);
        }
    })
}
//创建链接
var socket = io.connect("http://148.70.90.247");
//登录组件
Vue.component('login', {
    template: '#login',
    data: function () {
        return {
            picList: [
                'http://q.qlogo.cn/headimg_dl?dst_uin=705597001&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=1361514346&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=624748513&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=1741841217&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=157509895&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=453079985&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=753678776&spec=100',
                'http://q.qlogo.cn/headimg_dl?dst_uin=962666291&spec=100'
            ],
            user: {
                avatarUrl: "http://q.qlogo.cn/headimg_dl?dst_uin=705597001&spec=100",
                name: ""
            },
            text: ""
        }
    },
    created: function () {
        this.initSocketEvent();
    },
    methods: {
        login: function () {
            var name = this.trim(this.user.name);
            if (name != "") {
                socket.emit("login", {
                    name: name,
                    avatarUrl: this.user.avatarUrl
                })
            } else {
                this.showError('请输入昵称！')
            }
        },
        trim: function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        },
        showError: function (err) {
            var _this = this;
            _this.text = err;
            setTimeout(function () {
                _this.text = "";
            }, 3000)
        },
        initSocketEvent: function () {
            var _this = this;
            socket.on("loginSuccess", function (user, users) {
                _this.$emit("login", {
                    user: user,
                    users: users
                })
            })
            socket.on("loginFail", function (msg) {
                _this.showError(msg)
            })
        },
    }
})
new Vue({
    el: "#bid",
    template: "#iChat",
    data: function () {
        return {
            //登录用户信息
            loginUser: {
                id: "u001",
                avatarUrl: "http://q.qlogo.cn/headimg_dl?dst_uin=705597001&spec=100",
                name: "似水流年",
                type: "user"
            },
            //设置tab选项
            tab: "menu",
            //在线会话用户列表
            users: [
                {
                    id: "group",
                    avatarUrl: "http://148.70.90.247/static/images/group-icon.png",
                    name: "聊天室群",
                    type: "room"
                }
            ],
            //会话对象，用于保存用户聊天消息
            threads: {},
            //默认选中的频道ID
            channelId: "group",
            //输入框的内容
            text: "",
            //设置
            setting: {
                isShowTime: true,
                isVoice: true,
                isShowName: true
            },
            //在线用户筛选的关键词
            keyWord: "",
            //用户是否登录的标识符
            isLogin: false,
            //是否展示表情选择区
            isPicker: false,
            //菜单
            menu: "chat",
            logs:[]
        }
    },
    computed: {
        //当前频道的消息列表
        messages: function () {
            var messages = [];
            if (this.threads[this.channelId]) {
                messages = this.threads[this.channelId];
            }
            return messages;
        },
        //当前频道的信息
        channel: function () {
            var user = {}, _this = this;
            this.users.forEach(function (item) {
                if (_this.channelId == item.id) {
                    user = item
                }
            })
            return user;
        }
    },
    filters: {
        //格式化时间显示
        time: function (value) {
            function two(str) {
                var s;
                s = "" + str;
                if (s.length === 1) {
                    s = "0" + s;
                }
                return s;
            };
            var time = new Date(value);
            var hour = time.getHours();
            var m = time.getMinutes();
            var s = time.getSeconds();
            return two(hour) + ":" + two(m) + ":" + two(s);
        }
    },
    methods: {
        //发送消息
        sendMessage: function (from, to,text,type) {
            var message = {
                threadId: to.id,
                from: from,
                to: to,
                content: text,
                time: new Date().getTime(),
                type: "send",
                isRead: true
            }
            this.addMessage(message)
        },
        //接收消息
        receiveMessage: function (from, to, text,type) {
            var channelId=from.id;
            if(to.type=='room'){
                channelId=to.id;
            }
            var isRead = this.channelId ==channelId;
            var message = {
                threadId: channelId,
                from: from,
                to: to,
                content: text,
                time: new Date().getTime(),
                type: "receive",
                isRead: isRead
            }
            this.addMessage(message)
            if (this.setting.isVoice && channelId != "group") {
                this.$refs.audio.play();
            }
        },
        //添加消息
        addMessage: function (message) {
            var _this = this;
            if (!this.threads[message.threadId]) {
                this.$set(this.threads, message.threadId, [])
            }
            this.threads[message.threadId].push(message)
            this.$nextTick(function () {
                _this.scrollFooter()
            })
        },
        //发送
        send: function () {
            var text = this.trim(this.text);
            if (text != "" && this.isLogin) {
                this.sendMessage(this.loginUser,this.channel,text,"text");
                if (this.channelId == "group") {
                    socket.emit("groupMessage",this.loginUser,this.channel,text,"text")
                } else {
                    socket.emit("message",this.loginUser,this.channel,text,"text")
                }
            }
            this.text = "";
        },
        //消息栏滚动到底部
        scrollFooter: function () {
            var ul = this.$refs.list;
            ul.scrollTop = ul.scrollHeight;
        },
        //获取某一频道最后一条消息
        getLastMsg: function (id) {
            var message = {};
            var messgaes = this.threads[id];
            if (messgaes && (messgaes.length > 0)) {
                message = messgaes[messgaes.length - 1];
            }
            return message;
        },
        //获取某一频道未读消息的条数
        getUnReaderNum: function (id) {
            var num = 0;
            var messgaes = this.threads[id];
            if (messgaes && (messgaes.length > 0)) {
                messgaes.forEach(function (item) {
                    if (!item.isRead) {
                        num++;
                    }
                })
            }
            return num;
        },
        //选择表情
        picker: function (expression) {
            this.text += expression.title;
        },
        //去除空格
        trim: function (string) {
            return string.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
        },
        //本地查找用户
        searchUser: function () {
            var arr = [], _this = this;
            this.users.forEach(function (item) {
                if ((item.name.indexOf(_this.keyWord) != -1) || (item.id.indexOf(_this.keyWord) != -1)) {
                    arr.push(item)
                }
            })
            return arr;
        },
        //切换频道
        changeChannel: function (channelId) {
            var _this = this;
            this.channelId = channelId;
            document.querySelector("title").innerHTML = _this.loginUser.name + " | 与" + this.channel.name + "聊天中";
            _this.setMessageReader(channelId);
            _this.tab = "chat";
            this.$nextTick(function () {
                _this.scrollFooter()
            })
        },
        //设置某一频道所有消息为已读
        setMessageReader: function (id) {
            var messgaes = this.threads[id], _this = this;
            if (messgaes && (messgaes.length > 0)) {
                messgaes.forEach(function (item, index) {
                    if (!item.isRead) {
                        _this.threads[id][index].isRead = true;
                    }
                })
            }
        },
        //处理用户登录
        userLogin: function (payload) {
            this.loginUser = payload.user;
            if (!this.isLogin) {
                this.isLogin = true;
                document.querySelector("title").innerHTML = this.loginUser.name + " | 与" + this.channel.name + "聊天中";
                this.users = this.users.concat(payload.users);
                this.initSocketEvent();
            }
        },
        //初始化消息监听事件
        initSocketEvent: function () {
            var _this = this;
            _this.socket=socket;
            _this.socket.on('system', function (user, type) {
                if (type == "join") {
                    user.messages = []
                    _this.users.push(user)
                }
                if (type == "logout") {
                    _this.users.forEach(function (item, index) {
                        if (item.id == user.id) {
                            _this.users.splice(index, 1);
                        }
                    })
                    if (user.id == _this.channelId) {
                        _this.changeChannel("group");
                    }
                }
            })
            _this.socket.on("message", function (from, to,text,type) {
                _this.receiveMessage(from,to,text,type)
            })
            _this.socket.on("groupMessage", function (from, to,text,type) {
                _this.receiveMessage(from,to,text,type)
            })
            _this.socket.on("error",(error)=>{
                console.log("出错了！！")
                _this.saveLog("socket链接出错了！"+JSON.stringify(error),"error");
            })
            _this.socket.on("connect",(data)=>{
                console.log("链接成功！",data)
                _this.saveLog("连接成功！"+JSON.stringify(data),"success");
                _this.isOnline=true;
            })
            _this.socket.on("disconnect",(data)=>{
                _this.isOnline=false;
                console.log(JSON.stringify(data)+ ' - disconnect');
                _this.saveLog("断开连接！"+JSON.stringify(data)+ ' - disconnect',"warning");
            })
            _this.socket.on("connect_error",(data)=>{
                _this.isOnline=false;
                console.log(JSON.stringify(data)+ ' - connect_error')
                _this.saveLog("连接出错了！"+JSON.stringify(data)+ ' - connect_error',"error");
            })
            _this.socket.on("connect_timeout",(data)=>{
                _this.isOnline=false;
                console.log(JSON.stringify(data)+ ' - connect_timeout')
                _this.saveLog("连接超时！"+JSON.stringify(data)+ ' - connect_timeout',"warning");
            })
            _this.socket.on("reconnect",(data)=>{
                console.log(JSON.stringify(data)+ ' - reconnect')
                _this.saveLog("重新连接！"+JSON.stringify(data)+ ' - reconnect',"info");
            })
            _this.socket.on("reconnect_attempt",(data)=>{
                _this.socket.io.opts.query={
                    User:_this.loginUser.id?JSON.stringify(_this.loginUser):''
                }
                _this.saveLog("尝试重新连接！"+JSON.stringify(data)+ ' - reconnect_attempt',"info");
            })
        },
        saveLog(text,type){
            this.logs.push({
                text:text,
                type:type,
                time:new Date().getTime()
            })
            let $el=document.getElementById('log-container');
            if($el){
                this.$nextTick(()=>{
                    $el.scrollTop = $el.scrollHeight
                })
            }
        },
    }
})