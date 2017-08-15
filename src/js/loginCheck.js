function loginCheck(){
    var a = document.getElementById("email");
    var b = document.getElementById("password");
    var c = document.getElementById("login");
    if(a.value==="" || b.value!==""){
        c.disabled=true;
    }
    else if(a.value!=="" && b.value!=="" ){
        c.disabled=false;
    }

}