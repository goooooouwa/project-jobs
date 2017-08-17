function allRegisterIsOk() {
    var a =document.getElementById("user").getElementsByTagName("p");
    var b =document.getElementById("emails").getElementsByTagName("p");
    var c = document.getElementById("PASSWORD").getElementsByTagName("p");
    var d = document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    var d1 = document.getElementById("PASSWORDAGA");
    var e=document.getElementById("signup");
    var f =document.getElementById("userName");
    var g =document.getElementById("email");
    var h = document.getElementById("password1");
    var i = document.getElementById("password2");
    var j =document.getElementById("checkInRes");
    if (h.value===i.value || i.value===""){
        if(d[0]){
            d1.removeChild(d[0]);
        }
    }
    else if (h.value!==i.value &&d.length===0){
        d1.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
        j.checked=false;
    }
    if (j.checked===true&&a.length===0&&b.length===0&&c.length===0&&d.length===0&&f.value!==""&&g.value!==""&&h.value!==""&&i.value!==""){
        e.disabled=false;
    }
    else {
        e.disabled=true;
    }

}