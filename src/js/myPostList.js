/*
点击MY POSTS，跳转到招聘者发布的招聘工作列表页面，每一个招聘项包含：
工作职位
招聘工作的状态，hidden（未发表）/public（成功发表）*/
`use strict`
let pageRow=0;
let cache=new Array();
const numberShow=6;
$(function () { $("[data-toggle='popover']").popover(); });

function showMyPostList() {
    creatSearchForm();
    creatTable();
    //cache=test;//测试假数据
    getMyPost();//未与api接通
    //creatPageControl();//测试假数据
    //addTrs(test);//测试假数据

}
function getSearch() {
    event.preventDefault();
    let keyWord=$("#searchIn").val();
    $.ajax({
        type: 'GET',
        url:`http://47.93.200.205:8080/post/list?keyword=${keyWord}`,
        success: function(resultSearch) {
            creatSearchForm();
            creatTable();
            pageRow=0;
            cache=resultSearch;
            addTrs(resultSearch);
            creatPageControl();
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest+"\n"+textStatus+"\n"+errorThrown);
        }
    })
}
function getMyPost() {
    $.ajax({
        type: 'GET',
        url:"http://47.93.200.205:8080/account/post",
        success: function(postList) {
            pageRow=0;
            cache=postList;
            addTrs(postList);
            creatPageControl();
        },
        error:function (XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest+"\n"+textStatus+"\n"+errorThrown);
        }
    })
}
function creatSearchForm(){
    $("#rightSideWindow").html(``);
    $("#rightSideWindow").append(`<form role="form col-md-12">
    <div class="col-md-6"></div>
    <div class="form-group col-md-4">
        <input type="text" id="searchIn" class="form-control col-md-4" id="name" placeholder="搜索" style="margin-top: 20px;">
    </div>
    <button type="submit" class="btn btn-default btn-lg" aria-label="Left Align" style="margin-top: 20px;" onclick="searchPost()">
        <span class="glyphicon glyphicon-search" aria-hidden="true"></span>
    </button>
</form>`);
}
function creatTable() {
    $("#rightSideWindow").append(`    <div id="myPostList">
         <div id="postTable">
             <table id="table" class="table table-bordered table-hover text-center">
                 <thead>
                     <tr class="body" id="menu">
                         <td >Post</td>
                         <td >Status</td>
                         <td >Detail</td>
                     </tr>
                 </thead>
                 <tbody id="tbody">
                 </tbody>
             </table>
         </div>
    </div>`);
    return true;
}
function creatPageControl() {

    let $divBox=$(`<div class="container-fluid"></div>`);
    let $divRow=$(`<div class="row">`);
    $divRow.append($(`<div class="col-xs-12 col-md-5">`));
    $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn  btn-lg btn-success newPost " data-toggle="modal" data-target="#myModal" onclick="cleanForm()">创建</button></div>`));
    $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn  btn-lg btn-default headPage" onclick="headPage()">首页</button></div>`));
    if(isLastPage()){
        $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn btn-lg btn-default lastPage " onclick="lastPage()" >&#60;&#60;</button></div>`));
    }else {
        $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn btn-lg btn-default lastPage  disabled " onclick="lastPage()" >&#60;&#60;</button></div>`));
    }
    $divRow.append($(`<div class="col-xs-3 col-md-1" ><div class="center-block"><p  class="center-block" id="pageNo" style="width:1%;margin-left:auto;margin-right: auto;height: 40%;margin-top: auto;margin-bottom: auto" >${pageRow+1}</p></div></div>`));
    if(isNextPage()){
        $divRow.append($(`<div class="col-xs-3 col-md-1"><button   class="btn btn-lg  btn-default nextPage " onclick="nextPage()">&#62;&#62;</button></div>`));
    }else{
        $divRow.append($(`<div class="col-xs-3 col-md-1"><button   class="btn btn-lg  btn-default nextPage disabled" onclick="nextPage()">&#62;&#62;</button></div>`));
    }
    $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn  btn-lg btn-default endPage" onclick="endPage()">尾页</button></div>`));
    $divBox.append($divRow)
    $("#rightSideWindow").append($divBox);
    return true;
}
function addTrs(postList) {

    for (let onePost=0;onePost<numberShow;onePost++){
        if(postList[onePost+pageRow*numberShow]){
            addTr(postList[onePost+pageRow*numberShow]);
        }
    }
}
function addTr(onePost) {
    let table = document.getElementById('tbody');
    let postTr = table.insertRow(table.rows.length);
    var reg = new RegExp( '\"' , "g" );
    let descriPtion=onePost.description.replace(reg,'\'').slice(0,500).concat('………………');
    let jobTitleTd = postTr.insertCell(postTr.cells.length);
    let jobStatusTd = postTr.insertCell(postTr.cells.length);
    jobTitleTd.innerText = onePost.title;
    jobStatusTd.innerText = onePost.status;
    let actionTd = postTr.insertCell(postTr.cells.length);
    let detailDiv=document.createElement("div");
    detailDiv.innerHTML=`
    <a tabindex="0" class="btn btn-lg btn-info" role="button" data-toggle="popover" data-placement="left"
       data-trigger="focus" title="Job detail"  data-html="true"
       data-content="
       <table  class='table table-bordered table-hover text-center' >
    <thead>
    <tr class='body' >
        <td >info</td>
        <td >detail</td>
    </tr>
    </thead>
    <tbody>
        <tr>
            <td >title</td>
            <td >${onePost.title}</td>
        </tr>
        <tr>
            <td >description</td>
            <td >${descriPtion}</td>
        </tr>
        <tr>
            <td >tags</td>
            <td >${onePost.tags}</td>
        </tr>
        <tr>
            <td >how to apply</td>
            <td >${onePost.apply}</td>
        </tr>
    </tbody>
    </table>
    <div style='width:40%;margin-left: 35%;
            margin-right: auto;>
           <div id='postDe' class='center-block'>
                <button   class='btn  btn-warning col-xs-12 col-md-3' data-toggle='modal' data-target='#myModal' onclick='setInfo(${onePost.id})' >edit</button>
                <div class='col-xs-12 col-md-1'></div>
                <button   class='btn  btn-danger col-xs-12 col-md-3'  onclick='deletePost(${onePost.id})' >delete</button>
                <div class='col-xs-12 col-md-1'></div>
                <button   class='btn  btn-success col-xs-12 col-md-3'  onclick='releasePost(${onePost.id})' >release</button>
           </div>
    </div>
    ">Detail</a>`;
    actionTd.appendChild(detailDiv);
    if(onePost.status=='0'){
        postTr.className ="success";
        jobStatusTd.innerText = "public";
    }
    else {
        postTr.className ="warning";
        jobStatusTd.innerText = "hidden";

    }
    $('[data-toggle="popover"]').popover({
        container: 'body'
    });
    return true;

}
function isNextPage() {
    if(cache.length>(pageRow+1)*numberShow){
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
    if($("button.nextPage").hasClass("disabled")){

    }else{
        pageRow++;
        $("#pageNo").text(`${pageRow+1}`);
        if($("button.lastPage").hasClass("disabled")){
            $("button.lastPage").removeClass("disabled");
        }
        if(isNextPage()){
        }else {
            $("button.nextPage").addClass("disabled");
        }
        $("#tbody").empty();
        addTrs(cache);
    }
    return true;
}
function lastPage() {
    if($("button.lastPage").hasClass("disabled")){

    }else {
        pageRow--;
        $("#pageNo").text(`${pageRow+1}`);
        if($('button.nextPage').hasClass('disabled')) {
            $("button.nextPage").removeClass("disabled");
        }
        if(isLastPage()){
        }else {
            $("button.lastPage").addClass("disabled");
        }
        $("#tbody").empty();
        addTrs(cache);
    }
    return true;
}
function headPage() {
    pageRow=0;
    $("#pageNo").text(`${pageRow+1}`);
    if($('button.nextPage').hasClass('disabled')) {
        $("button.nextPage").removeClass("disabled");
    }
    if(!$("button.lastPage").hasClass("disabled")){
        $("button.lastPage").addClass("disabled");
    }
    $("#tbody").empty();
    addTrs(cache);
    return true;
}
function endPage() {
    pageRow=Math.ceil(cache.length/numberShow)-1;
    $("#pageNo").text(`${pageRow+1}`);
    if($("button.lastPage").hasClass("disabled")){
        $("button.lastPage").removeClass("disabled");
    }
    if(!$('button.nextPage').hasClass('disabled')) {
        $("button.nextPage").addClass("disabled");
    }
    $("#tbody").empty();
    addTrs(cache);
    return true;
}
function setInfo(onePostId) {
    let onePost=new Object();
    for(let one of cache){
        if(parseInt(one.id)==parseInt(onePostId)){
            onePost=one;
            $('#id').text(onePost.id);
            document.getElementById('Title').value=onePost.title;
            document.getElementById('company').value=onePost.company;
            document.getElementById('apply').value=onePost.apply;
            document.getElementById('Tags').value=onePost.tags;
            document.getElementById('salary').value=onePost.salary;
            document.getElementById('category').value=onePost.catagory;
            document.getElementById('job-type').value=onePost.jobtype;
            document.getElementById('age').value=onePost.age;
            document.getElementById('city').value=onePost.city;
            document.getElementById('country').value=onePost.country;
            document.getElementById('number').value=onePost.number;
            document.getElementById('etime').value=onePost.duration;
            document.getElementById('Description').value=onePost.description;
            document.getElementsByClassName('ql-editor')[0].innerHTML=onePost.description;
            break;
        };
    };
    if(!$("#saveOnePost").hasClass("disabled")){
        $("#saveOnePost").addClass("disabled");
    }
    if(!$("#release").hasClass("disabled")){
        $("#release").addClass("disabled");
    }
    event.preventDefault();
}
function deletePost(onePostId) {
    let onePost=new Object();
    for(let one of cache) {
        if (parseInt(one.id) == parseInt(onePostId)) {
            onePost = one;
            let ask=`确定删除招聘：${onePost.title} ？`;
            let yes=`已删除招聘${onePost.title} ！`;
            let no=`未删除招聘${onePost.title} ！`;
            if (confirm(ask)) {
                deletePostJql(onePostId,yes);

            }
            else {
                alert(no);
            }
            break;
        }
    }
    event.preventDefault();
}
function cleanForm() {
    document.getElementById('Title').value='';
    document.getElementById('company').value='';
    document.getElementById('apply').value='';
    document.getElementById('Tags').value='';
    document.getElementById('salary').value='';
    document.getElementById('category').value='';
    document.getElementById('job-type').value='';
    document.getElementById('age').value='';
    document.getElementById('city').value='';
    document.getElementById('country').value='';
    document.getElementById('number').value='';
    document.getElementById('Description').value='';
    document.getElementById('etime').value='';
    document.getElementById('Description').value='';
    document.getElementsByClassName('ql-editor')[0].innerHTML='';
    if($("#saveOnePost").hasClass("disabled")){
        $("#saveOnePost").removeClass("disabled");
    }
    if($("#release").hasClass("disabled")){
        $("#release").removeClass("disabled");
    }
}
//前端搜索,不用？
function searchPost() {
    event.preventDefault();
    let keyWord=$("#searchIn").val();
    let keyArr=keyWord.split("");
    let result = [];
    for(let post of cache){
        for(let oneKey of keyArr){
            if(post.title.indexOf(oneKey)>=0){
                result.push(post);
                break;
            }
        }
    }
    creatSearchForm();
    creatTable();
    pageRow=0;
    cache=result;
    addTrs(result);
    creatPageControl();
    event.preventDefault();

}
function deletePostJql(onePostId,yes) {
    let request = new XMLHttpRequest();
    request.open('DELETE', 'http://47.93.200.205:8080/account/post/'+ onePostId);
    request.onreadystatechange = function () {
        if (request.readyState == 4) {
            if (request.status == 200) {
                alert(yes);
                showMyPostList();
            }
        }
    };
    request.setRequestHeader("Content-Type","application/json");
    request.send();
}
function releasePost(onePostId){
    "use strict";
    let onePost=new Object();
    for(let one of cache) {
        if (parseInt(one.id) == parseInt(onePostId)) {
            onePost = one;
            if(onePost.status==0){
                alert('该招聘项已发布！')
            }else{
                onePost.status=0;
                $.ajax({
                    type: 'PUT',
                    data: onePost,
                    url:  'http://47.93.200.205:8080/account/post',
                    crossDomain: true,
                    success: function (data) {
                        alert(data.msg);
                    }
                })
            }

        }
    }
    event.preventDefault();
}