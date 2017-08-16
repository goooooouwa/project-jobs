let status=0;

const data={

    title:"电话销售",
    postData:'2017-07-01',
    catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
    jobtype:'全职',
    number:'2-3',
    company:"北京麦斯德投资基金管理有限公司",
    address:"北京市朝阳区建外SOHO7号楼20层2001",
    contact:"赵经理",
    apply:"18810484792",
    city: "北京",
    country:'中国',
    salary:"3000-5000",
    job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
};
const jobs=[
    {
        jobId:2,
        title:"电话销售X",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        jobId:3,
        title:"电话销售Y",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        jobId:4,
        title:"电话销售Z",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    },
    {
        jobId:5,
        title:"电话销售O",
        postData:'2017-07-01',
        catagory:'娱乐休闲/餐饮/服务+互联网/电子商务+咨询/顾问',
        jobtype:'全职',
        number:'2-3',
        company:"北京麦斯德投资基金管理有限公司",
        address:"北京市朝阳区建外SOHO7号楼20层2001",
        contact:"赵经理",
        apply:"18810484792",
        city: "北京",
        country:'中国',
        salary:"3000-5000",
        job_description:"<p>无责底薪4K+高提+转正五险+高福利，有意者电话联系！<br>岗位职责：<br>1、利用网络进行公司产品的销售及推广；<br>2、负责公司网上贸易平台的操作管理和产品信息的发布；<br>3、了解和搜集网络上各同行及竞争产品的动态信息；<br>4、通过网络进行渠道开发和业务拓展；<br>5、按时完成销售任务。<br>任职资格：<br>1、专科及以上学历，市场营销等相关专业；<br>2、2年以上网络销售工作经验，具有网络销售渠道者优先；<br>3、精通各种网络销售技巧，有网上开店等相关工作经验，熟悉各大门户网站及各网购网站；<br>4、熟悉互联网络，熟练使用网络交流工具和各种办公软件；<br>5、有较强的沟通能力。<br>工作时间：早上：9:00<br> 晚上：6:00 周末双休</p>"
    }

];

$(document).ready(loadInfo());

function loadInfo() {
    let jobId=getQueryVariable("jobid");
    if(jobId !=null && jobId.toString().length>1) {
        debugger;
        getJobDetailFromSQ(jobId);
        getRecommendJobsFromSQ(jobId);
    }

}

function getQueryVariable(variable)
{
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i=0;i<vars.length;i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){return pair[1];}
    }
    return(false);
}
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

function getJobDetailFromSQ(jobId) {
    debugger;
 $.get(
     `http://47.93.200.205:8080/post/detail?jobid=${jobId}`,
     function (jobInfo) {
         loadJobInfo(jobInfo);
     }
 )
}
function getRecommendJobsFromSQ(jobId) {
    $.ajax({
        type: 'GET',
        url:"47.93.200.205:8080/detail/"+jobId+'/similar',
        success: function(jobs) {
            loadRecommendJobs(jobId,jobs.slice(0,5));
        }
    })
}
function loadJobInfo(jobInfo) {
    debugger;
    $("#jobTitle").text(jobInfo.title);
    $("#postData").text('发布时间: '+jobInfo.sdate);
    $("#tags").text(jobInfo.tags);
    $("#catagory").text(jobInfo.catagory);
    $("#jobtype").text(jobInfo.jobtype);
    $("#salary").text(jobInfo.salary+'元');
    $("#address").text(jobInfo.address);
    $("#number").text(jobInfo.number+'人');

    $("#jobDescription").append(jobInfo.description);//引入富文本编辑

    $("#apply").text(jobInfo.apply);

    $("#company").text(jobInfo.company);
    $("#country").text(jobInfo.country);
    $("#city").text(jobInfo.city);

}

function loadRecommendJobs(jobId,jobs) {
    let count = 0;
    debugger;
    for (let job of jobs) {
        debugger;
        if (jobId != job.jobId) {
            debugger;
            $("#recommendJobs").append(`<li>
            <a class="link" href="47.93.200.205:8080/detail?jobId=${job.jobId}">${job.title}</a><br>
            <span>${job.postData}</span>
            </li>`);
            debugger;
            count++;
        }
        if (count == 4) break;
    }
}