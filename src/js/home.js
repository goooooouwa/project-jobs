
function getLogOrNot(status, str) {
    if(status==0){
        $('#judgeWhetherLog').empty()
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
        $('#judgeWhetherLog').empty()
        $("#judgeWhetherLog").append(`<div>
            <span>
            <a href="person.html" class="welcome tishialert" id="usernamealert">${str}</a>
            </span> 
            </div>`);
            $('.welcome').mouseover(function(){
                console.log(111)
                $('.tishialert').text("个 人 中 心");
            })
            $('.welcome').mouseout(function(){
                console.log(222)
                $('.tishialert').text(`${str}`);
            })
    }
}

function render(data) {
    result='<br>';
    data=data.data;

    for (var i in data) {
        //console.log('aaaaaaaaaaaaaaa')
        result += `

        <a  href='detail.html?jobid=${data[i].id}'target="_blank">
              <div class="row opacishadows">
                <div class="jobborder col-lg-10 col-md-10 col-sm-10" style="height: 10%;width: 100%;padding:2% 0; margin: 0 0;cursor: pointer">
                <div>
                    <div>
                        <span style="font-size: 28px;color: #209b60;margin-left: 1%">${data[i].title}</span>
                        <span style="color: #999999">${data[i].sdate}</span>
                    </div>
                    <hr style="height:1px;border:none;border-top:1px solid #c0c0c0;" />
                    <div class="col-lg-10 col-md-10 col-sm-10">
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
                    <div class="col-lg-2 col-md-2 col-sm-2">
                       <span style="color: #209b60;font-size: 15px">${data[i].catagory}</span> 
                  
                    </div>
                   
                </div>
             </div>
           </div></a>
           <br>`
        $("#list").empty();
        $("#list").append(result);

        $('.opacishadows').mouseover(function(){
            //$(this).css('opacity',0.4)
            $(this).addClass("shadow")
        })
        $('.opacishadows').mouseout(function(){
            $(this).removeClass("shadow")
            
        })
    }

}
function getList() {
    var result = '';
    $.ajax({
        url: "http://47.93.200.205:8080/post/list",
        type: "get",
        success: function (data) {
            console.log(data)
            $.jqPaginator('#list1', {
                totalCounts: data.count-20,
                visiblePages: 5,
                currentPage:1,
                pageSize:20,
                onPageChange: function (num, type) {
                    //$('#p1').text(type + '：' + num);
                    $.ajax({ 
                        url:`http://47.93.200.205:8080/post/list`,
                        type:'GET',
                        success:function(data){
                            render(data)
                        }
                    })
                }
            });
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
            console.log(data)
            $.jqPaginator('#list1', {
                totalCounts: data.count,
                visiblePages: 5,
                currentPage:1,
                pageSize:20,
                onPageChange: function (num, type) {
                    //$('#p1').text(type + '：' + num);
                    $.ajax({ 
                        url:`http://47.93.200.205:8080/post/list?keyword=${searchStr}`,
                        type:'GET',
                        success:function(data){
                            render(data)
                        }
                    })
                }
            });
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
function loadHotJobs(data) {
    for(let job of data){

     let result=`
        <a href='detail.html?jobid=${job.id}' target="_blank">
        <div class=" jobborder col-md-2 hotjobshadow" style="height: 220px;width: 30%;margin: 30px 30px 0 0;cursor: pointer" >
            <div style="padding-top: 5%; height: 30%">
              <span style="font-size:1.4vw;color: #209b60;">${job.title}</span>
              </div>
              <div>
              <span style="color: #999999;float: right">${job.sdate}</span>
            </div>
            <hr style="height:1px;margin-top: 8%;margin-bottom:3%;border:none;border-top:1px solid #c0c0c0;" />
            <div style="font-size:18px; padding-bottom: 2px;color:orangered"><p>月薪: ${job.salary}</p ></div>
            <div style=" height: 10%;margin-bottom: 12%">
               <span class="company_name" style="color: #999999;font-size: 18px"><p>${job.company}</p ></span>
            </div>
            <div style="font-size: 18px;color:#999999">
            <p>
            <span>${job.country}</span>
            <span>${job.city}</span>
            </p >
            </div>
            </div></a>
            `;
     $('#hotJobs').append(result);
     $('.hotjobshadow').mouseover(function(){
        $(this).addClass("shadow")
    })
    $('.hotjobshadow').mouseout(function(){

        $(this).removeClass("shadow")
        
    })


    }
}
function getHotJobs() {
    $.ajax({
        url:`http://47.93.200.205:8080/post/hot`,
        type:'get',
        success: function (data) {
            loadHotJobs(data);
        }
    })
}

