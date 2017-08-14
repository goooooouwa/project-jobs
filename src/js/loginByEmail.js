function loginByEmail() {
    $('#emails').html('');
    $('#emails').append('<input onblur="emailIsCorrect()" type="email" value="" class="form-control" id="email" name="loginemailname" placeholder="Enter email">');
    document.getElementById('label').innerHTML='Your email:'
}