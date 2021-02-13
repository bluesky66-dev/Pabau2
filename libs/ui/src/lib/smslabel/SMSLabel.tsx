import React, { FC, useState } from 'react'
import { Popover, Button } from 'antd'
import styles from './SMSLabel.module.less'

/* eslint-disable-next-line */
export interface SMSLabelProps {
  status: string
  block?: boolean
}

export const SMSLabel: FC<SMSLabelProps> = ({ status, block, ...props }) => {
  
  const StatusData = {
    '?': {
      label: 'Debounced',
      class: 'bounced',
      content:
        'The message expired at the operator after the default 48 hour validity period. Either the phone is off, or roaming abroad.',
    },
    D: {
      label: 'Delivered',
      class: 'delivered',
      content:
        'The message was successfully delivered to the handset.  The handset itself has reported that the message was received.  We do not get false positives.',
    },
    I: {
      label: 'Invalid',
      class: 'invalid',
      content:
        'The mobile number is either incorrectly formatted, or is not allocated to a mobile network. Outside of UK, if number has been ported between networks it may fail.',
    },
    U: {
      label: 'Debounced',
      class: 'expired',
      content:
        'The message expired at the operator after the default 48 hour validity period. Either the phone is off, or roaming abroad.',
    },
    E: {
      label: 'Debounced',
      class: 'bounced',
      content:
        'The message expired at the operator after the default 48 hour validity period. Either the phone is off, or roaming abroad.',
    },
  }

  return (
    <div className={styles.smsLabelMain}>
      <Popover
        {...props}
        content={StatusData[status] ? StatusData[status].content : ''}
        placement="top"
      >
        <Button
          {...props}
          className={`${block && 'block'} ${
            StatusData[status] ? StatusData[status].class : ''
          }`}
        >
          <span>
            {StatusData[status]?.label ? StatusData[status].label : 'Labelled'}
          </span>
        </Button>
      </Popover>
    </div>
  )
}

export default SMSLabel
