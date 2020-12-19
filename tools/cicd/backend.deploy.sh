#!/bin/bash

set -e

docker run --rm \
  -e "RANCHER_ACCESS_KEY=${RANCHER_ACCESS_KEY}" \
  -e "RANCHER_SECRET_KEY=${RANCHER_SECRET_KEY}" \
  -e "RANCHER_URL=${RANCHER_URL}" \
  cdrx/rancher-gitlab-deploy \
    upgrade \
      --environment Default \
      --stack global-ops \
      --create \
      --service newpabau-backend \
      --new-image "10.42.184.17:5000/pabau/newpabau-backend:latest" \
      --finish-upgrade \
      --rollback-on-error \
      --start-before-stopping \
      --wait-for-upgrade-to-finish \
      --sidekicks
