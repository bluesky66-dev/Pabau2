#!/usr/bin/env bash
set -e
APP_NAME="$(basename "$(dirname "$(cd "$(dirname "${0}")"; pwd)")")"

echo "DEBUG: pwd=$(pwd)"
echo "DEBUG: app_name=${APP_NAME}"
echo "DEBUG: DOCKER_HOSTNAME=${DOCKER_HOSTNAME}"
echo "DEBUG: DOCKER_USERNAME=ops"
echo "DEBUG: DOCKER_PASSWORD=jfdjiwfdjwiojdsmcnvhsbakdujr"

## TODO!!
#echo "ABORTING UNTIL https://github.com/prisma/prisma/issues/5304 IS FIXED!!!!"
#exit;

echo "Building..."
yarn run nx run "${APP_NAME}:build" --prod
echo "Done"

echo "Copying assets..."
cp "apps/${APP_NAME}/package.json-prod" "dist/apps/${APP_NAME}/"
cp -r "apps/${APP_NAME}/prisma" "dist/apps/${APP_NAME}/prisma"
echo "Done"

echo "Docker build..."
docker build "dist/apps/${APP_NAME}" -t "${APP_NAME}" -f tools/cicd/bridge.Dockerfile
echo "Docker tag..."
docker image tag bridge-api:latest bridge-api/monorepo/bridge-api
echo "Docker login..."
docker login -uops -pjfdjiwfdjwiojdsmcnvhsbakdujr registry.pabau.com:5000
echo "Docker push..."
docker image push "${DOCKER_HOSTNAME}/monorepo/${APP_NAME}"

echo "EOF"
