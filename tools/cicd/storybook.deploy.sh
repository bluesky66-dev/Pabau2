#!/bin/bash

set -e

echo "About to deploy storybook!"
echo "Hostname: $HOSTNAME"
echo "Hostname: $(hostname)"

pwd && ls -al && set

mkdir -p /cdata/monorepo && cd "$_"

cd /cdata/monorepo
pwd && ls -al

echo "About to checkout..."
if [ ! -d "/cdata/monorepo/.git" ]; then
  echo "Checking out..."
  git clone git@bitbucket.org:pabau/monorepo .
fi

echo "About to pull..."
git pull --ff-only


echo "About to docker build..."
docker build -t pabau/pabau-ui-storybook:latest -f tools/cicd/storybook.Dockerfile .

echo "About to docker tag..."
docker tag pabau/pabau-ui-storybook:latest 10.42.184.17:5000/pabau/pabau-ui-storybook:latest

echo "About to docker push..."
docker push 10.42.184.17:5000/pabau/pabau-ui-storybook

echo "About to deploy..."
docker run --rm \
  -e "RANCHER_ACCESS_KEY=${RANCHER_ACCESS_KEY}" \
  -e "RANCHER_SECRET_KEY=${RANCHER_SECRET_KEY}" \
  -e "RANCHER_URL=${RANCHER_URL}" \
  cdrx/rancher-gitlab-deploy \
    upgrade \
      --environment Default \
      --stack global-ops \
      --create \
      --service pabau-ui-storybook \
      --new-image "10.42.184.17:5000/pabau/pabau-ui-storybook:latest" \
      --finish-upgrade \
      --rollback-on-error \
      --start-before-stopping \
      --wait-for-upgrade-to-finish \
      --sidekicks

echo "EOF"
