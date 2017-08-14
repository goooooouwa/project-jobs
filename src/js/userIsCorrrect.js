function userIsCorrect() {
    var a =/^[a-zA-Z0-9_]{6,18}$/;
    var b =document.getElementById("userName");
    var d =document.getElementById("emails");
    var e =document.getElementById("emails").getElementsByTagName("p");
    if (a.test(b.value)===false && e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small>User name's format is wrong!!!</small>\n" +
            " </p>"

    }
    else if  (a.test(b.value)){
        if(e.length){
           d.removeChild(e[0]); 
        }
        
    }
}
