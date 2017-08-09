function confirmation() {
    var a =document.getElementById("InputNewPassword");
    var b =document.getElementById("InputNewPassword2");
    var c =document.getElementById("button");
    if (a.value===b.value){
        c.disabled=false;
    }
    else if (a.value!==b.value){
        c.disabled=true;
    }
}
function modifyPassword() {
    var a = document.getElementById("rightSideWindow");
    a.innerHTML="<br>\n" +
        "            <form>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputCurrentPassword\">Current Password</label>\n" +
        "                <input type=\"password\" class=\"form-control\" id=\"InputCurrentPassword\" placeholder=\"Current Password\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputNewPassword\">New Password</label>\n" +
        "                <input type=\"password\" class=\"form-control\" id=\"InputNewPassword\" placeholder=\"New Password\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputNewPassword2\">Password Confirmation</label>\n" +
        "                <input onchange=\"confirmation()\" type=\"password\" class=\"form-control\" id=\"InputNewPassword2\" placeholder=\"Password Confirmation\">\n" +
        "            </div>\n" +
        "                <button  id =\"button\" type=\"submit\" class=\"btn btn-default  btn-lg\" disabled=\"disabled\" >Modify</button>\n" +
        "\n" +
        "        </form>"
}