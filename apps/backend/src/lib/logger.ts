/* eslint-disable */

import Logger from 'r7insight_node'

const logger: any = new Logger({
  token: '678a9ed1-355d-4e40-b8be-419f27068105',
  region: 'eu',
});

export default (text) => {
  logger.info(text)
}
