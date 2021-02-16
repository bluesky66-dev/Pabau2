#!/usr/bin/env bash
set -e

echo "DEBUG: pwd=$(pwd)"
APP_NAME="$(basename "$(dirname "$(cd "$(dirname "${0}")"; pwd)")")"
DOCKER_USERNAME="ops"
echo "DEBUG: app_name=${APP_NAME}"


yarn run nx run "${APP_NAME}:build" --prod
cp "apps/${APP_NAME}/package.json-prod" "dist/apps/${APP_NAME}/"
cp -r "apps/${APP_NAME}/prisma" "dist/apps/${APP_NAME}/prisma"
docker build "dist/apps/${APP_NAME}" -t "${APP_NAME}" -f tools/cicd/bridge.Dockerfile
docker image tag "${APP_NAME}:latest" "registry.pabau.com:5000/monorepo/${APP_NAME}"
docker login registry.pabau.com:5000 -u="${DOCKER_USERNAME}" -p="${DOCKER_PASSWORD}"
docker image push "registry.pabau.com:5000/monorepo/${APP_NAME}"
