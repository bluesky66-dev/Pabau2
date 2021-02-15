#!/bin/sh

#
# Deploys to vercel
#

# Stop on error
set -e

NEWLINE="
"

read_heredoc() {
  read_heredoc_result=""
  while IFS="${NEWLINE}" read -r read_heredoc_line; do
    read_heredoc_result="${read_heredoc_result}${read_heredoc_line}${NEWLINE}"
  done
  eval $1'=${read_heredoc_result}'
}

APP_NAME="$(basename "$(dirname "$(
  cd "$(dirname "${0}")"
  pwd
)")")"
APP_TYPE="$(basename "$(dirname "$(
  cd "$(dirname "${0}")/.."
  pwd
)")")"
VERCEL_JSON_LOCATION=$(cd "${APP_TYPE}/${APP_NAME}" && pwd)

echo "----- DEBUG -----"
echo "(pwd)=$(pwd)"
echo "APP_NAME=${APP_NAME}"
echo "APP_TYPE=${APP_TYPE}"
echo "VERCEL_JSON_LOCATION=${VERCEL_JSON_LOCATION}"
echo "BITBUCKET_COMMIT=${BITBUCKET_COMMIT}"
echo "BITBUCKET_PR_ID=${BITBUCKET_PR_ID}"
pwd
ls -al
echo "-----------------"

if [ "${APP_TYPE}" = "apps" ]; then
  yarn run nx run "${APP_NAME}:export" #--skip-nx-cache
  build_output_path="dist/apps/${APP_NAME}/exported/"
elif [ "${APP_TYPE}" = "libs" ]; then
  yarn run nx run "${APP_NAME}:build-storybook" #--skip-nx-cache
  build_output_path="dist/storybook/${APP_NAME}/"
else
  echo "ERROR: unknown app type '${APP_TYPE}'"; exit 1
fi

if [ -z "${BITBUCKET_PR_ID}" ]; then

  echo "===== Processing type COMMIT ====="
  OUTPUT=$(cd "${build_output_path}" && vercel -c -C --token "${VERCEL_TOKEN}" --scope pabau2 -A "${VERCEL_JSON_LOCATION}/vercel.json" --prod)
  echo "errorlevel: $?"
  echo "Output from vercel:"
  echo "${OUTPUT}"
  echo "--"
  LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
  echo "last line: ${LAST_LINE}"
  echo "${LAST_LINE}" > /tmp/bot_url_${APP_NAME}.txt

  message_body=''
  read_heredoc message_body <<HEREDOC
${APP_NAME}: ${LAST_LINE}
HEREDOC
  echo "${message_body}" >> /tmp/bot_message.txt

else
  echo "===== Processing type PR ====="
  OUTPUT=$(cd "${build_output_path}" && vercel -c -C --token "${VERCEL_TOKEN}" --scope pabau2 -A "${VERCEL_JSON_LOCATION}/vercel.json")
  echo "errorlevel: $?"
  echo "Output from vercel:"
  echo "${OUTPUT}"
  echo "--"
  LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
  echo "last line: ${LAST_LINE}"
  echo "${LAST_LINE}" > /tmp/bot_url_${APP_NAME}.txt

fi
