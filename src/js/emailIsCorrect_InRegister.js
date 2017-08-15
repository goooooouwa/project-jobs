function emailIsCorrect() {
    var a= document.getElementById("email");
    var b = document.getElementById("emails");
    var d =document.getElementById("emails").getElementsByTagName("p");
    var c = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
     if (c.test(a.value)||a.value===""){
        b.removeChild(d[0]);
    }
    else if(c.test(a.value)===false && d.length===0) {
        b.innerHTML+="<p style='color: red'>\n" +
            "<small><i>Email's format is wrong!!!</i></small>\n" +
            "</p>"
    }

}