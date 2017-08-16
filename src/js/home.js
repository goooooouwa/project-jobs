let status=0;
function getLogOrNot(status) {
    if(status==0){
        $("#judgeWhetherLog").append(`<div>
            <span>
            <a href="login.html" class="login">登录</a>
            </span>
            <span style="color: #c4c3c3">|</span>
            <span>
            <a href="register.html" class="register">注册</a>
            </span>
            </div>`);
    }
    else {
        $("#judgeWhetherLog").append(`<div>
            <span>
            <a href="person.html" class="welcome">Hello~ 欢迎进入个人中心</a>
            </span> 
            </div>`);
    }
}

function render(data) {
    result='';
    data=data.data;

    for (var i in data) {
        //console.log('aaaaaaaaaaaaaaa')
        result += `
              <div class="row">
                <li class="jobborder col-lg-10 col-md-10 col-sm-10 changeColor" style="height: 200px;width: 100%;margin: 30px 30px 0 0" onclick="location.href='detail.html?jobid=${data[i].id}'">
                <div>
                    <div style="padding-top: 10px">
                        <span style="font-size: 28px;color: #209b60">${data[i].title}</span>
                        <span style="color: #999999">${data[i].sdate}</span>
                    </div>
                    <hr style="height:1px;border:none;border-top:1px solid #c0c0c0;" />
                    <div class="col-lg-9 col-md-9 col-sm-9">
                        <div style="font-size:18px; padding-bottom: 2px;color:orangered"><p>月薪：${data[i].salary}</p></div>
                      <div>
                        <span class="company_name " style="color: #999999;font-size: 18px"><p>${data[i].company}</p ></span>
                      </div>
                      <div style="font-size: 18px;color:#999999">
                        <p>
                            <span>${data[i].country}</span>
                            <span>${data[i].city}</span>
                        </p >
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-3 col-sm-3">
                       <span style="color: #209b60;font-size: 15px">${data[i].catagory}</span> 
                        <div class="bonus">
                                <span>节日礼物</span>
                                <span>带薪年假</span>
                                <span>绩效奖金</span>
                                <span>定期体检</span>
                        </div>
                    </div>
                   
                </div>
             </li>
           </div>`
        $("#list").empty();
        $("#list").append(result);
    }

}
function getList() {
    var result = '';
    $.ajax({
        url: "http://47.93.200.205:8080/post/list",
        type: "get",
        success: function (data) {
            render(data)
        }
    });
}
function searchPo() {
    var searchStr = $("#sea").val();
    $("#list").empty();
    $.ajax({
        url:`http://47.93.200.205:8080/post/list?keyword=${searchStr}`,
        type:'get',
        success: function (data) {
            render(data);
        }
    })
}
function  getTag() {
    var id = event.target.id;
    //var searchStr = $("#").val();
    //alert(id);
    $("#list").empty();
    $.ajax({
        url:`http://47.93.200.205:8080/post/list?jobtype=${id}`,
        type:'get',
        success: function (data) {
            render(data);
        }
    })
}
function getCatagory() {
    var id = event.target.id;
    $("#list").empty();
    $.ajax({
        url:`http://47.93.200.205:8080/post/list?catagory=${id}`,
        type:'get',
        success: function (data) {
            render(data);
        }
    })
}