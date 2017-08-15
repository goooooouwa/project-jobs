function passwordIsEmpty() {
    var a =document.getElementById("password");
    var b =document.getElementById("inputPassword");
    var c =document.getElementById("inputPassword").getElementsByTagName("p");
    if(a.value!==""){
        b.removeChild(c[0]);
    }
    else if (a.value==="" &&c.length===0){
        b.innerHTML+="<p style='color: red'>\n" +
            " <small><i>Password should be entered!!!</i></small>\n" +
            " </p>"
    }

}