function emailIsCorrect() {
    var a= document.getElementById("email");
    var b = document.getElementById("emails");
    var d =document.getElementById("emails").getElementsByTagName("p");
    var c = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
    if(c.test(a.value)===false && d.length===0) {
        b.innerHTML+="<p style='color: red'>\n" +
            "<small>Email's format is wrong!!!</small>\n" +
            "</p>"
    }
    else if (c.test(a.value)){
        b.removeChild(d[0]);
    }
}