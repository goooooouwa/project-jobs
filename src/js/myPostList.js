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
        "title":"我爱我家成就您的梦想",
        "status":"hidden",
        "company_name":"北京我爱我家房地产经纪有限公司",
        "company_address":"北京朝阳垡头朝阳区垡头格林莱雅底商我爱我家",
        "company_industry":"中介服务",
        "contact":"贾经理",
        "phone":"",
        "job":"电话销售",
        "job_salary":"8000-12000元",
        "job_description":"岗位职责：<br> 1、高中以上学历；<br> 2、工作经验不限，户籍、专业、性别不限；<br> 3、沟通能力强，普通话标准；有亲和力，工作积极主动，乐观开朗；<br> 4、敏锐的洞察力，较强的抗压能力和抗挫能力；勇于接受房产行业的压力和挑战；<br> 5、做事认真踏实，为人正直诚恳，高度的工作意识，具有良好的团队精神。<br> 职位描述：<br> 1、负责房源和客户的开发和维护,接待与咨询,提供全方位,专业的房地产置业服务；<br> 2、详细了解客户的需求，做信息的合理匹配；<br> 3、陪同客户实地看房，进行商务谈判，签订三方合同，促成房产买卖和租赁业务；<br> 4、负责业务进展及房屋缴税过户手续办理等服务工作；<br> 5、客户开发与积累，经营与维护。<br> 员工福利：<br> 选择我爱我家，你将获得：<br> 高底薪：2000-4000；+工龄工资；<br> 高提成：30% -85% ；个人基本薪资（按职级）＋个人奖金＋团体奖金<br> 业务奖励：新人奖、精鹰俱乐部等等；<br> 高保险福利：五项社会险+住房公积金+补充性商业保险；<br> 员工健康体检：入职每满一年享受免费健康检查。<br> 强培训：公司有完备的培训体系，所有中、高层管理人员均由基层培养；"
    },
    {
        "title":"高薪急聘电话销售+早九晚六+双休",
        "status":"public",
        "company_name":"北京惠和天博文化发展有限公司",
        "company_address":"北京大兴亦庄荣京东街地铁下车即到",
        "company_industry":"礼品/玩具/工艺美术/收藏品",
        "contact":"吴经理",
        "phone":"",
        "job":"电话销售",
        "job_salary":"12000-20000元",
        "job_description":"公司团队俊男靓女众多，大多数为8090后青年，公司团队氛围融洽，小伙伴们性格也都特别活跃，boss更是一言不合就红包，假日动不动就福利旅游的走起，公司办公环境也特别温馨，更提供精美工作手机，<br> <br> <br> 销售岗位职责：<br> 1、负责藏品的介绍及销售 ；<br> 2、根据市场态势，可以为客户分析行情走势 帮客户理性投资；<br> 3、开拓新市场,发展新客户,增加藏品的认知范围 ；<br> 4、维护老客户，做其忠实的藏品顾问，投资理财 。<br> <br> 任职要求：<br> 1.全日制初中以上学历，在校期间有突出表现者优先，<br> （条件优秀者可放宽学历要求）。<br> 2.个人形象气质佳，懂礼貌，会较好的谈吐。<br> 3.诚实可信，有责任心，懂得脚踏实地的靠谱青年。<br> 4.抗压能力强，虑事周全，应急应变能力较好。<br> 5.有工作经验较好，但我们也欢迎小白，只要你勤奋好学就行。<br> 薪资待遇：（综合月薪：税后：8千元—3万元）。<br> 1.底薪制度：无责底薪4000+工龄工资加+绩效+分红+社保补贴+父母补贴<br> 2.提成规则：浮动式提成规则，客单价从几万到上百万不等，小单不断，大单不停，签一单月月有续费，老员工每月续费提成拿到手软。<br> 3.奖励政策：当月销冠奖，单量排名奖，业绩进步奖，业绩达标奖，业绩冲刺奖各类奖金不断，拿到手软。<br> 4.福利补贴：转正之后上五险，全勤，老板一言不合就红包，旅游聚餐活动不断。<br> 5.坐席时间：每周六日单双休：早上9点上班，中午12.00-13.30就餐时间，下午18点下班，。<br> <br> 培训制度：公司入职员工均带薪培训三天，然后分配组别有专门的老人带。<br> <br> 只要您普通话流利，善于沟通，且希望在收藏品领域有所收获，就可以来一试身手。<br> <br> <br> 另：本司有带薪培训，可以帮助您轻松融入北京万博藏品团队！<br> 融洽的环境，舒适的工作，这么好的福利待遇，还等什么？"
    },
    {
        "title":"新媒体运营/双休/重点培养",
        "status":"hidden",
        "company_name":"广州海度网络科技有限公司",
        "company_address":"北京海淀五道口北京市海淀区五道口成府路35号新东源股份社院内西楼408室",
        "company_industry":"计算机/网络/通信",
        "contact":"人事部",
        "phone":"",
        "job":"电话销售",
        "job_salary":"5000-8000元",
        "job_description":"“岗位职责：<br> 1、负责公司自媒体平台的文章搜集，整理，撰写，编辑以及发布。<br> 2、根据平台的媒体属性发布各种符合要求优质的、有传播性的内容。<br> 3、挖掘和分析用户行为及需求，收集用户反馈，即时掌握当下热门话题。<br> <br> 具备基础：<br> 1、爱玩微信、新媒体交流工具、爱看新闻。<br> 2、重点：具备基础内容编辑工作经验，包括文字，页面及图片美化者优先。有较强的数据分析能力，有优秀的文案写作能力，图片编辑能力，信息采编整合能力，能发掘移动互联网新渠道者优先。学历不限，有经验者优先，无经验者可由项目经理带领学习。<br> <br> 福利待遇：<br> 1、一经录用待遇从优，公司提供全程细心培训。<br> 2、五天工作制，周末双休，上班时间9点-18点，。<br> 3、公司初创氛围融洽，有朝气充满活力，期待有和公司一起奋斗成长的伙伴。<br> 薪资结构: 底薪+高提成+补贴+各种福利+晋升空间大，综合月薪在5000以上，男女不限，上不封顶。“"
    },
    {
        "title":"月薪8千起诚招电话销售精英",
        "status":"public",
        "company_name":"国联企培（北京）企业管理中心",
        "company_address":"北京丰台玉泉营南三环西路91号",
        "company_industry":"教育/培训",
        "contact":"齐老师",
        "phone":"",
        "job":"电话销售",
        "job_salary":"8000-12000元",
        "job_description":"国联企培（北京）企业管理中心<br> 诚聘电话销售精英 项目稳定 出单率高 <br> 岗位要求：<br> 1、本单位长期组织召开各类职业资格的培训与认证工作、独立运营培训项目，项目易做，稳定，出单快。市场前景广阔。员工月平均工资8000元以上,优秀员工每月达万元以上。<br> 2、单位直招，不收取任何费用。男女不限，有无经验均可，公司可带薪培训。<br> 3、主要通过电话、传真、电子邮件等方式向目标客户传达会议、培训信息，维护老客户的业务，挖掘客户的“”潜力<br> 4、定期与合作客户进行沟通，建立良好的长期合作关系。<br> 任职资格：<br> 一样的工作时间，不一样的薪资待遇！<br> 一样的工作环境，不一样的工作氛围！<br> 一样的辛勤耕耘，不一样的人生境遇！<br> 我们拥有庞大的资源可以共享，方便您开展工作！<br> 我们拥有专业的培训团队，帮您提高自己！<br> 我们拥有快速、公平的晋升模式，助您实现质的飞越！<br> 1、普通话标准，20-40岁，口齿清晰，普通话流利，语音富有感染力；<br> 2、懂得基本电脑操作，对销售工作有较高的热情；<br> 3、具备较强的学习能力和“”的沟通能力；<br> 4、性格坚韧，思维敏捷，具备良好的应变能力和承压能力；<br> 5、有敏锐的市场洞察力，有强烈的事业心、责任心和积极的工作态度，有相关电话销售工作经验者优先。<br> <br> 提成方案：<br> 1、薪资待遇:无责底薪3200-5000元+项目提成+周奖+月奖+季度奖+年终奖+双休+季度旅游+各种福利制度>10000元。工作压力小，易上单。月薪过万不再只针对高管、白领，销售人员也将挤身其中！！！！！<br> 2、能力突出者薪金面议，也可独立带领团队。经培养后，骨干员工有机会安排出差，有出差补助。<br> <br> 欢迎有理想,抱负的年轻人加入我们的团队!<br> <br> 只要你够努力 只要你有能力 我们都会唯才是用。<br> <br> 混日子、挣保底者、请勿打扰！！！！！！<br> <br> <br> 工作时间： 上午 8：30-12：00 下午13：30-17：30双休、法定假日休息。<br> 上班地点：丰台区南三环西路91号<br> <br> 乘车路线：49路 300快内 300快外 300内 300外 351路 483路 631快 631路 678路 692路 820路 839路 968路 973路 998路 特8内 特8外 通勤快车 夜30内 夜30外 运通103线玉泉营桥西下车向西200米即到 附近有地铁10号线纪家庙站下车，交通非常便利"
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

    let $divBox=$(`<div class="container-fluid"></div>`);
    let $divRow=$(`<div class="row">`);
    $divRow.append($(`<div class="col-md-6">`));
    $divRow.append($(`<div class="col-md-2"><button class="btn  btn-lg btn-primary nextPage " data-toggle="modal" data-target="#myModal">创建</button></div>`));
    if(isLastPage()){
        $divRow.append($(`<div class="col-md-2"><button class="btn btn-lg btn-success lastPage " onclick="lastPage()" >上一页</button></div>`));
    }else {
        $divRow.append($(`<div class="col-md-2"><button class="btn btn-lg btn-success lastPage  disabled" onclick="lastPage()" >上一页</button></div>`));
    }
    if(isNextPage()){
        $divRow.append($(`<div class="col-md-2"><button   class="btn btn-lg  btn-success nextPage"  onclick="nextPage()">下一页</button></div>`));
    }else{
        $divRow.append($(`<div class="col-md-2"><button   class="btn btn-lg  btn-success nextPage disabled" onclick="nextPage()">下一页</button></div>`));
    }
    $divBox.append($divRow)
    $("#rightSideWindow").append($divBox);
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