function postInfo() { 
    let username = $("input[name='registerusername']").val();  //用户名
    let password = $("input[name='registerpassword']").val();  //密码
    let useremail = $("input[name='registeremail']").val();    //账号
    let url = 'http://localhost:3334/user/signup';
    $.ajax({
        url: `${url}`,
        type: "POST",
        data: {
            'username': `${username}`,
            'password': `${password}`,
            'useremail': `${useremail}`
        },
        success: function (data) {
            //跳转页面
            console.log('success')
        }
    }); 
}

function loginInfo(){
    let username = $("input[name='loginemailname']").val();
    let password = $("input[name='loginpassword']").val();
    let url = 'http://localhost:3334/user/login';
    $.ajax({
        url: `${url}`,
        type: "POST",
        data: {
            'username': `${username}`,
            'password': `${password}`
        },
        success: function (data) {
            $('#showinfo').html(data.msg);  //输出传输的数据
            //跳转到首页页面
            //intoIndex();
        }
    });
}
function intoIndex(){  //进入首页，调用该函数，判断是否已经登录
    let url = 'http://localhost:3334/index';
    $.ajax({
        url: `${url}`,
        type: 'GET',
        success: function(data){
            //do something

            $('#getuser').html(data);   //将数据发送到
        }
    })
}


//注销登录的函数---进行调用
function logout(){
    let url = 'http://localhost:3334/user/logout';
    $.ajax({
        url: `${url}`,
        type: 'GET',
        success: function(data){
            //应该提示您已经注销登录---并跳转到某个页面
            $('#getuser').html(data);   //将数据发送到
        }
    })
}