function passwordIsCorrect() {
    document.getElementById("password1").blur();
    var a =/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    var b = document.getElementById("password1");
    var c = document.getElementById("PASSWORD");
    var d = document.getElementById("PASSWORD").getElementsByTagName("p");
    document.getElementById("checkInRes").checked=false;
    if (a.test(b.value)||b.value===""){
        if(d[0]){
            c.removeChild(d[0]);
        }
    }
    else if (a.test(b.value)===false&& d.length===0){
        c.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
    }
}