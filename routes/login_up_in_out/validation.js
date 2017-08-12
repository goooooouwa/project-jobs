let express = require('express');
let crypto = require('crypto'); //加密库
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');  //session cookie
let session = require('express-session');
let mailer = require('./sendemail/mailer');  //调用


let app = express();

app.use(express.static('static')); ///设置静态文件目录

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser('session'));
app.use(session({
    secret: 'keyboard cat'
}));


///连接数据库   
var mysql = require('mysql');
var connection = mysql.createConnection({host: 'localhost', user: 'root', password: '', database: 'zpinfo'});

app.all('*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1')
    if (req.method == "OPTIONS") 
        res.send(200/*让options请求快速返回*/);
    else 
        next();
    }
);
app.use(function (req, res, next) {///使用中间件来进行session的操作
  if (!req.session.user) {
    req.session.user = {}  ///如果session不存在，则创建一个空的user,如果存在，则不进行一定的操作
    req.session.user['info'] = '';  ///设置邮箱
    console.log('--------------------------------')
  }
  next()
});

app.post('/user/signup/username',function (req,res) { ///失去焦点，立即发送验证用户名存在请求
    //验证长度---
    let username = req.body.username;
    if(username.length >=6 && username.length <=18){
        //查找用户名--数据库                   //这是表名
        let sql_username=`select username from usertable where username='${username}'`;
        connection.query(sql_username, function (err, result) {
            if (result.length){
                res.json({code:1,msg:'用户名已注册'});
            }else{
                res.json({code:0,msg:''});
            }
        });
        
    }else{
        res.json({code:2, msg:'长度必须在[6,18]'});  ///发送格式不正确信息
    }
});



app.post('/user/signup',function (req,res) { //注册函数
    let email = req.body.useremail || '';
    let username = req.body.username || '';
    var md5 = crypto.createHash('md5');
    md5.update(req.body.password || '');
    let password =md5.digest('hex');
 
    console.log('73' + username + ' ' + email + ' ' + password); 
    let sql_email=`select username from usertable where email='${email}'`;
    let sql_username=`select username from usertable where username='${username}'`;
    let sql = `insert into usertable(username,password, email) values('${username}','${password}','${email}')`;
    function check_email() {
        return new Promise((resolve, reject) => {
            connection.query(sql_email, function (err, result) {
                if (result.length){
                    reject(1);  //失败
                }else{
                    resolve(0);  //成功
                }
            });
        });
    }
    function check_username(code) {
        return new Promise((resolve, reject) => {
            connection.query(sql_username, function (err, result) {
                if (result.length){
                    reject(2); ///fail
                }else{
                    resolve(0); //success
                }
            });
        });
    }
    check_email().then(check_username).then(code=>{
        connection.query(sql, function (err, result) {
            if (err){
                res.json({code:3,msg:"注册失败"})
            }else{
                //发送 useremail作为参数 -- 》 邮箱 -->链接点击 --> 发送一个一个请求
                let user={
                    username:  `${req.body.username}`,
                    password:  `${req.body.password}`,
                    usermail:  `${req.body.useremail}`,
                    active: false,
                    activeToken: '',   //字符串
                    activeExpires: ''  //日期
                }
                //console.log(user);
                comfirmmail(user) ///第一次注册，发送的第一次邮件
                res.json({code:0,msg:`注册成功，请到${user.usermail}进行验证`});
            }
        });
    }).catch(code=>{
        switch (code){
            case 1:res.json({code:1,msg:'邮箱已注册'});break;
            case 2:res.json({code:2,msg:'用户名已存在'});
        }
    });
});

function comfirmmail(user){
    //生成20位激活码
    crypto.randomBytes(20, function(err, buf){
        //保证激活码不会重复
        user.activeToken = buf.toString('hex');
        user.activeExpires = Date.now() + 3600 * 1000 * 2;  //设置邮箱验证有效时间，默认为1小时
        var link = 'http://localhost:3334/account/active?token='
                    + user.activeToken;
        //发送邮件
        mailer({
            to:`${user.usermail}`,
            subject: '欢迎注册码妞俱乐部',
            html: '请点击<a href="' + link + '">此处</a>激活.'
        });
        //console.log(user);
        let sql = `update usertable set activetoken = '${user.activeToken}', activedate='${user.activeExpires}' where username = '${user.username}'`;
        connection.query(sql, function(err, result){
            if(err){
                console.log(err);
            }else{
                console.log('success');  //添加验证码成功
            }
        })        
    })
}

