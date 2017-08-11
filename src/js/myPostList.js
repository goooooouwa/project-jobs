/*
点击MY POSTS，跳转到招聘者发布的招聘工作列表页面，每一个招聘项包含：
工作职位
招聘工作的状态，hidden（未发表）/public（成功发表）*/
`use strict`
const test=[
    {
        "title":"高薪8K+高提销售人员",
        "status":"hidden",
        "company_name":"北京麦斯德投资基金管理有限公司",
        "company_address":"通州区万达广场A座",
        "company_industry":"金融/银行",
        "contact":"钱经理",
        "phone":"13691398972",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"8000-12000",
        "job_description":"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        "title":"销售月入10000",
        "status":"public",
        "company_name":"万盛鼎世（北京）教育咨询有限公司",
        "company_address":"北京昌平回龙观珠江摩尔大厦三号楼",
        "company_industry":"教育/科研/培训",
        "contact":"李女士",
        "phone":"15300178136",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"12000-20000",
        "job_description":"<p>岗位职责：<br>1、负责搜集新客户的资料并进行沟通，开发新客户；<br>2、通过电话与客户进行有效沟通了解客户需求,寻找销售机会并完成销售业绩；<br>3、维护老客户的业务，挖掘客户的最大潜力；<br>4、定期与合作客户进行沟通，建立良好的长期合作关系。<br>任职资格：<br>1、年龄不限，口齿清晰，普通话流利；<br>2、对销售工作有较高的热情；<br>3、具备较强的学习能力和优秀的沟通能力；<br>4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；<br>5、有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先<br>工作时间：周一至周五（早8：30-18:00）双休，法定节假日带薪休假<br>欢迎来电咨询！<br>无责3200-5000+10%18%提成+全勤奖+绩效奖</p>"
    },
    {
        "title":"高薪8K+高提销售人员",
        "status":"hidden",
        "company_name":"北京麦斯德投资基金管理有限公司",
        "company_address":"通州区万达广场A座",
        "company_industry":"金融/银行",
        "contact":"钱经理",
        "phone":"13691398972",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"8000-12000",
        "job_description":"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        "title":"销售月入10000",
        "status":"public",
        "company_name":"万盛鼎世（北京）教育咨询有限公司",
        "company_address":"北京昌平回龙观珠江摩尔大厦三号楼",
        "company_industry":"教育/科研/培训",
        "contact":"李女士",
        "phone":"15300178136",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"12000-20000",
        "job_description":"<p>岗位职责：<br>1、负责搜集新客户的资料并进行沟通，开发新客户；<br>2、通过电话与客户进行有效沟通了解客户需求,寻找销售机会并完成销售业绩；<br>3、维护老客户的业务，挖掘客户的最大潜力；<br>4、定期与合作客户进行沟通，建立良好的长期合作关系。<br>任职资格：<br>1、年龄不限，口齿清晰，普通话流利；<br>2、对销售工作有较高的热情；<br>3、具备较强的学习能力和优秀的沟通能力；<br>4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；<br>5、有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先<br>工作时间：周一至周五（早8：30-18:00）双休，法定节假日带薪休假<br>欢迎来电咨询！<br>无责3200-5000+10%18%提成+全勤奖+绩效奖</p>"
    },
    {
        "title":"高薪8K+高提销售人员",
        "status":"hidden",
        "company_name":"北京麦斯德投资基金管理有限公司",
        "company_address":"通州区万达广场A座",
        "company_industry":"金融/银行",
        "contact":"钱经理",
        "phone":"13691398972",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"8000-12000",
        "job_description":"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        "title":"销售月入10000",
        "status":"public",
        "company_name":"万盛鼎世（北京）教育咨询有限公司",
        "company_address":"北京昌平回龙观珠江摩尔大厦三号楼",
        "company_industry":"教育/科研/培训",
        "contact":"李女士",
        "phone":"15300178136",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"12000-20000",
        "job_description":"<p>岗位职责：<br>1、负责搜集新客户的资料并进行沟通，开发新客户；<br>2、通过电话与客户进行有效沟通了解客户需求,寻找销售机会并完成销售业绩；<br>3、维护老客户的业务，挖掘客户的最大潜力；<br>4、定期与合作客户进行沟通，建立良好的长期合作关系。<br>任职资格：<br>1、年龄不限，口齿清晰，普通话流利；<br>2、对销售工作有较高的热情；<br>3、具备较强的学习能力和优秀的沟通能力；<br>4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；<br>5、有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先<br>工作时间：周一至周五（早8：30-18:00）双休，法定节假日带薪休假<br>欢迎来电咨询！<br>无责3200-5000+10%18%提成+全勤奖+绩效奖</p>"
    },
    {
        "title":"高薪8K+高提销售人员",
        "status":"hidden",
        "company_name":"北京麦斯德投资基金管理有限公司",
        "company_address":"通州区万达广场A座",
        "company_industry":"金融/银行",
        "contact":"钱经理",
        "phone":"13691398972",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"8000-12000",
        "job_description":"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        "title":"销售月入10000",
        "status":"public",
        "company_name":"万盛鼎世（北京）教育咨询有限公司",
        "company_address":"北京昌平回龙观珠江摩尔大厦三号楼",
        "company_industry":"教育/科研/培训",
        "contact":"李女士",
        "phone":"15300178136",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"12000-20000",
        "job_description":"<p>岗位职责：<br>1、负责搜集新客户的资料并进行沟通，开发新客户；<br>2、通过电话与客户进行有效沟通了解客户需求,寻找销售机会并完成销售业绩；<br>3、维护老客户的业务，挖掘客户的最大潜力；<br>4、定期与合作客户进行沟通，建立良好的长期合作关系。<br>任职资格：<br>1、年龄不限，口齿清晰，普通话流利；<br>2、对销售工作有较高的热情；<br>3、具备较强的学习能力和优秀的沟通能力；<br>4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；<br>5、有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先<br>工作时间：周一至周五（早8：30-18:00）双休，法定节假日带薪休假<br>欢迎来电咨询！<br>无责3200-5000+10%18%提成+全勤奖+绩效奖</p>"
    },
    {
        "title":"高薪8K+高提销售人员",
        "status":"hidden",
        "company_name":"北京麦斯德投资基金管理有限公司",
        "company_address":"通州区万达广场A座",
        "company_industry":"金融/银行",
        "contact":"钱经理",
        "phone":"13691398972",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"8000-12000",
        "job_description":"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        "title":"销售月入10000",
        "status":"public",
        "company_name":"万盛鼎世（北京）教育咨询有限公司",
        "company_address":"北京昌平回龙观珠江摩尔大厦三号楼",
        "company_industry":"教育/科研/培训",
        "contact":"李女士",
        "phone":"15300178136",
        "city": "北京",
        "job":"电话销售",
        "job_salary":"12000-20000",
        "job_description":"<p>岗位职责：<br>1、负责搜集新客户的资料并进行沟通，开发新客户；<br>2、通过电话与客户进行有效沟通了解客户需求,寻找销售机会并完成销售业绩；<br>3、维护老客户的业务，挖掘客户的最大潜力；<br>4、定期与合作客户进行沟通，建立良好的长期合作关系。<br>任职资格：<br>1、年龄不限，口齿清晰，普通话流利；<br>2、对销售工作有较高的热情；<br>3、具备较强的学习能力和优秀的沟通能力；<br>4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；<br>5、有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先<br>工作时间：周一至周五（早8：30-18:00）双休，法定节假日带薪休假<br>欢迎来电咨询！<br>无责3200-5000+10%18%提成+全勤奖+绩效奖</p>"
    }
];
let pageRow=0;
let cache=new Array();
function showMyPostList(id='') {
    cache=test;//测试
    //getMyPost(id);//未与api接通
    creatTable();
    creatPageControl();
    addTrs(test);//测试
    $(function() { $("[data-toggle='popover']").popover({ html : true }); });
}
function creatTable() {
    $("#rightSideWindow").html(``);
    $("#rightSideWindow").append(`    <div id="myPostList">
         <div id="postTable">
             <table id="table" class="table table-bordered table-hover text-center">
                 <thead>
                     <tr class="body" id="menu">
                         <td >Post</td>
                         <td >Status</td>
                         <td >Action</td>
                     </tr>
                 </thead>
                 <tbody id="tbody">
                 </tbody>
             </table>
         </div>
    </div>`);
}
function creatPageControl() {
    $("#rightSideWindow").append($(`<button   class="btn  btn-primary nextPage " data-toggle="modal" data-target="#myModal" style="position: relative; left:600px;margin-left: 30px" onclick="newPost()">创建</button>`));
    if(isLastPage()){
        $("#rightSideWindow").append($(`<button   style="position: relative; left:600px;margin-left: 20px " class="btn btn-success lastPage " onclick="lastPage()" >上一页</button>`));
    }else {
        $("#rightSideWindow").append($(`<button   style="position: relative; left:600px;margin-left: 20px " class="btn btn-success lastPage  disabled" onclick="lastPage()" >上一页</button>`));
    }
    if(isNextPage()){
        $("#rightSideWindow").append($(`<button   class="btn  btn-success nextPage" style="position: relative; left:600px;margin-left: 30px" onclick="nextPage()">下一页</button>`));
    }else{
        $("#rightSideWindow").append($(`<button   class="btn  btn-success nextPage disabled" style="position: relative; left:600px;margin-left: 30px" onclick="nextPage()">下一页</button>`));
    }

    return true;
}
function getMyPost(userId) {
    $.ajax({
        type: 'GET',
        url:"http://127.0.0.1:8888/"+userId+'/postlist',
        success: function(postList) {
            pageRow=0;
            cache=postList;
            addTrs(postList);
        }
    })
}
function addTrs(postList) {
    for (let onePost=0;onePost<6;onePost++){
        if(postList[onePost+pageRow*6]){
            addTr(postList[onePost+pageRow*6]);
        }
    }
}
function addTr(onePost) {
    let table = document.getElementById('tbody');
    let postTr = table.insertRow(table.rows.length);

    let jobTitleTd = postTr.insertCell(postTr.cells.length);
    let jobStatusTd = postTr.insertCell(postTr.cells.length);
    jobTitleTd.innerText = onePost.title;
    jobStatusTd.innerText = onePost.status;
    let actionTd = postTr.insertCell(postTr.cells.length);
    let detailDiv=document.createElement("div");
    detailDiv.innerHTML=`
    <a tabindex="0" class="btn btn-lg btn-info" role="button" data-toggle="popover" data-placement="left"
       data-trigger="focus" title="Job detail" 
       data-content="
       <table  class='table table-bordered table-hover text-center' >
    <thead>
    <tr class='body' >
        <td >属性</td>
        <td >内容</td>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td >title</td>
            <td >${onePost.title}</td>
        </tr>
        <tr>
            <td >description</td>
            <td >${onePost.job_description}</td>
        </tr>
        <tr>
            <td >tags</td>
            <td >${onePost.company_industry}</td>
        </tr>
        <tr>
            <td >how to apply</td>
            <td >${onePost.phone}</td>
        </tr>
    </tbody>
    </table>
    <div style='width:60px;margin-left: auto;
            margin-right: auto;'>
           <button  class='btn btn-danger' data-toggle='modal' data-target='#myModal'  onclick=‘alterOne(${onePost.id})’>编辑</button>
    </div>
    ">Detail</a>`;
    actionTd.appendChild(detailDiv);
    if(onePost.status=='public'){
        postTr.className ="success";
    }
    else {
        postTr.className ="warning";

    }
    return true;
}
function isNextPage() {
    if(cache.length>(pageRow+1)*6){
        return true;
    }
    else {
        return false;
    }
}
function isLastPage() {
    if(pageRow>0){
        return true;
    }else{
        return false;
    }

}

function nextPage() {
    if(isNextPage()){
        pageRow++;
    }
    $("#tbody").empty();
    showMyPostList();
    return true;
}
function lastPage() {
    if(isLastPage()){
        pageRow--;
    }
    $("#tbody").empty();
    showMyPostList();
    return true;
}