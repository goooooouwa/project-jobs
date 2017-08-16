function allRestoreIsOk() {
    var a=document.getElementById("password1");
    var a1=document.getElementById("PASSWORD");
    var a2=document.getElementById("PASSWORD").getElementsByTagName("p");
    var b=document.getElementById("password2");
    var b1=document.getElementById("PASSWORDAGAIN");
    var b2=document.getElementById("PASSWORDAGAIN").getElementsByTagName("p");
    var c=document.getElementById("restore");
    var d =document.getElementById("ok");
    var e=document.getElementById("vcode");
    var f =/^[a-zA-Z0-9_]{6,18}$/;
    if (f.test(a.value)||a.value===""){
        if(a2[0]){
            a1.removeChild(a2[0]);
        }
    }
    else if (f.test(a.value)===false && a2.length===0){
        a1.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Email's format is wrong!!!</i></small>\n" +
            " </p>"
        d.checked=false;
    } else {

    }
    if (a.value===b.value || b.value===""){
        if(b2[0]){
            b1.removeChild(b2[0]);
        }
    }
    else if (a.value!==b.value &&b2.length===0){
        b1.innerHTML+="<p style='color: red'>\n" +
            " <small><i>This password should be the same as last input!!!</i></small>\n" +
            " </p>"
        d.checked=false;
    } else {

    }
    if (a.value!==""&&b.value!==""&& d.checked===true&& e.value!==""&&a2.length===0&&b2.length===0){
        c.disabled=false;
    }
    else if(d.checked===false){
        c.disabled=true;
    }
}