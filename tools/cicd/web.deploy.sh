#!/usr/bin/env bash
set -e

yarn run nx run web:build --prod
yarn run nx run web:export --prod
cd dist/apps/web/exported

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ../../../../apps/web/vercel.json)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"

echo "commit hash: ${BITBUCKET_COMMIT}"

vercel --token "${VERCEL_TOKEN}" -A ../../../../apps/web/vercel.json \
  alias "${LAST_LINE}" "prelive-crm.new.pabau.com"


