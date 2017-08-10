function passwordIsCorrect() {
    var a =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var b = document.getElementById("password1");
    var c = document.getElementById("PASSWORD");
    var d = document.getElementById("PASSWORD").getElementsByTagName("p");
    var e = document.getElementById("password2");
    if (a.test(b.value)){
        c.removeChild(d[0]);
    }
    else if (a.test(b.value)===false&& d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
            " <small>Password's format is wrong!!!</small>\n" +
            " </p>"
    }
}