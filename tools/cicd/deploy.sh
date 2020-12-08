#!/bin/bash

set -e

echo "About to deploy!"
echo "Hostname: $HOSTNAME"
echo "Hostname: $(hostname)"

mkdir -p /cdata/monorepo && cd "$_"

if [ ! -d "/cdata/monorepo/.git" ]; then
  git clone git@bitbucket.org:pabau/monorepo .
fi

git pull --ff-only
docker build -t pabau-app-frontend -f tools/cicd/web.Dockerfile .

docker run --rm -it -e "RANCHER_ACCESS_KEY=${RANCHER_ACCESS_KEY}" -e "RANCHER_SECRET_KEY=${RANCHER_SECRET_KEY}" -e "RANCHER_URL=${RANCHER_URL}" cdrx/rancher-gitlab-deploy upgrade --environment Default --stack global-ops --create --service newpabau-web --finish-upgrade --rollback-on-error --start-before-stopping --wait-for-upgrade-to-finish --sidekicks

echo "EOF"
