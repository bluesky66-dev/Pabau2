#!/bin/bash

set -e

echo "About to deploy!"
echo "Hostname: $HOSTNAME"
echo "Hostname: $(hostname)"

pwd && ls -al

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
docker build -t pabau-app-frontend -f tools/cicd/web.Dockerfile .
docker build -t pabau-ui-storybook -f tools/cicd/storybook.Dockerfile .

echo "About to deploy..."
docker run --rm -e "RANCHER_ACCESS_KEY=${RANCHER_ACCESS_KEY}" -e "RANCHER_SECRET_KEY=${RANCHER_SECRET_KEY}" -e "RANCHER_URL=${RANCHER_URL}" cdrx/rancher-gitlab-deploy upgrade --environment Default --stack global-ops --create --service newpabau-web --finish-upgrade --rollback-on-error --start-before-stopping --wait-for-upgrade-to-finish --sidekicks

echo "EOF"
