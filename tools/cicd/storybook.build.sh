#!/bin/bash

set -e

echo "About to deploy storybook!"
echo "Hostname: $HOSTNAME"
echo "Hostname: $(hostname)"

pwd && ls -al && set

mkdir -p /cdata/monorepo && cd "$_"

cd /cdata/monorepo
pwd && ls -al




echo "About to docker build..."
docker build -t pabau/pabau-ui-storybook:latest -f tools/cicd/storybook.Dockerfile .

echo "About to docker tag..."
docker tag pabau/pabau-ui-storybook:latest 10.42.184.17:5000/pabau/pabau-ui-storybook:latest

echo "About to docker push..."
docker push 10.42.184.17:5000/pabau/pabau-ui-storybook
