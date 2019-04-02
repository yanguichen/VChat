# 网上交友平台

#### 前端基于 vue，后端基于 nodejs 的网上交友平台

## 一、功能

- 用户通过注册登陆之后跳转到网上交友平台主页，每个用户拥有自己的个人主页，右侧菜单默认显示用户的好友列表，支持聊天室，通过聊天室获取其他用户的用户 id 或用户名并选择性的添加好友，同时支持垃圾回收

## 二、模块：

### 注册登陆页：

- 注册登陆的表单验证

### 个人主页

#### （1）顶部：

- 平台 logo，社区按钮，登陆头像（点击出现下拉菜单 1.查看以及修改个人信息 2.退出登录）

#### （2）左侧菜单：

- 通过点击左侧菜单实现右侧菜单的切换

#### （3）右侧菜单：

1. 我的好友：显示用户的好友
2. 我的图片：显示用户的图片
3. 我的笔记：显示用户的笔记
4. 我的分享：显示用户的社区分享
5. 回收站：显示用户近一个星期删除的图片以及笔记，支持还原

#### （4）底部：为了好看哈哈哈

## 三、用法

> A Vue.js project

### Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

```

测试
