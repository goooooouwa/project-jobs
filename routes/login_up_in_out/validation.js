let express=require('express');
let app = express.Router();
const crypto = require('crypto');
const mailer = require('./sendemail/mailer.js');
app.use(function(req, res, next) { ///使用中间件来进行session的操作
    if (!req.session.user) {
        req.session.user = {} ///如果session不存在，则创建一个空的user,如果存在，则不进行一定的操作
        req.session.user['info'] = ''; ///设置设置用户民
        console.log('40 ------ 40 ')
    }
    next()
});
 
app.post('/signup/username', function(req, res) { ///失去焦点，立即发送验证用户名存在请求
    //验证长度---
    let username = req.body.username;
    if (username.length >= 6 && username.length <= 18) {
        //查找用户名--数据库                   //这是表名
        let sql_username = `select username from usertable where username='${username}'`;
        connection.query(sql_username, function(err, result) {
            if (result.length) {
                res.json({ code: 1, msg: '用户名已注册' });
            } else {
                res.json({ code: 0, msg: '' });
            }
        });

    } else {
        res.json({ code: 2, msg: '长度必须在[6,18]' }); ///发送格式不正确信息
    }
});



app.post('/signup', function(req, res) { //注册函数
    let email = req.body.useremail || '';
    let username = req.body.username || '';
    var md5 = crypto.createHash('md5');
    md5.update(req.body.password || '');
    let password = md5.digest('hex');

    //console.log('73' + username + ' ' + email + ' ' + password);
    let sql_email = `select username from usertable where email='${email}'`;
    let sql_username = `select username from usertable where username='${username}'`;
    let sql = `insert into usertable(username,password, email) values('${username}','${password}','${email}')`;

    function check_email() {
        return new Promise((resolve, reject) => {
            connection.query(sql_email, function(err, result) {
                if (result.length) {
                    reject(1); //失败
                } else {
                    resolve(0); //成功
                }
            });
        });
    }

    function check_username(code) {
        return new Promise((resolve, reject) => {
            connection.query(sql_username, function(err, result) {
                if (result.length) {
                    reject(2); ///fail
                } else {
                    resolve(0); //success
                }
            });
        });
    }
    check_email().then(check_username).then(code => {
        connection.query(sql, function(err, result) {
            if (err) {
                res.json({ code: 3, msg: "注册失败" })
            } else {
                //发送 useremail作为参数 -- 》 邮箱 -->链接点击 --> 发送一个一个请求
                let user = {
                        username: `${req.body.username}`,
                        password: `${req.body.password}`,
                        usermail: `${req.body.useremail}`,
                        active: false,
                        activeToken: '', //字符串
                        activeExpires: '' //日期
                    }
                    //console.log(user);
                comfirmmail(user) ///第一次注册，发送的第一次邮件
                res.json({ code: 0, msg: `注册成功，请到${user.usermail}进行验证` });
            }
        });
    }).catch(code => {
        switch (code) {
            case 1:
                res.json({ code: 1, msg: '邮箱已注册' });
                break;
            case 2:
                res.json({ code: 2, msg: '用户名已存在' });
        }
    });
});

//当用户为验证，需要再次获得邮箱验证的时候---点击发送邮件按钮（包括过期验证和未验证）--都是通过user这个对象进行传递的，所有需要前端发送邮箱信息给后端
app.post('/againemail', function(req, res) {
    let email = req.query.email || ''; //通过邮箱去查找用户
    console.log(email);
    let sql = `select * from usertable where email='${email}'`; //得到用户所有信息

    connection.query(sql, function(err, result) {
        if (err) {
            console.log('138-- ' + err);
        } else {
            if(result.length){
                let user = {
                    username: `${result[0].username}`,
                    password: `${result[0].password}`,
                    usermail: `${result[0].email}`,
                    active: false,
                    activeToken: '', //字符串
                    activeExpires: '' //日期
                }
                comfirmmail(user) //再次验证
            }else{
                console.log('151---查询失败')
            }
            
        }
    })
})


