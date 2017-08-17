function allRestoreIsOk() {
    var a=document.getElementById("password1");
    var a2=document.getElementById("PASSWORD").getElementsByTagName("p");
    var b=document.getElementById("password2");
    var b1=document.getElementById("PASSWORDAGA");
    var b2=document.getElementById("PASSWORDAGA").getElementsByTagName("p");
    var c=document.getElementById("restore");
    var d =document.getElementById("ok");
    var e=document.getElementById("vcode");
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
    }
    if (a.value!==""&&b.value!==""&&e.value!=="" &&d.checked===true&&a2.length===0&&b2.length===0){
        c.disabled=false;
    }
    else {
        c.disabled=true;
    }
}