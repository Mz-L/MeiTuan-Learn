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

### 六 逛一逛界面的实现

### 七 首页界面的简单实现

### 八 附近界面的简单实现

### 九 订单界面的简单实现

### 十 封装轮播图组件备用

### 十一 打包程序真机测试(中间解决了一些问题)

## 总结

打包好的文件是: app-release.apk

从搭建环境到结束,前后花了一个星期多点,虽然是依一份教程前进,但中间大坑小坑不断,好在最终能实现目标(多少有点满足感)

虽然做出来了,但是心里明白,没有需求驱动,结果还差很远(真渴望可以在未来实现更好的真正的产品)

渴望可以找个平台历练自己,对编程多少有些兴趣(没有技术偏好,感觉大多技术都值的学习研究,但有个平台有方向才更好)

也还年轻,没什么分心事,可以扎进代码的世界里好好折腾



## Hello World