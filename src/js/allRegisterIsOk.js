function allRegisterIsOk() {
    var a1=document.getElementById("user");
    var a =document.getElementById("user").getElementsByTagName("p");
    var b =document.getElementById("emails").getElementsByTagName("p");
    var b1 =document.getElementById("emails");
    var c = document.getElementById("PASSWORD").getElementsByTagName("p");
    var c1 = document.getElementById("PASSWORD");
    var d = document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    var d1 = document.getElementById("PASSWORDAGA");
    var e=document.getElementById("signup");
    var f =document.getElementById("userName");
    var g =document.getElementById("email");
    var h = document.getElementById("password1");
    var i = document.getElementById("password2");
    var j =document.getElementById("checkInRes");
    var k=/^[a-zA-Z0-9_]{6,18}$/;
    var l=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    var m=/^[a-zA-Z0-9_!@#$%^&*]{6,16}$/;
    if (k.test(f.value)||f.value===""){
        if(a[0]){
            a1.removeChild(a[0]);
        }
    }
    else if (k.test(f.value)===false && a.length===0){
        a1.innerHTML+="<p style='color: red'>\n" +
            " <small><i>User name's format is wrong!!!</i></small>\n" +
            " </p>"
        j.checked=false;
    } else {

    }
    if (l.test(g.value)||g.value===""){
        if(b[0]){
            b1.removeChild(b[0]);
        }
    }
    else if (l.test(g.value)===false && b.length===0){
        b1.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Email's format is wrong!!!</i></small>\n" +
            " </p>"
        j.checked=false;
    } else {

    }

    if (m.test(h.value)||h.value===""){
        if(c[0]){
            c1.removeChild(c[0]);
        }
    }
    else if (m.test(h.value)===false && c.length===0){
        c1.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password's format is wrong!!!</i></small>\n" +
            " </p>"
        j.checked=false;
    } else {

    }

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
    } else {

    }

    if (j.checked===true&&a.length===0&&b.length===0&&c.length===0&&d.length===0&&f.value!==""&&g.value!==""&&h.value!==""&&i.value!==""){
        e.disabled=false;
    }
    else if(j.checked===false) {
        e.disabled=true;
    } else {

    }

}