function userIsCorrect() {
    var a =/^[a-zA-Z0-9_]{6,18}$/;
    var b =document.getElementById("userName");
    var c =document.getElementById("email");
    var d =document.getElementById("user");
    var e =document.getElementById("user").getElementsByTagName("p");
    if (a.test(b.value)){
        d.removeChild(e[0]);
    }
    else if (a.test(b.value)===false && e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small>User name's format is wrong!!!</small>\n" +
            " </p>"

    }

}
