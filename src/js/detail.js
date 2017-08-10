$(document).ready(getJobInfoFromSQ());

function getJobInfoFromSQ(jobId) {
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