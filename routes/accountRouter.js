const router = require('express').Router();
const crypto = require('crypto');
const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: '163',
    auth: {
        user: '15927491671@163.com',
        pass: 'LXX1996,.'
    }
});
router.post('/check/email', function (req, res) {
    let email = req.body.email;
    let sql_email = `select username from cgc_user where email='${email}'`;
    connection.query(sql_email, function (err, result) {
        if (result.length) {
            res.json({code: 1, msg: '邮箱已注册'});
        } else {
            res.json({code: 0, msg: ''});
        }
    });
});
router.post('/check/username', function (req, res) {
    let username = req.body.username;
    let sql_username = `select username from cgc_user where username='${username}'`;
    connection.query(sql_username, function (err, result) {
        if (result.length) {
            res.json({code: 1, msg: '用户名已注册'});
        } else {
            res.json({code: 0, msg: ''});
        }
    });
});
router.get('/signup', function (req, res) {
    if (req.session.username) {
        res.redirect('/');
    } else {
        res.render('register.html');
    }
})
router.post('/signup', function (req, res) {
    let email = req.body.email;
    let username = req.body.username;
    let password = req.body.password;
    if (!email || !username || !password) {
        res.render('Rigistry.html');
    }
    let md5 = crypto.createHash('md5');
    md5.update(password);
    password = md5.digest('hex');
    let sql_email = `select username from cgc_user where email='${email}'`;
    let sql_username = `select username from cgc_user where username='${username}'`;
    let sql = `insert into cgc_user(email,username,password,activity) values('${email}','${username}','${password}',0)`;

    function check_email() {
        return new Promise((resolve, reject) => {
            connection.query(sql_email, function (err, result) {
                if (result.length) {
                    reject(1);
                } else {
                    resolve(0);
                }
            });
        });
    }

    function check_username(code) {
        return new Promise((resolve, reject) => {
            connection.query(sql_username, function (err, result) {
                if (result.length) {
                    reject(2);
                } else {
                    resolve(0);
                }
            });
        });
    }

    check_email().then(check_username).then(code => {
        connection.query(sql, function (err, result) {
            if (err) {
                res.json({code: 3, msg: "注册失败"})
            } else {
                res.json({code: 0, msg: '注册成功'});
            }
        });
    }).catch(code => {
        switch (code) {
            case 1:
                res.json({code: 1, msg: '邮箱已注册'});
                break;
            case 2:
                res.json({code: 2, msg: '用户名已存在'});
        }
    });
});
router.get('/login', function (req, res) {
    if (req.session.username) {
        res.redirect('/');
    } else {
        res.render('login.html');
    }
});
router.post('/login', function (req, res) {
    if (req.session.username) {
        res.end();
    }
    let username = req.body.username;
    let password = req.body.password;
    if (!username || !password) {
        res.render('login.html');
        return;
    }
    let md5 = crypto.createHash('md5');
    md5.update(password);
    password = md5.digest('hex');
    let sql = `select username from cgc_user where password='${password}' and (username='${username}' or email='${username}')`;
    console.log(sql);
    connection.query(sql, function (err, result) {
        if (!err && result.length == 1) {
            req.session.username = JSON.parse(JSON.stringify(result))[0].username;
            res.redirect('/');
        }
        else {
            res.json({code: 1, msg: '用户名或密码错误'});
        }
    });
});
router.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/');
});
router.get('/forgetpwd', function (req, res) {
    res.render('forget.html');
});
router.post('/forgetpwd', function (req, res) {
    let email = req.body.email;
    let mailOptions = {
        from: '15927491671@163.com', // 发送者
        to: email, // 接受者,可以同时发送多个,以逗号隔开
        subject: '找回密码', // 标题
        html: `<h2>www.codingirls.club:</h2><h3><a href="http://www.baidu.com">点击链接重置密码</a></h3>`
    };
    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            console.log(err);
            res.send("发送失败");
        }else{
            res.send("发送成功");
        }
    });
});
router.get('/', function (req, res) {
    if (!req.session.username) {
        res.redirect('/account/login');
    } else {
        res.locals.data = {username: req.session.username};
        res.render('person');
    }
});
router.use('/post', require('./ownPostRouter.js'));
module.exports = router;