function loginCheck(){
    var a = document.getElementById("email");
    var b = document.getElementById("password");
    var c = document.getElementById("login");
    var d = document.getElementById("rm");
    if(a.value!=="" && b.value!=="" && d.checked===true){
        c.disabled=false;
    }
    else if (d.checked===false){
        c.disabled=true;
    }
}