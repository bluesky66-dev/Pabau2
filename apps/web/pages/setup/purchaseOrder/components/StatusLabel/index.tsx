import React, { FC } from 'react'
import { Popover, Button } from 'antd'
import styles from './index.module.less'
export interface IndexProps {
  type: string
  label: string | number
  block?: boolean
  tooltip?: string
}

export const Index: FC<IndexProps> = ({
  type,
  block,
  label,
  tooltip,
  ...props
}) => {
  const StatusData = {
    good: {
      label: `${label}`,
      class: 'delivered',
      content: `${tooltip}`,
    },
    error: {
      label: `${label}`,
      class: 'invalid',
      content: `${tooltip}`,
    },
    disable: {
      label: `${label}`,
      class: 'expired',
      content: `${tooltip}`,
    },
    warning: {
      label: `${label}`,
      class: 'bounced',
      content: `${tooltip}`,
    },
  }

  return (
    <div className={styles.smsLabelMain}>
      {tooltip ? (
        <Popover
          {...props}
          content={StatusData[type] ? StatusData[type].content : ''}
          placement="top"
        >
          <Button
            {...props}
            className={`${block && 'block'} ${
              StatusData[type] ? StatusData[type].class : ''
            }`}
          >
            <span>
              {StatusData[type]?.label ? StatusData[type].label : 'Labelled'}
            </span>
          </Button>
        </Popover>
      ) : (
        <Button
          {...props}
          className={`${block && 'block'} ${
            StatusData[type] ? StatusData[type].class : ''
          }`}
        >
          <span>
            {StatusData[type]?.label ? StatusData[type].label : 'Labelled'}
          </span>
        </Button>
      )}
    </div>
  )
}

export default Index
