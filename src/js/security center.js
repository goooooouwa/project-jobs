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
    var e =document.getElementById("InputCurrentPassword");
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
function newIsEqualOld(){
    var a =document.getElementById("InputNewPassword");
    var b =document.getElementById("InputCurrentPassword");
    var c = document.getElementById("newPassword");
    var d = document.getElementById("newPassword").getElementsByTagName("p");
    var e = document.getElementById("passwordOK");
    var f=/^[a-zA-Z0-9_]{6,18}$/;
    var g=document.getElementById("InputNewPassword2");
    var h=document.getElementById("newPassword2");
    var h1=document.getElementById("newPassword2").getElementsByTagName("p");
    var i = document.getElementById("button");
    if (f.test(a.value)||a.value===""){
        if(d[0]){
            c.removeChild(d[0]);
        }
    }
    else if (f.test(a.value)===false && d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
        e.checked=false;
    } else {

    }
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
    } else {

    }
    if(a.value!==""&&b.value!==""&&g.value!==""&&e.checked===true){
        i.disabled=false;
    }
    else if(e.checked===false){
        i.disabled=true;
    }

}
function modifyPassword() {
    var a = document.getElementById("rightSideWindow");
    a.innerHTML="<br>\n" +
        "            <div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputCurrentPassword\" style=\"font-size: 30px\">Current Password</label>\n" +
        "                <input  style=\"background: ghostwhite\" type=\"password\" class=\"form-control\" id=\"InputCurrentPassword\" placeholder=\"Enter current password\" name=\"InputCurrentPassword\">\n" +
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
                        <input id="passwordOK" type="checkbox" onclick="newIsEqualOld()"><h4>OK</h4>
                    </label>
                </div>`+
        "                <button  id =\"button\" disabled='disabled' type=\"submit\" class=\"btn btn-success  btn-lg\"  onclick=\"setNewPassword()\">Save changes</button>\n" +
        "\n" +
        "        </div>"
}