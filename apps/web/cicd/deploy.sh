#!/usr/bin/env bash
set -e

echo "GIT_USER: ${GIT_USER}"
echo "GIT_USER_NAME: ${GIT_USER_NAME}"

echo "DEBUG: pwd=$(pwd)"
APP_NAME="$(basename "$(dirname "$(
  cd "$(dirname "${0}")"
  pwd
)")")"
echo "DEBUG: app_name=${APP_NAME}"

yarn run nx run "${APP_NAME}:export" --skip-nx-cache
cp "apps/${APP_NAME}/vercel.json" "dist/apps/${APP_NAME}/exported/"
cd "dist/apps/${APP_NAME}/exported"

echo "commit hash: ${BITBUCKET_COMMIT}"

echo "BITBUCKET_PR_ID: ${BITBUCKET_PR_ID}"

if [ -z "${BITBUCKET_PR_ID}" ]; then
  echo "===== Processing type COMMIT ====="
  OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json --prod)
  echo "errorlevel: $?"
  echo "Output from vercel:"
  echo "${OUTPUT}"
  echo "--"
  LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
  echo "last line: ${LAST_LINE}"
    #-d '{"channel":"#pabau-2-dev","text":"'"${APP_NAME}"' version '"${PACKAGE_JSON_VERSION}"' for production deployed to '"${LAST_LINE}"'"}' \
  curl -0 -v -X POST "${SLACK_HOOK_URL}" \
    -H "Expect:" \
    -H 'Content-Type: application/json; charset=utf-8' \
    --data-binary @- << EOF
    {
      "channel": "#pabau-2-dev",
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "${APP_NAME} version ${PACKAGE_JSON_VERSION} for production deployed to ${LAST_LINE}"
          }
        },
        {
          "type": "button",
          "text": {
            "type": "plain_text",
            "text": "Deploy to Live"
          },
          "style": "primary",
          "value": "click_me_123",
          "action_id": "button"
        }
      ]
    }
EOF
else
  echo "===== Processing type PR ====="
  OUTPUT=$(vercel -c -C --token "${VERCEL_TOKEN}" -A ./vercel.json)
  echo "errorlevel: $?"
  echo "Output from vercel:"
  echo "${OUTPUT}"
  echo "--"
  LAST_LINE=$(echo "${OUTPUT}" | tail -n1)
  echo "last line: ${LAST_LINE}"
#  curl -X POST -H "Content-Type: application/json" \
#    -d '{"channel":"#pabau-2-dev","text":"'"${APP_NAME}"' for PR ID '"${BITBUCKET_PR_ID}"' https://bitbucket.org/pabau/monorepo/pull-requests/'"${BITBUCKET_PR_ID}"' by '"${PR_AUTHOR}"' deployed to '"${LAST_LINE}"'"}' \
#    "${SLACK_HOOK_URL}"

  curl -0 -v -X POST "${SLACK_HOOK_URL}" \
    -H "Expect:" \
    -H 'Content-Type: application/json; charset=utf-8' \
    --data-binary @- << EOF
    {
      "channel": "#pabau-2-dev",
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "Danny Torrence left the following review for your property:"
          }
        },
        {
          "type": "section",
          "block_id": "section567",
          "text": {
            "type": "mrkdwn",
            "text": "<https://google.com|Overlook Hotel> \n :star: \n Doors had too many axe holes, guest in room 237 was far too rowdy, whole place felt stuck in the 1920s."
          },
          "accessory": {
            "type": "image",
            "image_url": "https://is5-ssl.mzstatic.com/image/thumb/Purple3/v4/d3/72/5c/d3725c8f-c642-5d69-1904-aa36e4297885/source/256x256bb.jpg",
            "alt_text": "Haunted hotel image"
          }
        },
        {
          "type": "section",
          "block_id": "section789",
          "fields": [
            {
              "type": "mrkdwn",
              "text": "*Average Rating*\n1.0"
            }
          ]
        },
        {
          "type": "actions",
          "elements": [
            {
              "type": "button",
                "text": {
                    "type": "plain_text",
                    "text": "Reply to review",
                    "emoji": false
                }
            }
          ]
        }
      ]
    }
EOF

  #vercel --token "${VERCEL_TOKEN}" alias "${LAST_LINE}" "crm-pr-${BITBUCKET_PR_ID}.new.pabau.com"
fi
