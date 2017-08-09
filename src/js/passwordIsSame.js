function passwordIsSame() {
    var a = document.getElementById("password1");
    var b = document.getElementById("password2");
    var c = document.getElementById("signup");
    if (a.value===b.value){
        c.disabled=false;
    }
    else if  (a.value !== b.value){
        c.disabled = true;
    }
}