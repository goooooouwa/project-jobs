const express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var crypto = require('crypto');
const app = express();
var mysql=require('mysql');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('src'));
app.use(express.static('images'));
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cgc_job'
});
connection.connect();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.post('/registry/email',function (req,res) {
    let email = req.body.email;
    let sql_email=`select username from cgc_user where email='${email}'`;
    connection.query(sql_email, function (err, result) {
        if (result.length){
            res.json({code:1,msg:'邮箱已注册'});
        }else{
            res.json({code:0,msg:''});
        }
    });
});
app.post('/registry/username',function (req,res) {
    let username = req.body.username;
    let sql_username=`select username from cgc_user where username='${username}'`;
    connection.query(sql_username, function (err, result) {
        if (result.length){
            res.json({code:1,msg:'用户名已注册'});
        }else{
            res.json({code:0,msg:''});
        }
    });
});
app.post('/registry',function (req,res) {
    let email = req.body.email;
    let username = req.body.username;
    var md5 = crypto.createHash('md5');
    md5.update(req.body.password);
    let password =md5.digest('hex');
    let sql_email=`select username from cgc_user where email='${email}'`;
    let sql_username=`select username from cgc_user where username='${username}'`;
    let sql = `insert into cgc_user(email,username,password,activity) values('${email}','${username}','${password}',0)`;
    function check_email() {
        return new Promise((resolve, reject) => {
            connection.query(sql_email, function (err, result) {
                if (result.length){
                    reject(1);
                }else{
                    resolve(0);
                }
            });
        });
    }
    function check_username(code) {
        return new Promise((resolve, reject) => {
            connection.query(sql_username, function (err, result) {
                if (result.length){
                    reject(2);
                }else{
                    resolve(0);
                }
            });
        });
    }
    check_email().then(check_username).then(code=>{
        connection.query(sql, function (err, result) {
            if (err){
                res.json({code:3,msg:"注册失败"})
            }else{
                res.json({code:0,msg:'注册成功'});
            }
        });
    }).catch(code=>{
        switch (code){
            case 1:res.json({code:1,msg:'邮箱已注册'});break;
            case 2:res.json({code:2,msg:'用户名已存在'});
        }
    });
});

app.post('/login',function (req,res) {
    let username = req.body.username;
    var md5 = crypto.createHash('md5');
    md5.update(req.body.password);
    let password =md5.digest('hex');
    let sql=`select username from cgc_user where username='${username}' and password='${password}'`;
    connection.query(sql,function (err,result) {
        if (result.length==1){
            res.json({code:0,msg:'登录成功'})
        }
        else{
            res.json({code:1,msg:'用户名或密码错误'});
        }
    });
});

app.listen(8080);