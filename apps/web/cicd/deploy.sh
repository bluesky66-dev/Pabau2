#!/usr/bin/env bash
set -e

echo "DEBUG: pwd=$(pwd)"
APP_NAME="$(basename "$(dirname "$(cd "$(dirname "${0}")"; pwd)")")"
echo "DEBUG: app_name=${APP_NAME}"

yarn run nx run "${APP_NAME}:export"
cp "apps/${APP_NAME}/vercel.json" "dist/apps/${APP_NAME}/exported/"
cd "dist/apps/${APP_NAME}/exported"

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"

echo "commit hash: ${BITBUCKET_COMMIT}"
vercel --token "${VERCEL_TOKEN}" alias "${LAST_LINE}" prelive-crm.new.pabau.com
