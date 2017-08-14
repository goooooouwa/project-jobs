## 1、根据职位title、公司名字、职位描述、工作性质、工作职位搜索职位以及显示所有职位（1、2、3、4）  
url:47.93.200.205:8080/post/list?keyword+jobtype+catagory
method:get  
示例
47.93.200.205:8080/post/list?jobtype=全职&catagory=算法工程师
返回：  
\[  
    {  
        "id": 2,  
        "title": "搜索引擎工程师",  
        "company": "多米音乐",  
        "salary": "8k-9k",  
        "sdate": "08-14",  
        "country": "中国",  
        "city": "北京",  
        "jobtype": "全职"  
    }  
]  
## 2、根据jobid获取详情（5）
url:47.93.200.205:8080/post/detail?jobid=2  
method:get  
返回：  
\[  
    {  
        "id": 2,  
        "title": "搜索引擎工程师",  
        "company": "多米音乐",  
        "salary": "8k-9k",  
        "sdate": "2017-08-12",  
        "country": "中国",  
        "city": "北京",  
        "description": "岗位职责：1、负责搜索引擎核技术研发，核心算法开发，并持续改进相关算法，提高搜索的速度、精度；2、分析搜索相关的业务需求，协调并完成相应功能、特性的开发；3、利用数据挖掘和数理统计的理论方法解决搜索实际问题；4、不断改进搜索引擎算法及策略，通过多样算法实现各个推荐产品的相关性和转化率，提高用户体验"  
    }  
\]  
## 3、用户添加职位（6）
url:47.93.200.205:8080/account/post  
method:post  
示例  
{  
        "title": "WEB前端开发工程师",  
        "company": "百度",  
        "salary": "10k-15k",  
        "catagory":"Web前端开发",  
        "duration":30,  
        "jobtype":"全职",  
        "howtoapply":"发送简历至邮箱：111@qq.com",  
        "country": "中国",  
        "city": "北京",  
        "tags":"前端",  
        "description":"熟悉html,css,js",  
        "age":"18-25岁",  
        "number":3  
}  
返回  
{  
    "code": 0,  
    "msg": "添加成功"  
}  
## 4、用户查看自己创建的职位Post列表（7）
url:47.93.200.205:8080/account/post  
method:get  
返回：  
\[  
    {  
        "id": 1,  
        "title": "WEB前端开发工程师",  
        "company": "多米音乐",  
        "salary": "10k-15k",  
        "sdate": "08-14",  
        "country": "中国",  
        "city": "北京",  
        "jobtype": "全职"  
    },  
    {  
        "id": 2,  
        "title": "搜索引擎工程师",  
        "company": "多米音乐",  
        "salary": "8k-9k",  
        "sdate": "08-14",  
        "country": "中国",  
        "city": "北京",  
        "jobtype": "全职"  
    }  
]  
## 5、用户查看自己创建的职位Post详情(8)
url:47.93.200.205:8080/account/post/detail+jobid  
method:get  
示例:  
url:47.93.200.205:8080/account/post/detail?jobid=1
返回:  
\[  
    {  
        "id": 1,  
        "title": "WEB前端开发工程师",  
        "company": "多米音乐",  
        "salary": "10k-15k",  
        "sdate": "2017-08-14",  
        "country": "中国",  
        "city": "北京",  
        "description": "岗位职责：\n1、负责web及wap前端页面和功能的开发、调试和维护；?2、?负责与设计人员和程序人员的沟通；?3、?前端技术框架和js等互动效果开发。\n?\n职位需求：\n1、具有1年以上的前端开发经验\n2、精通 Html、css，js等前端技术，熟悉各个浏览器的兼容问题\n3、能熟练使用jquery",
        "age": "18-28岁",  
        "number": 5,  
        "tags": "前端,jquery",  
        "howtoapply": "简历发送邮箱至111@qq.com"  
    }  
]  
## 6、用户修改自己创建的职位Post
url:47.93.200.205:8080/account/post  
method:put  
示例：  
 {  
        "id": 1,  
        "title": "WEB前端开发工程师",  
        "company": "360",  
        "jobtype":"实习",  
        "catagory":"前端工程师",  
        "salary": "10k-15k",  
        "sdate": "2017-08-14",  
        "country": "中国",  
        "city": "武汉",  
        "description": "岗位职责：\n1、负责web及wap前端页面和功能的开发、调试和维护；?2、?负责与设计人员和程序人员的沟通；?3、?前端技术框架和js等互动效果开发。\n?\n职位需求：\n1、具有1年以上的前端开发经验\n2、精通 Html、css，js等前端技术，熟悉各个浏览器的兼容问题\n3、能熟练使用jquery",  
        "age": "18-28岁",  
        "number": 5,  
        "duration":20,  
        "tags": "前端,jquery",  
        "howtoapply": "简历发送邮箱至111@qq.com"  
}  
返回  
{  
    "code": 0,  
    "msg": "更新成功"  
}  
## 7、用户删除自己创建的职位Post
url:47.93.200.205:8080/account/post/jobid  
method:delete  
示例：  
47.93.200.205:8080/account/post/4  
返回：  
{  
    "code": 0,  
    "msg": "删除成功"  
}  
