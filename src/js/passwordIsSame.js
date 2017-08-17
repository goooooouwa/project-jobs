function passwordIsSame() {
    var a = document.getElementById("password1");
    var b = document.getElementById("password2");
    var d = document.getElementById("PASSWORDAGA");
    var e = document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    if (a.value===b.value){
        d.removeChild(e[0]);
    }
    else if  (a.value !== b.value&&e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small>This password should be the same as last input!!!</small>\n" +
            " </p>"
    }
}