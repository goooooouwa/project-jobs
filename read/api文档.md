## 1、根据职位title、公司名字、职位描述、工作性质、工作职位搜索职位以及显示所有职位（1、2、3、4）  
url:47.93.200.205:8080/post/list?keyword+jobtype+catagory
method:get  
示例
47.93.200.205:8080/post/list?jobtype=全职&catagory=算法工程师
返回：  
\{data:\[  
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
],  
count:1
}
## 2、根据jobid获取详情（5）
url:47.93.200.205:8080/post/detail?jobid=1  
method:get  
返回：  
\[  
    {  
        "id": 1,  
        "title": "WEB前端开发工程师",  
        "company": "多米音乐",  
        "catagory": "Web前端开发",  
        "salary": "10k-15k",  
        "sdate": "2017-08-14",  
        "country": "中国",  
        "count”: 2,  
        "city": "北京",  
        "description": "岗位职责：\n1、负责web及wap前端页面和功能的开发、调试和维护；?2、?负责与设计人员和程序人员的沟通；?3、?前端技术框架和js等互动效果开发。\n?\n职位需求：\n1、具有1年以上的前端开发经验\n2、精通 Html、css，js等前端技术，熟悉各个浏览器的兼容问题\n3、能熟练使用jquery",  
        "status": 1,  
        "age": "18-28岁",  
        "number": 5,  
        "tags": "前端,jquery",  
        "apply": "简历发送邮箱至111@qq.com",  
        "duration": 30  
    }  
]  
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
        "apply":"发送简历至邮箱：111@qq.com",  
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
        "catagory": "Web前端开发",  
        "salary": "10k-15k",  
        "sdate": "2017-08-14",  
        "country": "中国",  
        "city": "北京",  
        "description": "岗位职责：\n1、负责web及wap前端页面和功能的开发、调试和维护；?2、?负责与设计人员和程序人员的沟通；?3、?前端技术框架和js等互动效果开发。\n?\n职位需求：\n1、具有1年以上的前端开发经验\n2、精通 Html、css，js等前端技术，熟悉各个浏览器的兼容问题\n3、能熟练使用jquery",  
        "status": 1,  
        "age": "18-28岁",  
        "number": 5,  
        "tags": "前端,jquery",  
        "apply": "简历发送邮箱至111@qq.com",  
        "duration": 30  
    }  
]  
## 5、用户修改自己创建的职位Post
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
        "apply": "简历发送邮箱至111@qq.com"  
}  
返回  
{  
    "code": 0,  
    "msg": "更新成功"  
}  
## 6、用户删除自己创建的职位Post
url:47.93.200.205:8080/account/post/jobid  
method:delete  
示例：  
47.93.200.205:8080/account/post/1  
返回：  
{  
    "code": 0,  
    "msg": "删除成功"  
}  
## 7、查看热门职位
url:47.93.200.205:8080/post/hot  
method:get  
## 8、相似职位推荐
url:47.93.200.205:8080/post/similar+jobid  
method:get
示例：  
47.93.200.205:8080/post/similar?jobid=89  
返回：  
\[  
    {  
        "id": 1,  
        "count": 0,  
        "title": "WEB前端开发工程师",  
        "company": "多米音乐",  
        "catagory": "WEB前端开发",  
        "jobtype": "全职",  
        "salary": "3000-4000",  
        "sdate": "2017-08-15",  
        "country": "中国",  
        "city": "北京",  
        "description": "岗位职责：\n1、负责web及wap前端页面和功能的开发、调试和维护；?2、?负责与设计人员和程序人员的沟通；?3、?前端技术框架和js等互动效果开发。\n?\n职位需求：\n1、具有1年以上的前端开发经验\n2、精通 Html、css，js等前端技术，熟悉各个浏览器的兼容问题\n3、能熟练使用jquery进行",  
        "age": "18-28岁",  
        "number": 1,  
        "tags": "互联网，软件",  
        "apply": "发送简历至邮箱"  
    }  
]  
