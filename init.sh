#!/bin/bash

echo "---------- 新增swap -------"
mkdir swap
cd swap
dd if=/dev/zero of=swapfile bs=1M count=512
mkswap swapfile
swapon swapfile
free -m

echo "---------- 域名替换 -------"
sed 's/server_name_temp/'$1'/g' ~/iuo_blog/data/nginx/conf/nginx.conf.temp > ~/iuo_blog/data/nginx/conf/nginx.conf

echo "---------- 更新docker -------"
source ~/iuo_blog/shell/install-docker.sh

echo "---------- https设置(证书自动发放) -------"
source ~/iuo_blog/shell/https.sh $1
