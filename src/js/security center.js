function confirmation() {
    document.getElementById("InputNewPassword2").blur();
    var a =document.getElementById("InputNewPassword");
    var b =document.getElementById("InputNewPassword2");
    var d=document.getElementById("newPassword2");
    var e=document.getElementById("newPassword2").getElementsByTagName("p");
    var f = document.getElementById("passwordOK");
    f.checked=false;
    if (a.value===b.value||b.value===""){
        if(e[0]){
            d.removeChild(e[0]);
        }

    }
    else if  (a.value !== b.value&&e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
    }
}
function passwordIsCorrect1() {
    document.getElementById("InputCurrentPassword").blur();
    var a =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var b = document.getElementById("InputCurrentPassword");
    var c = document.getElementById("oldpassword");
    var d = document.getElementById("oldpassword").getElementsByTagName("p");
    if (a.test(b.value)||b.value===""){
        if(d[0]){
            c.removeChild(d[0]);
        }
    }
    else if (a.test(b.value)===false&& d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
    }
}
function passwordIsCorrect2() {
    document.getElementById("InputNewPassword").blur();
    var a =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var b = document.getElementById("InputNewPassword");
    var c = document.getElementById("newPassword");
    var d = document.getElementById("newPassword").getElementsByTagName("p");
    var e = document.getElementById("passwordOK");
    e.checked=false;
    if (a.test(b.value)||b.value===""){
        if(d[0]){
            c.removeChild(d[0]);
        }
    }
    else if (a.test(b.value)===false&& d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
    }

}
function finalJudge(){
    var a =document.getElementById("InputNewPassword");
    var b =document.getElementById("InputCurrentPassword");
    var b1 =document.getElementById("oldpassword").getElementsByTagName("p");
    var c = document.getElementById("newPassword");
    var d = document.getElementById("newPassword").getElementsByTagName("p");
    var e = document.getElementById("passwordOK");
    var g=document.getElementById("InputNewPassword2");
    var h=document.getElementById("newPassword2");
    var h1=document.getElementById("newPassword2").getElementsByTagName("p");
    var i = document.getElementById("button");

    if(a.value!==b.value||b.value===""){
        if(d[0]){
            c.removeChild(d[0]);
        }
    }
    else if (a.value===b.value && d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
        " <small><i>The new password should be the different from the old!!!</i></small>\n" +
        " </p>"
        e.checked=false;
    }
    if (a.value===g.value || g.value===""){
        if(h1[0]){
            h.removeChild(h1[0]);
        }
    }
    else if (a.value!==g.value &&h1.length===0){
        h.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
        e.checked=false;
    }
    if(a.value!==""&&b.value!==""&&g.value!==""&&e.checked===true&&b1.length===0&&d.length===0&&h1.length===0){
        i.disabled=false;
    }
    else if(a.value===""||b.value===""||g.value===""||e.checked===false||b1.length!==0||d.length!==0||h1.length!==0){
        i.disabled=true;
    }

}
function modifyPassword() {
    var a = document.getElementById("rightSideWindow");
    a.innerHTML="<br>\n" +
        "            <div >\n" +
        "            <div class=\"form-group\" id='oldpassword'>\n" +
        "                <label for=\"InputCurrentPassword\" style=\"font-size: 30px\">Current Password</label>\n" +
        "                <input  style=\"background: ghostwhite\" onmouseout='passwordIsCorrect1();'type=\"password\" class=\"form-control\" id=\"InputCurrentPassword\" placeholder=\"Enter current password\" name=\"InputCurrentPassword\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\" id='newPassword'>\n" +
        "                <label for=\"InputNewPassword\" style=\"font-size: 30px\">New Password</label>\n" +
        "                <input style=\"background: ghostwhite\" onmouseout='passwordIsCorrect2();' type=\"password\" data-toggle=\"tooltip\" data-placement=\"left\" title=\"您的密码应由6到16位大小写字母、阿拉伯数字、下划线或其它常见特殊字符组成\" class=\"form-control\" id=\"InputNewPassword\" placeholder=\"Enter new password\" name=\"InputNewPassword\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\" id='newPassword2'>\n" +
        "                <label for=\"InputNewPassword2\" style=\"font-size: 30px\">Password Confirmation</label>\n" +
        "                <input style=\"background: ghostwhite\" onmouseout=\"confirmation()\" type=\"password\" class=\"form-control\" id=\"InputNewPassword2\" placeholder=\"Enter password again\">\n" +
        "            </div>\n" +
        `<div class="checkbox" >
                    <label>
                        <input id="passwordOK" type="checkbox" onclick="finalJudge()"><h4>I remember the new password</h4>
                    </label>
                </div>`+
        "                <button  id =\"button\"  onmouseover='finalJudge()' disabled='disabled' type=\"submit\" class=\"btn btn-success  btn-lg\"  onclick=\"setNewPassword()\">Save changes</button>\n" +
        "\n" +
        "        </div>"
}