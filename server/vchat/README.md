# vchat

## 安装依赖

`yarn`

## 数据库篇

本项目使用 sequelize 这个广泛使用的 ORM 框架，数据源使用 MySQL

### 安装 MySQL

> 参考：[MySQL 8 在 Windows 下安装及使用](https://waylau.com/installing-mysql-8-on-windows/)

下载地址：[https://dev.mysql.com/downloads/mysql/8.0.html](https://dev.mysql.com/downloads/mysql/8.0.html)

本例为：MySQL Community Server8.0.15，下载下来应该是一个 zip 包

我们首先将这个 zip 包解压到某个目录下，例如：`D:\`

在根目录下创建一个 `my.ini` 文件作为 MySQL 安装的配置文件

内容为——

`
[mysqld]

# 安装目录

basedir=D:\\mysql-8.0.15-winx64

# 数据存放目录

datadir=D:\\mysqlData\\data
`

记得在初始化安装前要先创建 `mysqlData` 文件夹，`data` 会自动生成

设置环境变量:
将 `D:\mysql-8.0.15-winx64\bin` 添加到环境变量中

初始化安装：
`mysqld --defaults-file=D:\mysql-8.0.15-winx64\my.init --initialize --console`

在终端中会输出一个初始密码，记得复制下来

启动、关闭 MySQL server

启动：`mysqld --console`；
关闭：`mysqladmin -u root shutdown`

使用 MySQL 客户端

`mysql -u root -p`
输入初始密码后即可登录

在 MySQL 客户端中运行 `alter user 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';` 即可修改密码为 `password`

然后运行 `flush privileges;` 刷新权限

MySQL 的安装就告一段落

接着在命令行运行——
`yarn db:init`

这个脚本会在 MySQL（记得启动 MySQL 服务） 中创建数据库和数据表

接着是运行——
`yarn dev`

玩得开心~
