/*
点击MY POSTS，跳转到招聘者发布的招聘工作列表页面，每一个招聘项包含：
工作职位
招聘工作的状态，hidden（未发表）/public（成功发表）*/
`use strict`
const test=[
    {
        "id":"1",
        "title": "t",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"2",
        "title": "ta",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"hidden"
    },
    {
        "id":"3",
        "title": "ttt",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"4",
        "title": "t",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"5",
        "title": "ta",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"hidden"
    },
    {
        "id":"6",
        "title": "ttt",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"7",
        "title": "t",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"8",
        "title": "ta",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"hidden"
    },
    {
        "id":"9",
        "title": "ttt",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"10",
        "title": "t",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
    {
        "id":"11",
        "title": "ta",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"hidden"
    },
    {
        "id":"12",
        "title": "ttt",
        "company": "company",
        "stime": "stime",
        "apply": "apply",
        "tags": "tags",
        "salary": "salary",
        "category": "category",
        "jobtype": "jobtype",
        "age": "age",
        "city": "city",
        "country": "country",
        "number": "number",
        "etime": "etime",
        "description": "description",
        "status":"public"
    },
];
let pageRow=0;
let cache=new Array();
const numberShow=8;
$(function () { $("[data-toggle='popover']").popover(); });

function showMyPostList(id='') {
    //getMyPost(id);//未与api接通
    cache=test;//测试假数据
    creatTable();
    creatPageControl();//测试假数据
    addTrs(test);//测试假数据
}
function getMyPost(userId) {
    $.ajax({
        type: 'GET',
        url:"http://127.0.0.1:8888/"+userId+'/postlist',
        success: function(postList) {
            pageRow=0;
            cache=postList;
            addTrs(postList);
            creatPageControl();
        }
    })
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

    let $divBox=$(`<div class="container-fluid"></div>`);
    let $divRow=$(`<div class="row">`);
    $divRow.append($(`<div class="col-xs-12 col-md-6">`));
    $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn  btn-lg btn-success newPost " data-toggle="modal" data-target="#myModal" onclick="cleanForm()">创建</button></div>`));
    $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn  btn-lg btn-default headPage" onclick="headPage()">首页</button></div>`));
    if(isLastPage()){
        $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn btn-lg btn-default lastPage " onclick="lastPage()" >&#60;&#60;</button></div>`));
    }else {
        $divRow.append($(`<div class="col-xs-3 col-md-1"><button class="btn btn-lg btn-default lastPage  disabled " onclick="lastPage()" >&#60;&#60;</button></div>`));
    }
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
            <td >${onePost.description.slice(0,500).concat('………………')}</td>
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
    <div style='width:60px;margin-left: auto;
            margin-right: auto;'>
           <button   class='btn btn-lg btn-warning' data-toggle='modal' data-target='#myModal' onclick='setInfo(${onePost.id})' >编辑</button>
    </div>
    ">Detail</a>`;
    actionTd.appendChild(detailDiv);
    if(onePost.status=='public'){
        postTr.className ="success";
    }
    else {
        postTr.className ="warning";

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
    $("#tbody").empty();
    addTrs(cache);
    return true;
}
function endPage() {
    pageRow=Math.ceil(cache.length/numberShow)-1;
    $("#tbody").empty();
    addTrs(cache);
    return true;
}
function setInfo(onePostId) {
    let onePost=new Object();
    for(let one of cache){
        if(parseInt(one.id)==parseInt(onePostId)){
            onePost=one;
            document.getElementById('Title').value=onePost.title;
            document.getElementById('company').value=onePost.company;
            document.getElementById('stime').value=onePost.stime;
            document.getElementById('apply').value=onePost.apply;
            document.getElementById('Tags').value=onePost.tags;
            document.getElementById('salary').value=onePost.salary;
            document.getElementById('category').value=onePost.category;
            document.getElementById('job-type').value=onePost.jobtype;
            document.getElementById('age').value=onePost.age;
            document.getElementById('city').value=onePost.city;
            document.getElementById('country').value=onePost.country;
            document.getElementById('number').value=onePost.number;
            document.getElementById('etime').value=onePost.etime;
            document.getElementsByClassName('ql-editor')[0].innerHTML=onePost.description;
            break;
        };
    }
}
function cleanForm() {
    document.getElementById('Title').value='';
    document.getElementById('company').value='';
    document.getElementById('stime').value='';
    document.getElementById('apply').value='';
    document.getElementById('Tags').value='';
    document.getElementById('salary').value='';
    document.getElementById('category').value='';
    document.getElementById('job-type').value='';
    document.getElementById('age').value='';
    document.getElementById('city').value='';
    document.getElementById('country').value='';
    document.getElementById('number').value='';
    document.getElementsByClassName('ql-editor')[0].innerHTML='';
}

