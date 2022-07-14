#!/bin/bash
cd /home/ubuntu/myjourney/server
export BUCKET_NAME=$(aws ssm get-parameters --region ap-northeast-2 --names BUCKET_NAME --query Parameters[0].Value | sed 's/"//g')
pm2 start index.js