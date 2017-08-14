function loginByUserName() {
    $('#emails').html('');
    $('#emails').append('<input onchange="userIsCorrect()" class="form-control" id="userName" name="loginemailname" placeholder="Enter user name">');
    document.getElementById('label').innerHTML='Your username:'
}