let status=0;

$(document).ready(loadInfo());

function loadInfo() {
        getJobDetailFromSQ(123456);
}
function getLogOrNot(status) {
    if(status==0){
        debugger;
        $("#judgeWhetherLog").append(`<ul class="lg_tbar_r">
            <li>
            <a href="login.html" data-lg-tj-id="5f00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">登录</a>
            </li>
            <li>
            <a href="register.html" class="bl" data-lg-tj-id="5g00" data-lg-tj-no="idnull" data-lg-tj-cid="idnull" rel="nofollow">注册</a>
            </li>
            </ul>`);
        debugger;
    }
}

function getJobDetailFromSQ(jobId) {
 $.get(
     "localhost:9999/jobs/"+jobId,
     function (jobInfo) {
         loadJobInfo(jobInfo);
     }
 )
}

function loadJobInfo(jobInfo) {
    $("#jobTitle").html(jobInfo.title);
    $("#tags").html(jobInfo.tags);
    $("#catagory").html(jobInfo.catagory);
    $("#jobtype").html(jobInfo.jobtype);
    $("#salary").html(jobInfo.salary);
    $("#address").html(jobInfo.address);
    $("#number").html(jobInfo.number);

    $("#jobDescription").html(jobInfo.job_description);//引入富文本编辑

    $("#apply").html(jobInfo.apply);

    $("#company").html(jobInfo.company);
    $("#country").html(jobInfo.country);
    $("#city").html(jobInfo.city);


}