let status=1;
function getLogOrNot(status) {
    if(status==0){
        $("#judgeWhetherLog").append(`<div>
            <span>
            <a href="login.html" class="login">登录</a>
            </span>
            <span style="color: #c4c3c3">|</span>
            <span>
            <a href="register.html" class="register">注册</a>
            </span>
            </div>`);
    }
    else {
        $("#judgeWhetherLog").append(`<div>
            <span>
            <a href="person.html" class="welcome">Hello~ 欢迎进入个人中心</a>
            </span> 
            </div>`);
    }
}