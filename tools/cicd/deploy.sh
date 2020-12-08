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
docker build -t pabau-app-frontend -f web.Dockerfile crm/

~/rancher-cli/bin/rancher ps

echo "EOF"
