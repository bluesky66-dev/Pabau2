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

echo "----- DEBUG -----"
echo "(pwd)=$(pwd)"
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

cp "${APP_TYPE}/${APP_NAME}/vercel.json" "${build_output_path}/"

if [ -z "${BITBUCKET_PR_ID}" ]; then
  echo "===== Processing type COMMIT ====="
  OUTPUT=$(cd "${build_output_path}/" && vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json --prod)
  echo "errorlevel: $?"
  echo "Output from vercel:"
  echo "${OUTPUT}"
  echo "--"
  LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
  echo "last line: ${LAST_LINE}"

  message_body=''
  read_heredoc message_body <<HEREDOC
*New Version Staged for Production* - ${APP_NAME} v${PACKAGE_JSON_VERSION}

${LAST_LINE}

${LAST_COMMIT_LOG}
HEREDOC
  echo "${message_body}" >> /tmp/bot_message.txt

  cat tools/cicd/slack_notification.json > /dev/null || (echo "ERROR: JSON not found"; exit 1)
  jq '.' tools/cicd/slack_notification.json > /dev/null || (echo "ERROR: Invalid JSON"; exit 1)

#  jq --arg var "${message_body}" '.blocks[0].text.text = $var' tools/cicd/slack_notification.json | curl -0 "${SLACK_HOOK_URL}" \
#    -H "Expect:" \
#    -H 'Content-Type: application/json; charset=utf-8' \
#    --data-binary @-

else
  echo "===== Processing type PR ====="
  OUTPUT=$(cd "${build_output_path}/" && vercel --scope "${VERCEL_TOKEN}" switch Pabau2 && vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json)
  echo "errorlevel: $?"
  echo "Output from vercel:"
  echo "${OUTPUT}"
  echo "--"
  LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
  echo "last line: ${LAST_LINE}"
  curl -X POST -H "Content-Type: application/json" \
    -d '{"channel":"#pabau-2-dev","text":"'"${APP_NAME}"' for PR ID '"${BITBUCKET_PR_ID}"' https://bitbucket.org/pabau/monorepo/pull-requests/'"${BITBUCKET_PR_ID}"' by '"${PR_AUTHOR}"' deployed to '"${LAST_LINE}"'"}' \
    "${SLACK_HOOK_URL}"

  #vercel --token "${VERCEL_TOKEN}" alias "${LAST_LINE}" "crm-pr-${BITBUCKET_PR_ID}.new.pabau.com"
fi
