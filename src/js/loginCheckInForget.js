function loginCheckInForget(){
    let a = document.getElementById("email");
    let a1=document.getElementById("emails");
    let a2=document.getElementById("emails").getElementsByTagName("p");
    let b = document.getElementById("restore");
    let c =/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
    if (c.test(a.value)===true || a.value===""){
        if(a2[0]){
            a1.removeChild(a2[0]);
        }
    }
    else if(c.test(a.value)===false && a2.length===0) {
        a1.innerHTML+="<p style='color: red;margin-top: -13px'>\n" +
            " <small><i>Email's format is wrong!!!</i></small>\n" +
            " </p>"
    }
    if(a.value==="") {
        b.disabled = true;
    }
    else if(a.value!=="" &&a2.length===0){
        b.disabled=false;
    }


}