function allRestoreIsOk() {
    var a=document.getElementById("password1");
    var b=document.getElementById("password2");
    var c=document.getElementById("restore");
    var d =document.getElementById("ok");
    if (a.value!==""&&b.value!==""&& d.checked===true){
        c.disabled=false;
    }
    else {
        c.disabled=true;
    }
}