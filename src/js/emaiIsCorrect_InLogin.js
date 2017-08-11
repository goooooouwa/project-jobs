function emailIsCorrect() {
    var a= document.getElementById("email");
    var b = document.getElementById("emails");
    var d =document.getElementById("emails").getElementsByTagName("p");
    var e =document.getElementById("login");
    var c = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if(c.test(a.value)===false && d.length===0) {
        e.disabled=true;
        b.innerHTML+="<p style='color: red'>\n" +
            " <small>Email's format is wrong!!!</small>\n" +
            " </p>"
    }
    else if (c.test(a.value)===true){
        b.removeChild(d[0]);
        e.disabled=false;
    }
}