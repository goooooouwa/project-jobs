function canSaveChange() {
    var a=document.getElementById("InputCurrentPassword");
    var b =document.getElementById("InputNewPassword");
    var c =document.getElementById("InputNewPassword2");
    var d =document.getElementById("passwordOK");
    var e =document.getElementById("newPassword").getElementsByTagName("p");
    var f =document.getElementById("newPassword2").getElementsByTagName("p");
    var g =document.getElementById("button");
    if(a.value!=="" && b.value!=="" && c.value!==""&& d.checked===true && e.length===0&&f.length===0){
        g.disabled=false;
    }
    else{
        g.disabled=true;
        d.checked=false;
    }

}