# 只要 5 分钟, 搭建一个网站！

## 介绍
该项目构建的是一个博客类型的网站，其中包含 3 个端：

- 普通用户端 (自适应PC，mobile端)
- 管理员端
- web端数据库管理端

体验地址点[ 这里 -> https://cpdd.lol](https://cpdd.lol)
## 准备工作
首先，你只需要准备一台服务器和一个域名。

服务器要求：
- 内存：256M以上
- 磁盘：2G以上
- 推荐最低版本系统: Ubuntu 16.04 x86_64

**注意：请先将你的域名解析到服务器ip。**

例如， 将 cpdd.lol解析到104.18.51.7：
域名DNS解析配置：
| 记录类型 | IP地址/目标主机 |
| - | - |
| A | 104.18.51.7 |
在CMD上验证：
```
PING http://cpdd.lol 
(104.18.51.7): 56 data bytes
64 bytes from 104.18.51.7: icmp_seq=1 ttl=54 time=312.858 ms
...
```

## 开始搭建
> cd ~ && apt-get install git
> git clone https://github.com/luoshilu/iuo_blog.git
> cd iuo_blog
> bash init.sh 你的网站域名（如:bash init.sh baidu.com）

等待 大概 3 分钟左右，在浏览器输入你的域名，新的网站诞生 ～～

## 可能会遇到的错误

1. ssl证书未能正确发放

请先保证你的域名能正确解析到你的服务器ip, 通常DNS配置会有延迟，需要等待一段时间，ping通域名后再重试, 执行下发证书脚本：

> bash ~/nginx-certbot/init-letsencrypt.sh 你的网站域名

成功下发证书后，重新启动博客:

> cd ~/iuo_blog && docker-compose up -d

# 常见操作
## 重启博客

> cd ~/iuo_blog && docker-compose restart

## 修改数据库密码
修改 iuo_blog/blog.env 的 MYSQL_PASSWORD，重启博客即可。

## 更快的网站性能
为了使你的网站性能更上一层楼，这里推荐大家使用 [cloudflare](https://dash.cloudflare.com/)。

