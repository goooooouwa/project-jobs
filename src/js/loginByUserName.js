function loginByUserName() {
    var a =document.getElementById("loginWindow");
    a.innerHTML="<div class=\"form-group\">\n" +
        "                            <label class=\"col-sm-4 control-label\">Your user name:</label>\n" +
        "                            <div class=\"col-sm-8\" id=\"user\">\n" +
        "                                <input onchange=\"userIsCorrect()\"  value=\"\" class=\"form-control\" id=\"userName\" name=\"login\" placeholder=\"Enter user name\">\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"form-group\">\n" +
        "                            <label class=\"col-sm-4 control-label\">Your password:</label>\n" +
        "                            <div class=\"col-sm-8\">\n" +
        "                                <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" placeholder=\"Enter password\">\n" +
        "                                <p>\n" +
        "                                    <small><a href=\"forget.html\">Forgot password?</a></small>\n" +
        "                                </p>\n" +
        "\n" +
        "                                <div class=\"login-options\">\n" +
        "                                    <div class=\"checkbox hidden\">\n" +
        "                                        <label for=\"sc\">\n" +
        "                                            <input type=\"checkbox\" name=\"sc\" id=\"sc\" checked=\"checked\"> Secure connection                                </label>\n" +
        "                                    </div>\n" +
        "                                    <div class=\"checkbox\">\n" +
        "                                        <label class=\"small\" for=\"rm\">\n" +
        "                                            <input type=\"checkbox\" name=\"rm\" id=\"rm\" checked=\"checked\">  Remember me on this computer                                </label>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "                            </div>\n" +
        "                        </div>\n" +
        "                </div>\n"+
        "                <div class=\"modal-footer\" style='margin-left: -40px;margin-right: -40px;margin-bottom: -25px'>\n" +
        "                    <p class=\"pull-left padding-top-5\">\n" +
        "                        <em class=\"small light-grey\">\n" +
        "                            Don't have an account? <a class=\"bold\" href=\"./register.html\">Register</a>\n" +
        "                        </em>\n" +
        "                    </p>\n" +
        "                    <input onclick=\"\" id= \"login\" type=\"submit\" name=\"submit\" class=\"btn btn-green\" value=\"Login\">\n" +
        "                </div>"

}