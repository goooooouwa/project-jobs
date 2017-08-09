# 背景
- 开源项目：codingirlsclub
- 源码在develop分支下
- [开源代码](https://github.com/CodingGirlsClub/codingirlsclub/tree/develop)
> 开源代码关键位置：css在vendor/assets/stylesheets目录下，公用的文件直接在这个目录下，前端私有的文件在frontend目录下; js文件vendor/assets/javascripts目录下，公用的文件直接在这个目录下，前端私有的文件在frontend目录下； 字体文件在 app/assets/fonts目录下
<<<<<<< HEAD
=======
# 技术栈
## 使用工具
### UI框架
bootstrap

#### 后台框架

#### express + body-parser + cookie-parser + express-session
[express文档](https://www.zybuluo.com/XiangZhou/note/208532#reqcookies)

[cookie-parser](https://segmentfault.com/a/1190000004139342?_ea=504710)

[express-session](http://www.xgllseo.com/?p=5162)

## 目录结构
- bin/www : 服务器启动文件
- db : 数据库文件
- src : 服务器静态文件
    - html:服务器模板文件
    - css : 样式表本件
    - js : 自定义js文件
        * main.js : 入口文件(主页面js)
        * app.js : 前端服务url管理模块
        * pageControl/ : 页面控制器
    - public:公共库
- routes : 路由文件
    - 对每个类建立独立的路由文件：user.js示例
    - URL前后端约定好后编写实现
- package.json : npm包管理文件
## 前端
 页面控制
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
>>>>>>> caf96dd2d96fd1a1e34e12ea314000781e1bff19

# 技术栈
[技术栈](./read/技术栈.md)
## 目录结构
[目录结构](./read/目录结构.md)
## git流程
[git流程](./read/git流程.md)

## 数据库及api
[数据库及api](./read/数据库.md)
## 分工
- 9、10、11、12、13，注册页面，登陆页面，忘记密码，账户页面（用户中心）
- 7、8 post列表，post详情
- 5、工作详情页面
- 6、发布一个职位
- 首页相关
- 后台设计完成api（两位）

## 进度
doing



