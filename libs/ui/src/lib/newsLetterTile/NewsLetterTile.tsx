import React, { FC } from 'react'
import { Progress as AntProgress, Popover } from 'antd'
import { ProgressProps } from 'antd/lib/progress'

import styles from './NewsLetterTile.module.less'

interface P extends ProgressProps {
  totalSent: number
  opened: number
  clicked: number
}

const NewsLetterTile: FC<P> = ({ totalSent, opened, clicked, ...props }) => {
  const calculateValue = (value: number): number => {
    const content = (value * 100) / totalSent
    return Number(content.toFixed(2))
  }

  const preparePopoverContent = (value: number, type: string): JSX.Element => {
    return (
      <div className={styles.popOver}>
        {type}:{calculateValue(value)}% ({opened} out of {totalSent} contacts)
      </div>
    )
  }
  return (
    <div className={styles.popOverModal}>
      <div className={styles.customTooltip}>
        <p>O:</p>
        <Popover
          placement={'bottom'}
          content={preparePopoverContent(opened, 'Opened')}
        >
          <AntProgress
            showInfo={false}
            percent={calculateValue(opened)}
            {...props}
          />
        </Popover>
      </div>
      <div className={styles.customTooltip}>
        <p>C:</p>
        <Popover
          placement={'bottom'}
          content={preparePopoverContent(clicked, 'Clicked')}
        >
          <AntProgress
            showInfo={false}
            percent={calculateValue(clicked)}
            {...props}
          />
        </Popover>
      </div>
    </div>
  )
}

export default NewsLetterTile
