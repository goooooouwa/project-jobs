# 背景
- 开源项目：codingirlsclub
- 源码在develop分支下
- [开源代码](https://github.com/CodingGirlsClub/codingirlsclub/tree/develop)
> 开源代码关键位置：css在vendor/assets/stylesheets目录下，公用的文件直接在这个目录下，前端私有的文件在frontend目录下; js文件vendor/assets/javascripts目录下，公用的文件直接在这个目录下，前端私有的文件在frontend目录下； 字体文件在 app/assets/fonts目录下
## 前端
在src文件夹下有：html、css、js文件夹
公用的css代码如bootstrap.css,放在相应类型文件夹之下:src/css/static，
公用的js代码如bootstrap.js,放在相应类型文件夹之下：src/js/static
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
## 数据库表格的设计
后端来写



