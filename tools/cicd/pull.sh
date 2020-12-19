#!/bin/bash

set -e

cd /cdata/monorepo

echo "About to checkout..."
if [ ! -d "/cdata/monorepo/.git" ]; then
  echo "Checking out..."
  git clone git@bitbucket.org:pabau/monorepo .
fi

echo "About to pull..."
git pull --ff-only
