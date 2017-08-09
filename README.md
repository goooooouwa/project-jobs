# 背景
- 开源项目：codingirlsclub
- 源码在develop分支下
- [开源代码](https://github.com/CodingGirlsClub/codingirlsclub/tree/develop)
> 开源代码关键位置：css在vendor/assets/stylesheets目录下，公用的文件直接在这个目录下，前端私有的文件在frontend目录下; js文件vendor/assets/javascripts目录下，公用的文件直接在这个目录下，前端私有的文件在frontend目录下； 字体文件在 app/assets/fonts目录下
# 技术栈
## 使用工具
### UI框架
bootstrap

#### 后台框架

#### express + body-parser + cookie-parser + express-session
[express文档](https://www.zybuluo.com/XiangZhou/note/208532#reqcookies)

[cookie-parser](https://segmentfault.com/a/1190000004139342?_ea=504710)

[express-session](http://www.xgllseo.com/?p=5162)

## 一.目录结构
- bin/www : 服务器启动文件
- db : 数据库文件
- src : 服务器静态文件
    - html:服务器模板文件
    - css : 样式表本件
        * static:公共css文件夹
    - js : 自定义js文件
        * static:公共js文件夹
        * main.js : 入口文件(主页面js)
        * app.js : 前端服务url管理模块
        * pageControl/ : 页面控制器
- routes : 路由文件
    - 对每个类建立独立的路由文件：user.js示例
    - URL前后端约定好后编写实现
- package.json : npm包管理文件
## 前端
1. 页面视图
	- html代码放于script标签=======>`<script type='text/html'>...</script>`
	- 模板代码尽量做到0重复
	- [模板字符串语法]()
	- 示例：
```
<script type='text/html'>
$("#warning").html(`
  <h1>小心！>/h1>
  <p>未经授权打冰球可能受罚
  将近${maxPenalty}分钟。</p>
`); 
</script>
```


2. 页面控制
	- 每个pageControl/*.js文件控制一个页面的渲染
	- 使用require.js模块化
## 后端
在server文件夹下
## 一开始步骤上:

1. **git checkout -b another** (创建本地another分支并进入another分支)

	*（git branch another 创建分支， git checkout another 进入分支 ）*

2. **git add filePath**(将修改内容添加到本地仓库another分支的缓存区上)

3. **git commit -m'text'**(将add的内容提交到本地仓库的another分支上)

4. **git checkout master**(从another分支退出进入本地master分支)

5. **git pull origin master**(将远程master分支内容拉到本地master分支)

6. **git checkout another**(从本地master分支进入本地another分支)

7. **git rebase master**(将第5步拉下来的代码和本地master分支以复位基底的方式融合)

8. **手动解决冲突**

9. **git push origin another**(将本地的another分支推到远程的another分支上)

	*（完整写法：git push origin another:another 不用担心你远程分支还没创建，github会自动帮你创建）*

10. **点击 pull request**(在远程仓库界面进入自己提交的分支，申请提交至远程master分支)

11. **审核代码，代码通过，融合至master分支**

**回到第一步**
* * *
#### 解释步骤
总代码在master分支上，每天早上pull更新master，再rebase master 。保证我们自己的分支每天代码总起点一致。
写完部分功能或下午离开，push自己分支到远程仓库，用pull request合并到总分支上。
每个人在自己分支的相应目录下建立自己的文件。
#### 每天早上
4. **git checkout master**(从another分支退出进入本地master分支)

5. **git pull origin master**(将远程master分支内容拉到本地master分支)

6. **git checkout another**(从本地master分支进入本地another分支)

7. **git rebase master**(将第5步拉下来的代码和本地master分支以复位基底的方式融合)

8. **手动解决冲突**
#### 每天下午
9. **git push origin another**(将本地的another分支推到远程的another分支上)

	*（完整写法：git push origin another:another 不用担心你远程分支还没创建，github会自动帮你创建）*

10. **点击 pull request**(在远程仓库界面进入自己提交的分支，申请提交至远程master分支)

11. **审核代码，代码通过，融合至master分支**
#### 冲突解决:

如果不同人在同一文件的同一行进行了修改，pull下来后就会出现冲突，此时git无法智能地帮你融合，必须你手动解决，git rebase解决冲突的过程是根据你git commit的次数分阶段让你解决冲突，也就是说你如果在rebase之前commit了三次，git 将会从你第一次提交的内容开始寻找冲突的部分，你可以使用git status查看你冲突的文件然后进行选择，解决冲突，其中你会看到形如:


*其中<<<<<<<HEAD到=======之间是你自己修改的内容，=====到>>>>>>>是别人修改的内容(可以用中国思维记忆：我和你，我一般在前面)*

当你解决好了第一次commit的冲突，之后执行git add -u（把解决好的内容加入缓存），再执行git rebase --continue，之后出现第二次commit的冲突，再执行git status.....后面做法相似，直到所有冲突解决
## 分工
- 9、10、11、12、13，注册页面，登陆页面，忘记密码，账户页面（用户中心）
- 7、8 post列表，post详情
- 5、工作详情页面
- 6、发布一个职位
- 首页相关
- 后台设计完成api（两位）


# 数据库

## mysql

[nodeJS操作mysql文档地址](http://www.runoob.com/nodejs/nodejs-mysql.html)

## 关于express-session和cookie

### 使用cookie与session技术使用户可以跨页面保持登录状态

```
let express = require('express');
let cookieParser = require('cookie-parser');
let session = require('express-session');
//首先引入相关组件
let app = express();
//使用session与cookie组件
/*
    express-session和cookie-parser这两个组件联合使用可以在用户第一次访问的时候在用户浏览器里面写入cookie
*/
app.use(cookieParser('twsjob'));
app.use(session({
  name:'twsjob',//设置写入用户浏览器cookie的key
  secret: 'twsjob',//签名，与cookie保持一致
  resave: true,
  maxAge: 90000,//设置失效时间单位为ms
  saveUninitialized: true
}));
//访问代码
app.get('/', function (res, req) {
  if (res.session.visit) {
    res.session.visit++;
    req.json(res.session);
  } else {
    res.session.visit = 1;
    req.send("第一次访问页面");
  }
});

app.get('/getsession',function(res,req){
  /*
    每次用户访问服务器就会自动在http请求头里面带上本地的cookie，但是获取用户本地的cookie的时候一定要使用res.session.你的cookie的key,在以上代码里，第一次访问localhost:3000的时候会输出第一次访问页面，以后每次访问res.session.visit都会加一
  */
  /*
  这是得到session，在服务器端保存着的是一个object对象

  {
    "cookie": {
        "originalMaxAge": null,
        "expires": null,
        "httpOnly": true,
        "path": "/"
    },
    "visit": 18
   }   

  */
  let mysession = res.session.twsjob;
  console.log(res.session.twsjob);
})

app.listen(3000);
/*
    当浏览器访问localhost:3000的时候,初始就会自动写入一个cookie而且key为twsjob,本地cookie储存的是session的key，通过res.session.你的cookie的key可以获取你设置session的值
*/

/*
    当我访问localhost:3000/getsession的时候就可以获取我写入的twsjob这个session，可以同时写入多个session，当页面关闭的时候不会消失，只有浏览器关闭的时候session与cookie都会自动消失，可以通过这个技术来使用户可以跨页面登录
*/
```

## 总结

>在用户通过url访问我们的网站的时候,我们就会在用户的cookie里面自动生成一个我们定义好的key的sessionID（value），在用户在通过url访问我们的网站的时候，就会在http请求里携带上cookie，我们可以通过用户发送过来的cookie来找到相应的session，从而来管理用户在我们网站的各种状态

## 后台API规范

### GET 为后台为前台发送数据（数据获取）

#### 代码示例

```
app.get('/somewhere',function(req,res)){
     //dosomething...
    res.send('Hello');
}
```

### POST 为后台接收前台发送数据并发送结果（数据添加）

#### 代码示例

```
app.post('/somewhere',function(req,res)){
     //dosomething...
    res.send('Hello');
}
```

### PUT 为前台给后台发送数据（数据修改）

#### 代码示例

```
app.put('/somewhere',function(req,res)){
     //dosomething...
    res.send('Hello');
}
```

### DELETE 为前台给后台发送数据（删除）

#### 代码示例

```
app.delete('/somewhere',function(req,res)){
    //dosomething...
    res.send('Hello');
}
```
# 数据库的设计

## 数据库的名称 twsjob

### 用户表 T_user
//后端两位参考修改后划掉这行

|ID|用户主键|
|---|---|
|email|用户邮箱|
|password|用户密码|
|company|用户所在公司|
|address|公司地址|
|trade|公司所属行业|

### 职位表 T_job

|ID|职位主键|
|---|---|
|userId|用户ID|
|title|用户密码|
|company|用户所在公司|
|description|公司地址|
|applyApproach|公司所属行业|
|expiryDate|职位申请的截止时间|
|category|工作职位的种类|
|jobType|工作性质|
|tags|职位标签|
|city|所在城市|
|country|所在国家|

### 工作性质 T_jobtype

|ID|工作性质ID主键|
|---|---|
|content|工作性质的内容|

### 职位种类 T_category

|ID|职位种类ID主键|
|---|---|
|content|职位种类的名称|


