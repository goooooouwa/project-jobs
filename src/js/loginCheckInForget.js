function loginCheckInForget(){
    let a = document.getElementById("email");
    let b = document.getElementById("restore");
    if(a.value!==""){
        b.disabled=false;
    }
    else if(a.value===""){
        b.disabled=true;
    }


}