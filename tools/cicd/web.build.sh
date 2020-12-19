#!/bin/bash

set -e

echo "About to deploy web!"
echo "Hostname: $HOSTNAME"
echo "Hostname: $(hostname)"

pwd && ls -al && set

mkdir -p /cdata/monorepo && cd "$_"

cd /cdata/monorepo
pwd && ls -al




echo "About to docker build..."
docker build -t pabau/newpabau-web:latest -f tools/cicd/web.Dockerfile .

echo "About to docker tag..."
docker tag pabau/newpabau-web:latest 10.42.184.17:5000/pabau/newpabau-web:latest

echo "About to docker push..."
docker push 10.42.184.17:5000/pabau/newpabau-web
