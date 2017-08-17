let express = require('express');
let crypto = require('crypto'); //加密库
let app = express.Router();
let mailer = require('../sendemail/mailer'); //调用

app.post('/password', function(req, res) {
    let useremail = req.body.useremail; //得到邮箱
    //发送验证码到邮箱
    let num = '';
    for (let i = 0; i < 4; i++) {
        num += Math.floor(Math.random() * 10);
    }

    //发送邮件
    mailer({
        to: `${useremail}`,
        subject: '码妞俱乐部忘记密码',
        html: `验证码为  <a style='text-decoration: none;'>${num}</a> ,有效期三分钟;`
    });

    let sql = `update usertable set forgetpass = '${num}' where email = '${useremail}'`;
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('26---' + err);
        } else {
            console.log('28--- success') //添加验证码成功
            res.json({code:0,msg:'验证码发送成功'})
        }
    })
})


app.post('/resert', function(req, res) {
    let useremail = req.body.useremail || '';
    let verification = req.body.verification; //得到验证码

    var md5 = crypto.createHash('md5');
    md5.update(req.body.password || '');
    let password = md5.digest('hex');

    let sql = `select * from  usertable where email='${useremail}'`;
    let sql_pass = `update usertable set password = '${password}' where email = '${useremail}'`
    connection.query(sql, function(err, result) {
        if (err) {
            console.log('42--- ' + err);
        } else {
            let vcode = result[0].forgetpass; //得到数据库中的验证码
            if (vcode === verification) {
                //更改密码
                if (password === result[0].password) {
                    console.log('51--- 密码不能与近期密码相同')
                    res.json({code:1,msg:'密码不能与近期密码相同'})
                } else {
                    connection.query(sql_pass, function(err, result) {
                        if (err) {
                            console.log('57-- ' + err)
                        } else {
                            console.log('59-- 更新成功') //可以选择跳转到登录页面
                            res.json({ code: 0, msg: '修改密码成功' })
                        }
                    })
                }
            } else {
                console.log('48--- 验证码错误')
                res.json({code:1, msg:'验证码错误'})
            }
        }
    })
})
module.exports = app;