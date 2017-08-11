let pageRow=0;//第几页
let cache=new Array();//cache 是缓存数据
const numberShow=8;//每页显示数量

function creatPageControl(id) {//参数是div的id,eg:#rightSideWindow

    let $divBox=$(`<div class="container-fluid"></div>`);
    let $divRow=$(`<div class="row">`);
    $divRow.append($(`<div class="col-xs-12 col-md-6">`));
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
    $(`${id}`).append($divBox);
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
    if(isNextPage()){
        pageRow++;
    }
    $("#tbody").empty();//根据id相应的内容清空
    showMyPostList();//自己的加载显示函数,函数内要调用creatPageControl(id)
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
function headPage() {
    pageRow=0;
    $("#tbody").empty();
    showMyPostList();
    return true;
}
function endPage() {
    pageRow=Math.ceil(cache.length/numberShow)-1;
    $("#tbody").empty();
    showMyPostList();
    return true;
}