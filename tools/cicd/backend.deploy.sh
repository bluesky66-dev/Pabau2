#!/usr/bin/env bash
set -e

yarn run nx run backend:build --prod
cp apps/backend/vercel.json dist/apps/backend/vercel.json
cp apps/backend/package.json-dummy dist/apps/backend/package.json
cd dist/apps/backend

OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ../../../../apps/backend/vercel.json --prod)
echo "errorlevel: $?"

echo "Output from vercel:"
echo "${OUTPUT}"
echo "--"

LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
echo "last line: ${LAST_LINE}"

echo "commit hash: ${BITBUCKET_COMMIT}"




