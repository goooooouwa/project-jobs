function loginCheck(){
    var a = document.getElementById("email");
    var b = document.getElementById("password");
    var c = document.getElementById("login");
    if (c.checked===true && a.value!=="" && b.value!==""){
       c.disabled=false;
    }
    else if (c.checked===false){
        c.disabled=true;
    }
}