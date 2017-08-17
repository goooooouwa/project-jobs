function passwordIsSame() {
    document.getElementById("password2").blur();
    var a = document.getElementById("password1");
    var b = document.getElementById("password2");
    var d = document.getElementById("PASSWORDAGA");
    var e = document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    document.getElementById("checkInRes").checked=false;
    if (a.value===b.value||b.value===""){
        if(e[0]){
            d.removeChild(e[0]);
        }
    }
    else if  (a.value !== b.value&&e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
    }
}