function comfirmmail(user) {
    //生成20位激活码
    crypto.randomBytes(20, function(err, buf) {
        //保证激活码不会重复
        user.activeToken = buf.toString('hex');
        user.activeExpires = Date.now() + 3600 * 1000 * 2; //设置邮箱验证有效时间，默认为1小时
        var link = 'http://47.93.200.205:8080/user/active?token=' +
            user.activeToken;
        //发送邮件
        mailer({
            to: `${user.usermail}`,
            subject: '欢迎注册码妞俱乐部',
            html: '请点击<a href="' + link + '">此处</a>激活.'
        });
        //console.log(user);
        let sql = `update usertable set activetoken = '${user.activeToken}', activedate='${user.activeExpires}' where username = '${user.username}'`;
        connection.query(sql, function(err, result) {
            if (err) {
                console.log('173--- ' + err);
            } else {
                console.log('175 -- success'); //添加验证码成功
            }
        })
    })
}
 
app.get('/active', function(req, res) { ///得到验证码，访问验证码
    let actoken = req.query.token;
    let sql = `select * from usertable where activetoken='${actoken}'`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('186-- ' + err);
            res.send('出了点小状况');
        } else if (result.length) {
            //得到结果
            // console.log(result);
            let date = Date.now(); //得到当前时间
            let flag = date >= parseInt(result[0].activedate) ? 0 : 1; ///如果当前时间大于截止时间，返回0 否则返回1

            //if(parseInt(date))
            if (result[0].activetoken === actoken) { //验证码匹配成功，则进行参数
                if (flag === 1) { //验证成功，需要将一个状态变为1
                    let sql1 = `update usertable set activity=1 where username = '${result[0].username}'`; //设置当前用户的username变为1
                    connection.query(sql1, function(err, result1) {
                        if (err) {
                            console.log('201---: ' + err);
                            res.send('出了点小状况哦');
                        } else {
                            res.send(`匹配成功，请登录`);
                        }
                    })
                } else {
                    res.send(`验证已过期，请重新发送验证邮箱`);
                }
            }
        } else {
            console.log('验证已过期，请重新发送验证邮箱'); //匹配失败
            res.send('something wrong');
        }
    })
})

function name_or_email(username) { ///判断输入的是用户名还是密码
    let index = username.indexOf('@');
    return index === -1 ? 1 : 0;
}

app.post('/login', function(req, res) { ///用户登录
    //填写信息 --> 发送账号密码 -->验证匹配密码(邮箱存在 或者不存在) -->(存在)登陆成功 -->进入首页
    //验证 邮箱 || 用户名 
    let username = req.body.username || '';
    let password1 = req.body.password || '';
    let flag = name_or_email(username);

    let md5 = crypto.createHash('md5');
    let password = md5.update(password1).digest('hex'); ///加密密码

    //验证密码和查看用户
    if (req.session.user.info !== '') {
        console.log('用户已经登录,请不要再次登录') //初次登录的时候，此时的info为空  当用户登录以后  提示不为空，并跳转网页
        res.json({ code: 1, msg: '请不要重复登录' })
    } else {
        confirmUser(username, password, req, res, flag);
    }
});

app.get('/index', function(req, res) { //进入首页，查看登录状态
    if (req.session.username) { //如果email不为空，说明登录
        let user = req.session.username;
        //res.send(`Hello, ${user.info}`);
        res.json({code:0, msg:`${user}`})
    } else {
        res.json({code:1,msg:'Sorry, you\'re not logined in..Please try to login in'});
    }
});


function confirmUser(username, password, req, res, flag) { ///验证用户信息  账号存在 同时密码匹配·
    let getSql;
    if (flag === 1) {
        getSql = `SELECT * FROM usertable WHERE username='${username}'`;
    } else {
        getSql = `SELECT * FROM usertable WHERE email='${username}'`; //一个查询语句 不存在 返回一个[]数组
    }
    //console.log(getSql)
    connection.query(getSql, function(err, result) {
        if (err) {
            console.log('263 --- [INSERT ERROR] - ', err.message);
            return;
        }
        if (result.length === 0) {
            console.log('267---- 用户名不存在')
            res.json({ code: 2, msg: '用户名不存在' });
        } else {
            let pass = result[0].password;
            let activity = result[0].activity; //得到状态

            //console.log(pass);
            let userInfo = result[0].username;
            if (password === pass) { //这里的操作应该是将数据添加到session中
                if (parseInt(activity) === 1) {
                    console.log('277 -- 密码验证成功');
                    req.session.username = `${userInfo}`; //设置session
                    console.log(req.session.user);
                    res.json({ code: 0, msg: `Hello ${req.session.username}, Welcome here` });
                } else {
                    res.json({ code: 3, msg: '还未验证，请发送邮件进行验证' });
                    console.log('283 --- 还未验证，请发送邮件进行验证');
                }
            } else {
                res.json({ code: 4, msg: '密码错误' })
                console.log('287 --- 密码错误');
            }
        }

    })
}


