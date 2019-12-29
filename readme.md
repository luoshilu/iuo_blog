使用 iuo-blog, 快速构建你的博客。

# 准备工作
首先，你需要准备一台服务器和一个域名。

服务器要求：
- 内存：256M以上
- 磁盘：5G以上
- 推荐系统: Ubuntu 18.04 x86_64

注意：一定先要将你的域名解析到对应的服务器ip。

# 开始搭建
进入服务器，执行以下命令
> cd ~

> git clone https://github.com/luoshilu/iuo_blog.git

> cd iuo_blog

> bash init.sh 你的域名

等待 5 分钟左右，一个博客系统就生成啦～

# 一些操作
## 重启博客
进入 iuo_blog目录
> docker-compose down

> docker-compose up
若首次构建未成功，可尝试重启。

## 修改数据库密码
在 iuo_blog/blog.env下修改MYSQL_PASSWORD，重启博客即可。

## 修改后台管理员密码
暂时只能去数据里更改，blog/luo_user表，encrypt 设为空，password设为md5(密码)。


