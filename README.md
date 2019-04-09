# 网上交友平台

#### 前端基于 vue，后端基于 nodejs 的网上交友平台

## 一、功能

- 用户通过注册登陆之后跳转到网上交友平台主页，每个用户拥有自己的个人主页，右侧组件默认显示平台已存在聊天室，支持创建聊天室、搜索聊天室、加入聊天室，通过聊天室获取其他用户的用户 id 或用户名并选择性的添加常聊好友。

## 二、模块：

### 注册登陆页：

- 注册登陆的表单验证

### 个人主页

#### （1）顶部：

- 平台 logo，登陆头像（点击出现下拉菜单 1.查看以及修改个人信息 2.退出登录）

#### （2）左侧组件：

- 通过点击左侧菜单实现右侧菜单的切换

#### （3）中间组件：

1. 常聊好友：显示用户常聊的好友列表
2. 常用聊天室：显示常用聊天室列表

#### （4）右侧组件：

1. 聊天室列表：显示聊天室搜索功能、聊天室列表、创建聊天室按钮（点击弹出创建聊天室表单）
2. 聊天室：通过点击加入聊天室或者创建聊天室跳转到相应聊天室、显示聊天室名称、聊天室描述、聊天室人数、加入聊天室的用户

#### （5）底部：为了好看哈哈哈

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
