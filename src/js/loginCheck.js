function loginCheck(){
    let a = document.getElementById("email");
    let b = document.getElementById("password");
    let c = document.getElementById("login");
    if(a.value!=="" && b.value!=="" ){
        c.disabled=false;
    }
    else if(a.value==="" || b.value===""){
        c.disabled=true;
    }


}