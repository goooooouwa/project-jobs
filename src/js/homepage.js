function render(data) {
    result='';
    for (var i in data) {
        result += `<li class="con_list_item first_row default_list">
                        <div class="list_item_top">
                            <div class="position">
                                <div class="p_top">
                                    <a class="position_link" href="detail.html?jobid=${data[i].id}" target="_blank">
                                        <h3 >${data[i].title}</h3>
                                        <span class="add">[<em>${data[i].country} ${data[i].city}</em>]</span>
                                    </a>
                                    <span class="format-time">${data[i].sdate}发布</span>
                                </div>
                                <div class="p_bot">
                                    <div class="li_b_l">
                                        <span class="money">${data[i].salary}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="company">
                                <div class="company_name">
                                    <a href="">${data[i].company}</a>
                                </div>
                            </div>
                            <div class="com_logo">
                                <div class="company_name">
                                    <a href="">${data[i].catagory}</a>
                                </div>
                            </div>
                        </div>
                        <div class="list_item_bot">
                            <div class="li_b_l">
                                <span>节日礼物</span>
                                <span>带薪年假</span>
                                <span>绩效奖金</span>
                                <span>定期体检</span>
                            </div>
                            <div class="li_b_r">“带薪年假,五险一金,潮牌时尚,绩效奖金”</div>
                        </div>
                    </li>`
        $("#list").empty();
        $("#list").append(result);
    }
}
function getList() {
    debugger;
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