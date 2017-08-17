function userIsCorrect() {
    document.getElementById('email').blur();
    var a =/^[a-zA-Z0-9_]{6,18}$/;
    var b =document.getElementById("email");
    var d =document.getElementById("emails");
    var e =document.getElementById("emails").getElementsByTagName("p");
     if  (a.test(b.value)||b.value===""){
         if(e[0]){
             d.removeChild(e[0]);
         }
    }
    else if (a.test(b.value)===false && e.length===0){
        d.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Username's format is wrong !!!</i></small>\n" +
            " </p>"
    }

}
