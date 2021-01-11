#!/usr/bin/env bash
set -e

echo "DEBUG: pwd=$(pwd)"
APP_NAME="$(basename "$(dirname "$(cd "$(dirname "${0}")"; pwd)")")"
echo "DEBUG: app_name=${APP_NAME}"

yarn run nx run "${APP_NAME}:export" --prod
cp "apps/${APP_NAME}/vercel.json" "dist/apps/${APP_NAME}/exported/"
cp package.json "dist/apps/${APP_NAME}/"
cp yarn.lock "dist/apps/${APP_NAME}/"
cd "dist/apps/${APP_NAME}/exported"

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json --prod)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"

echo "commit hash: ${BITBUCKET_COMMIT}"
