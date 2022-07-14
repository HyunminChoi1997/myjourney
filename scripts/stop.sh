#!/bin/bash
cd /home/ubuntu/myjourney/server
pm2 stop index.js
pm2 delete index.js