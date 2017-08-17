function passwordIsCorrect() {
    document.getElementById('password').blur();
    var a =document.getElementById("password");
    var b =document.getElementById("passwordLogin");
    var c =document.getElementById("passwordLogin").getElementsByTagName("p");
    var d=/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    if (d.test(a.value) || a.value===""){
        if(c[0]){
            b.removeChild(c[0]);
        }
    }
    else if(d.test(a.value)===false && c.length===0) {
        b.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong !!!</i></small>\n" +
            " </p>"
    }

}