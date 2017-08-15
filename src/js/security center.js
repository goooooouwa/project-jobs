function confirmation() {
    var a =document.getElementById("InputNewPassword");
    var b =document.getElementById("InputNewPassword2");
    var d=document.getElementById("newPassword2");
    var e=document.getElementById("newPassword2").getElementsByTagName("p");
    if (a.value===b.value||b.value===""){
        d.removeChild(e[0]);
    }
    else if  (a.value !== b.value&&e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
    }
}
function passwordIsCorrect2() {
    var a =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var b = document.getElementById("InputNewPassword");
    var c = document.getElementById("newPassword");
    var d = document.getElementById("newPassword").getElementsByTagName("p");
    if (a.test(b.value)||b.value===""){
        c.removeChild(d[0]);
    }
    else if (a.test(b.value)===false&& d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
    }

}
function modifyPassword() {
    var a = document.getElementById("rightSideWindow");
    a.innerHTML="<br>\n" +
        "            <div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputCurrentPassword\" style=\"font-size: 30px\">Current Password</label>\n" +
        "                <input  style=\"background: ghostwhite\" type=\"password\" class=\"form-control\" id=\"InputCurrentPassword\" placeholder=\"Enter current password\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\" id='newPassword'>\n" +
        "                <label for=\"InputNewPassword\" style=\"font-size: 30px\">New Password</label>\n" +
        "                <input style=\"background: ghostwhite\" onblur='passwordIsCorrect2()' type=\"password\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"您的密码应由6到16位大小写字母、阿拉伯数字、下划线或其它常见特殊字符组成\" class=\"form-control\" id=\"InputNewPassword\" placeholder=\"Enter new password\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\" id='newPassword2'>\n" +
        "                <label for=\"InputNewPassword2\" style=\"font-size: 30px\">Password Confirmation</label>\n" +
        "                <input style=\"background: ghostwhite\" onblur=\"confirmation()\" type=\"password\" class=\"form-control\" id=\"InputNewPassword2\" placeholder=\"Enter password again\">\n" +
        "            </div>\n" +"<br>"+
        "                <button  id =\"button\" type=\"submit\" class=\"btn btn-success  btn-lg\" disabled=\"disabled\" >Save changes</button>\n" +
        "\n" +
        "        </div>"
}