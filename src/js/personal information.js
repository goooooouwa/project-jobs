function WhetherBan() {
    var a = document.getElementById("personalInfoCheckBox").getElementsByTagName("input");
    var b = document.getElementById("button");
    if (a[0].checked === false) {
        b.disabled = true;
    }
    else if (a[0].checked === true) {
        b.disabled = false;
    }
    return;
}
function modifyPersonalInfo() {
    var c = document.getElementById("rightSideWindow");
    c.innerHTML="<br>\n" +
        "            <form>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputEmail1\">Email Address</label>\n" +
        "                <input type=\"email\" class=\"form-control\" id=\"InputEmail1\" placeholder=\"Email Address\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyName\">Company Name</label>\n" +
        "                <input type=\"text\" class=\"form-control\" id=\"InputcompanyName\" placeholder=\"Company Name\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyAddress\">Company Address</label>\n" +
        "                <input type=\"text\" class=\"form-control\" id=\"InputcompanyAddress\" placeholder=\"Company Address\">\n" +
        "            </div>\n" +
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyKind\">Company Kind</label>\n" +
        "                <input type=\"text\" class=\"form-control\" id=\"InputcompanyKind\" placeholder=\"Company Kind\">\n" +
        "            </div>\n" +
        "            <div class=\"checkbox\" id=\"personalInfoCheckBox\">\n" +
        "                <label>\n" +
        "                    <input type=\"checkbox\" onchange=\"WhetherBan()\"> Are you sure to change?\n" +
        "                </label>\n" +
        "            </div>\n" +
        "                <button  id =\"button\" type=\"submit\" class=\"btn btn-default  btn-lg\" disabled=\"disabled\">Modify</button>\n" +
        "\n" +
        "        </form>"

}