function emailIsCorrect() {
    var a= document.getElementById("email");
    var b = document.getElementById("emails");
    var d =document.getElementById("emails").getElementsByTagName("p");
    var e =document.getElementById("restore");
    var c = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(c.test(a.value)===false && d.length===0) {
        e.disabled=true;
        b.innerHTML+="<p style='color: red'>\n" +
            "<small>Email's format is wrong!!!</small>\n" +
            "</p>"
    }
    else if (c.test(a.value)){
        e.disabled=false;
        b.removeChild(d[0]);

    }
}