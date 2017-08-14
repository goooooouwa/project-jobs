function allRestoreIsOk() {
    var a=document.getElementById("password1");
    var b=document.getElementById("password2");
    var c=document.getElementById("restore");
    var d =document.getElementById("ok");
    var e=document.getElementById("vcode");
    if (a.value!==""&&b.value!==""&& d.checked===true&& e.value!==""){
        c.disabled=false;
    }
    else {
        c.disabled=true;
    }
}