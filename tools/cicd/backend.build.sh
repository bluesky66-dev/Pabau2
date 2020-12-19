#!/bin/bash

set -e

echo "About to deploy backend!"
echo "Hostname: $HOSTNAME"
echo "Hostname: $(hostname)"

pwd && ls -al && set

mkdir -p /cdata/monorepo && cd "$_"

cd /cdata/monorepo
pwd && ls -al




echo "About to docker build..."
docker build -t pabau/newpabau-backend:latest -f tools/cicd/backend.Dockerfile .

echo "About to docker tag..."
docker tag pabau/newpabau-backend:latest 10.42.184.17:5000/pabau/newpabau-backend:latest

echo "About to docker push..."
docker push 10.42.184.17:5000/pabau/newpabau-backend
