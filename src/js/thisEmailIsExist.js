function thisEmailIsExist() {
    //比对后台数据
    //如果存在该注册邮箱，且输入的密码与邮箱相对应，跳转相应页面
    //如果不存在该注册邮箱
    var a= document.getElementById("email");
    var b = document.getElementById("emails");
    var d =document.getElementById("emails").getElementsByTagName("p");
    var e =document.getElementById("login");
    b.innerHTML+="<p style='color: red'>\n" +
            " <small>This email have not been sign up!!!</small>\n" +
            " </p>"
    return false;
    window.open("https://www.baidu.com/");
}