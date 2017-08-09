/*
点击MY POSTS，跳转到招聘者发布的招聘工作列表页面，每一个招聘项包含：
工作职位
招聘工作的状态，hidden（未发表）/public（成功发表）*/
`use strict`
function showMyPostList(data) {
    creatTable();
    initTable();

}
function creatTable() {
    $("#rightSideWindow").innerHTML="<div id=\"myPostList\">\n" +
        "    <div id=\"postTable\">\n" +
        "        <table id=\"table\"></table>\n" +
        "    </div>\n" +
        "</div>";

}
function appendTable(onePost) {

}

function initTable() {

    //1.初始化Table
    var oTable = new TableInit();
    oTable.Init();

    //2.初始化Button的点击事件
    var oButtonInit = new ButtonInit();
    oButtonInit.Init();

};


var TableInit = function () {
    var oTableInit = new Object();
    //初始化Table
    oTableInit.Init = function () {
        $('#tb_departments').bootstrapTable({
            url: '/Home/GetDepartment',         //请求后台的URL（*）
            method: 'get',                      //请求方式（*）
            toolbar: '#toolbar',                //工具按钮用哪个容器
            striped: true,                      //是否显示行间隔色
            cache: false,                       //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
            pagination: true,                   //是否显示分页（*）
            sortable: false,                     //是否启用排序
            sortOrder: "asc",                   //排序方式
            queryParams: oTableInit.queryParams,//传递参数（*）
            sidePagination: "server",           //分页方式：client客户端分页，server服务端分页（*）
            pageNumber:1,                       //初始化加载第一页，默认第一页
            pageSize: 10,                       //每页的记录行数（*）
            pageList: [10, 25, 50, 100],        //可供选择的每页的行数（*）
            search: true,                       //是否显示表格搜索，此搜索是客户端搜索，不会进服务端，所以，个人感觉意义不大
            strictSearch: true,
            showColumns: true,                  //是否显示所有的列
            showRefresh: true,                  //是否显示刷新按钮
            minimumCountColumns: 2,             //最少允许的列数
            clickToSelect: true,                //是否启用点击选中行
            height: 500,                        //行高，如果没有设置height属性，表格自动根据记录条数觉得表格高度
            uniqueId: "ID",                     //每一行的唯一标识，一般为主键列
            showToggle:true,                    //是否显示详细视图和列表视图的切换按钮
            cardView: false,                    //是否显示详细视图
            detailView: false,                   //是否显示父子表
            columns: [{
                checkbox: true
            }, {
                field: 'id',
                title: '工作职位'
            }, {
                field: 'status',
                title: '状态'
            }, ]
        });
    };

    //得到查询的参数
    oTableInit.queryParams = function (params) {
        var temp = {   //这里的键的名字和控制器的变量名必须一直，这边改动，控制器也需要改成一样的
            limit: params.limit,   //页面大小
            offset: params.offset,  //页码
            departmentname: $("#txt_search_departmentname").val(),
            statu: $("#txt_search_statu").val()
        };
        return temp;
    };
    return oTableInit;
};


var ButtonInit = function () {
    var oInit = new Object();
    var postdata = {};

    oInit.Init = function () {
        //初始化页面上面的按钮事件
    };

    return oInit;
};

const test=[
    {
        "title":"高薪8K+高提销售人员",
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
