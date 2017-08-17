function loginCheckInForget(){
    var a = document.getElementById("email");
    var b = document.getElementById("restore");
    var c = document.getElementById("emails").getElementsByTagName("p");
    if (a.value!=="" && c.length===0){
        b.disabled=false;
    }
    else b.disabled=true;
}