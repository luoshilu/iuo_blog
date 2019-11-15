#!/bin/bash

# download nginx-certbot
echo "---------- download nginx-certbot -------"
git clone https://github.com/luoshilu/nginx-certbot.git ~/nginx-certbot

if [ x"$1" = x ]; then
  echo "========== no domain param! ==========="
  exit 1
fi

if [ -d "～/nginx-certbot" ];then
  echo "========== ~/nginx-certbot is not folder! ==========="
  exit 1
fi

echo "---------- 域名替换 -------"
sed 's/server_name_temp/'$1'/g' ~/nginx-certbot/data/nginx/app.conf.temp > ~/nginx-certbot/data/nginx/app.conf

echo "---------- init-letsencrypt -------"
cd ~/nginx-certbot
source ~/nginx-certbot/init-letsencrypt.sh $1

echo "---------- 启动博客！！ -------"
cd ~/iuo_blog
docker-compose up  -d
echo "---------- 完成启动！！ -------"