//==用户细节信息
app.post('/detail', function(req, res) {
    let username = req.session.username;
    //console.log(username);
    let company_name = req.body.companyname
    let company_address = req.body.companyaddress
    let company_kind = req.body.companykind //得到用户传送的数据

    //console.log(company_address)
    //设置sql
    let sql = `update usertable set companyname='${company_name}',companyaddress='${company_address}', companykind='${company_kind}' where username='${username}'`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('314--- ' + err)
        } else {
            console.log('316--- success')
            res.json({ code: 0, msg: '用户信息更新成功' })
        }
    })

})

app.get('/detail', function(req, res) {
    let username = req.session.username;
    //console.log(username);
    //设置sql
    let sql = `select * from usertable where username='${username}'`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('330--- ' + err)
        } else if(result.length){
            console.log('332--- success')
            
            res.json({code:0,msg:{
                'name':result[0].companyname,
                'address': result[0].companyaddress,
                'kind': result[0].companykind
            }})
            //res.json({ code: 0, msg: '用户信息更新成功' })
        }else{
            res.json({code:1, msg:"查询失败"})
        }
    })

})

//密码修改操作
app.post('/set/password', function(req,res){
    let username = req.body.username.slice(1);
    let  md5 = crypto.createHash('md5');

    md5.update(req.body.current || '');
    let current = md5.digest('hex');

    let  md6 = crypto.createHash('md5');
    md6.update(req.body.newpass || '');
    let newpass = md6.digest('hex')

    let sql = `select password from usertable where username='${username}'`;
    let sql_newpass = `update usertable set password='${newpass}' where username= '${username}'`
    connection.query(sql, function(err, result){
        if(err){
            console.log('358-- ' + err)
        }else{
            console.log(result[0].password)
            if(current === result[0].password){
                connection.query(sql_newpass, function(err,result){
                    if(err){
                        console.log('370--' + err)
                    }else{
                        res.json({code:0,msg:"更新密码成功"})
                    }
                })
            }else{
                res.json({code:1, msg:"请输入正确密码"})
            }
        }
    })
})
///设置用户颜色
app.post('/set/color', function(req,res){
    let username = req.session.username; //得到session
    //console.log('384-- ' + username)
    //let username = req.body.username
    let color = req.body.color;
    //console.log(color)
    let sql = `update usertable set usercolor='${color}' where username='${username}'`;
    connection.query(sql, function(err, result){
        if(err){
            console.log('388-- '+ err)
        }else{
            res.json({code:0, msg: '设置颜色成功'})
        }
    })
})

app.get('/get/color', function(req, res){
    let username = req.session.username; //得到session;
    let sql = `select usercolor from usertable where username='${username}'`;
    connection.query(sql, function(err, result){
        if(err){
            console.log('400-- ' + err)
        }else if(result.length){
            res.json({code:0, msg:result[0].usercolor})
        }
    })
})

//=================登出
//清除session
app.get('/logout', function(req, res) {
    req.session.destroy(); //销毁
    //console.log(req.session); === undefined
    //console.log(req.session.user);
    if (req.session === undefined) {
        //如果不存在了---提示成功注销登录，否则返回登出失败
        res.send('成功注销');
    } else {
        res.send('注销失败')
    }
    //res.redirect()   //这里应该调到首页去，在注销登录以后
})

//=================忘记密码
let forget = require('./forgetpassword/forgetpass');
app.use('/forget', forget);
//============================监听
module.exports=app;