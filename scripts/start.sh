#!/bin/bash
cd /home/ubuntu/myjourney/server

export MYSQL_USERNAME=$(aws ssm get-parameters --region ap-northeast-2 --names MYSQL_USERNAME --query Parameters[0].Value | sed 's/"//g')
export MYSQL_PASSWORD=$(aws ssm get-parameters --region ap-northeast-2 --names MYSQL_PASSWORD --query Parameters[0].Value | sed 's/"//g')
export MYSQL_PORT=$(aws ssm get-parameters --region ap-northeast-2 --names MYSQL_PORT --query Parameters[0].Value | sed 's/"//g')
export MYSQL_HOST=$(aws ssm get-parameters --region ap-northeast-2 --names MYSQL_HOST --query Parameters[0].Value | sed 's/"//g')
export SC_SECRET=$(aws ssm get-parameters --region ap-northeast-2 --names SC_SECRET --query Parameters[0].Value | sed 's/"//g')
export SALTROUND=$(aws ssm get-parameters --region ap-northeast-2 --names SALTROUND --query Parameters[0].Value | sed 's/"//g')
export DEPLOY=$(aws ssm get-parameters --region ap-northeast-2 --names DEPLOY --query Parameters[0].Value | sed 's/"//g')

npx sequelize-cli db:migrate

pm2 start index.js