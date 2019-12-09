#!/bin/bash

echo "---------- 安装docker -------"
sudo apt-get remove docker docker-engine docker-ce docker.io
sudo apt-get update
sudo apt-get install -y apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt-get update
sudo apt-get install -y docker-ce

echo "---------- 启动 docker -------"
docker_status = `netstat -ln|grep docker|wc -l`
if ($docker_status == 0); then
  systemctl start docker
fi

echo "---------- 安装docker-compose -------"
sudo curl -L https://github.com/docker/compose/releases/download/1.24.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

# 安装 shadowsocks

# docker pull shadowsocks/shadowsocks-libev
# docker run -e PASSWORD=<password> -p <server-port>:8388 -p <server-port>:8388/udp -d shadowsocks/shadowsocks-libev
