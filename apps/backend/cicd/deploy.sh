#!/usr/bin/env bash
set -e

echo "DEBUG: pwd=$(pwd)"

APP_NAME="$(basename "$(dirname "..")")"

yarn run nx run "${APP_NAME}:build" --prod
cp vercel.json "../../dist/apps/${APP_NAME}/vercel.json"
cp ../../package.json "../../dist/apps/${APP_NAME}/package.json"
cd "../../dist/apps/${APP_NAME}"

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json --prod)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"

echo "commit hash: ${BITBUCKET_COMMIT}"




