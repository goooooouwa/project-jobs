const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql=require('mysql');
const crypto = require('crypto');
const ejs=require('ejs');
const app = express();
app.engine('html', ejs.renderFile);
app.set("view engine", "html");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('./src'));
global.connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'cgc_job'
});
connection.connect();
app.use(session({
    secret: 'firefox',
    cookie: {maxAge: 7*24*60*60*1000 }, //保留一周
    saveUninitialized: false,  // 是否自动保存未初始化的会话，建议false
    resave: true,  // 是否每次都重新保存会话
}));
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.get('/',function (req,res) {
    if (!req.session.username)
        res.locals.data={render:false};
    else
        res.locals.data={username:req.session.username,render:true};
    res.redirect('/html/HOME.html');
});
app.use('/account',require('./routes/accountRouter.js'));
app.use('/user',require('./routes/login_up_in_out/validation.js'));
app.use('/post',require('./routes/postRouter.js'));
app.listen(8080);