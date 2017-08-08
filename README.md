# 背景
- 开源项目：codingirlsclub
- 源码在develop分支下
## 前端
在src文件夹下有：html、css、js文件夹
## 后端
在server文件夹下
## 步骤上:

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
总代码在master分支上，每天早上pull更新master，再rebase master 。保证我们的每天代码总起点一致。
写完部分功能或下午离开，push自己分支到远程仓库，用pull request合并到总分支上。

## 分工
- 9、10、11、12、13，注册页面，登陆页面，忘记密码，账户页面（用户中心）
- 7、8 post列表，post详情
- 5工作详情页面

## 数据库表格的设计


