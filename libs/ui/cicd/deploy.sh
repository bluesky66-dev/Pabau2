#!/usr/bin/env bash
set -e

echo "(PWD): $(pwd)"
echo "BITBUCKET_COMMIT: ${BITBUCKET_COMMIT}"
echo "BITBUCKET_PR_ID: ${BITBUCKET_PR_ID}"
APP_NAME="$(basename "$(dirname "$(
  cd "$(dirname "${0}")"
  pwd
)")")"
echo "APP_NAME=${APP_NAME}"
APP_TYPE="$(basename "$(dirname "$(
  cd "$(dirname "${0}")/.."
  pwd
)")")"
echo "APP_TYPE=${APP_TYPE}"

yarn run nx run "${APP_NAME}:build-storybook"
cp "libs/${APP_NAME}/vercel.json" "dist/storybook/${APP_NAME}/"
cd "dist/storybook/${APP_NAME}"

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json --prod)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"


if [ -n "${BITBUCKET_PR_ID}" ]; then
  curl -X POST -H "Content-Type: application/json" \
    -d '{"channel":"#pabau-2-dev","text":"'"${APP_TYPE}":"${APP_NAME}"' for PR ID '"${BITBUCKET_PR_ID}"' deployed to '"${LAST_LINE}"'"}' \
    "${SLACK_HOOK_URL}"
  #vercel --token "${VERCEL_TOKEN}" alias "${LAST_LINE}" "crm-pr-${BITBUCKET_PR_ID}.new.pabau.com"
fi
