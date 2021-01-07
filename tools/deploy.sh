#!/usr/bin/env bash
set -e

cd dist/apps/web/exported

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ../../../../apps/web/vercel.json)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"

echo "commit hash: ${BITBUCKET_COMMIT}"

vercel alias "${LAST_LINE}" "prelive-crm.new.pabau.com"


