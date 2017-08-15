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
        "                <label for=\"InputcompanyName\" style=\"font-size: 30px\">Company Name</label>\n" +
        "                <input style=\"background: ghostwhite\" type=\"text\" class=\"form-control\" id=\"InputcompanyName\" placeholder=\"Enter company name\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyAddress\" style=\"font-size: 30px\">Company Address</label>\n" +
        "                <input style=\"background: ghostwhite\" type=\"text\" class=\"form-control\" id=\"InputcompanyAddress\" placeholder=\"Enter company address\">\n" +
        "            </div>\n" +"<br>"+
        "            <div class=\"form-group\">\n" +
        "                <label for=\"InputcompanyKind\" style=\"font-size: 30px\">Company Kind</label>\n" +
        "                <input style=\"background: ghostwhite\" type=\"text\" class=\"form-control\" id=\"InputcompanyKind\" placeholder=\"Enter company kind\">\n" +
        "            </div>\n" +
        "            <div class=\"checkbox\" id=\"personalInfoCheckBox\">\n" +
        "                <label>\n" +
        "                    <input type=\"checkbox\" onchange=\"WhetherBan()\"> <h4>OK</h4>\n" +
        "                </label>\n" +
        "            </div>\n" +
        "                <button  id =\"button\" type=\"submit\" class=\"btn btn-success  btn-lg\" disabled=\"disabled\">Save changes</button>\n" +
        "\n" +
        "        </form>"

}