app.get('/account/active', function(req,res){ ///得到验证码，访问验证码
    let actoken = req.query.token;
    let sql = `select * from usertable where activetoken='${actoken}'`;
    connection.query(sql, function(err, result){
        if(err){
            console.log(err);
            res.send('出了点小状况');
        }else if(result.length){
            //得到结果
            console.log(result);
            let date = Date.now();  //得到当前时间
            let flag = date>=parseInt(result[0].activedate) ? 0 : 1;///如果当前时间大于截止时间，返回0 否则返回1
            
            //if(parseInt(date))
            if(result[0].activetoken === actoken){  //验证码匹配成功，则进行参数
                if(flag === 1){  //验证成功，需要将一个状态变为1
                    let sql1 = `update usertable set activity=1 where username = '${result[0].username}'`; //设置当前用户的username变为1
                    connection.query(sql1, function(err, result1){
                        if(err){
                            console.log('sql1: ' + err);
                            res.send('出了点小状况哦');
                        }else{
                            res.send(`匹配成功，请登录`); 
                        }
                    })
                }else{
                    res.send(`验证已过期，请重新发送验证邮箱`);
                }
            }
        }else{
            console.log('验证已过期，请重新发送验证邮箱');//匹配失败
            res.send('something wrong');
        }
    })
})

function name_or_email(username){  ///判断输入的是用户名还是密码
    let index = username.indexOf('@');
    return index===-1?1:0;
}

app.post('/user/login', function(req,res){ ///用户登录
    //填写信息 --> 发送账号密码 -->验证匹配密码(邮箱存在 或者不存在) -->(存在)登陆成功 -->进入首页
    //验证 邮箱 || 用户名
    let username = req.body.username || '';
    let password1 = req.body.password || '';
    let flag = name_or_email(username);

    let md5 = crypto.createHash('md5');
    let password = md5.update(password1).digest('hex');  ///加密密码
   
    //验证密码和查看用户
    confirmUser(username, password,req,res, flag);

});

app.get('/index', function(req, res){  //进入首页，查看登录状态
    console.log(req.session.user);
    if(req.session.user.info !== ''){  //如果email不为空，说明登录
        console.log(req.session);
        let user = req.session.user;
        res.send(`Hello, ${user.info}`);
    }else{
        res.send('Sorry, you\'re not logined in..Please try to login in' );
    }
});


function confirmUser(username, password,req,res,flag){  ///验证用户信息  账号存在 同时密码匹配·
    let getSql;
    if(flag === 1){
        getSql = `SELECT * FROM usertable WHERE username='${username}'`;
    }else{
         getSql = `SELECT * FROM usertable WHERE email='${username}'`;  //一个查询语句 不存在 返回一个[]数组
    }
    //console.log(getSql)
    connection.query(getSql, function(err, result){
        if(err){
            console.log('[INSERT ERROR] - ', err.message);
            return;
        }
        if(result.length === 0){
            console.log('用户名不存在或者密码错误')
            res.json({code:1, msg:'用户名不存在或密码错误!'});
        }else{
            let pass=result[0].password;   
            let activity = result[0].activity;  //得到状态
        
            //console.log(pass);
            let userInfo = result[0].username;
            if(password === pass && parseInt(activity) === 1){  //这里的操作应该是将数据添加到session中
                console.log('密码验证成功');
            
                req.session.user['info'] = `${userInfo}`; //设置session
                console.log(req.session.user);
                res.json({code:0, msg:`Hello ${req.session.user['info']}, Welcome here`});
            }else{
                console.log('还未验证，请发送邮件进行验证');
            }
        }
        
    })
}


//=================登出
let logout = require('./logout/logout'); //得到模块
app.use('/', logout);

//============================监听
app.listen(3334);