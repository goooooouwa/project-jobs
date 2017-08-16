function loginByUserName() {
    $('#emails').html('');
    $('#emails').append('<input onmouseout="userIsCorrect()" class="form-control" id="email" name="loginemailname" placeholder="Enter user name">');
    document.getElementById('label').innerHTML='Your username:'
}