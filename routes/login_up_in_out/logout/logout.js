let express = require('express');
let app = express();   //可以设置一个路由

//清除session
app.get('/user/logout', function(req, res){
    req.session.destroy();  //销毁
    //console.log(req.session); === undefined
    //console.log(req.session.user);
    if(req.session === undefined){
        //如果不存在了---提示成功注销登录，否则返回登出失败
        res.send('成功注销');
    }else{
        res.send('注销失败')
    }
    //res.redirect()   //这里应该调到首页去，在注销登录以后
})
module.exports = app;