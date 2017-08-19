# MeiTuan-Learn
模仿美团应用,学习react-native

Imitate Meituan application, study the react - native

## 前期准备

### 一 新建项目

react-native init MeiTuan

### 二 版本控制管理

通过git进行版本控制  git init

配置.gitignore文件确定过滤文件

git status  查看文件状态

git add .  添加文件至暂存区

git commit -m"信息"  将文件提交至仓库

### 三 将项目提交到github上

在github新建相应的项目仓库

git remote add origin git@github.com:Mz-L/MeiTuan-Learn.git   关联github仓库

git remote rm origin   移除关联

git pull --rebase origin master   初始代码合并(readme.md头文件)

git push -u origin master   初次推送代码

git push origin master  推送代码

### 四 管理react-native版本

降低 react-native 的版本 (不用最新版开发)

react-native -version   查看当前 react-native 版本

npm install --save react-native@0.41.1   安装 0.41.1 版本的 react-native

npm install react@^15.4.0-rc.4 --save    根据提示安装依赖的 react

## 正式开发

### 一 首页底部 tabBar 的简单实现

### 二 首页TopBar组件的简单实现

### 三 其他顶栏的实现

### 四 我的界面的UI实现

### 五 我的界面 登录的实现













