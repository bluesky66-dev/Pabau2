import React, { FC } from 'react'
import { Progress as AntProgress, Tooltip } from 'antd'
import { ProgressProps } from 'antd/lib/progress'

import styles from './NewsLetterTile.module.less'

interface P extends ProgressProps {
  totalSent: number
  opened: number
  clicked: number
}

const NewsLetterTile: FC<P> = ({ totalSent, opened, clicked, ...props }) => {
  const openedPercentage = calculatePercentage(opened, totalSent)
  const clickedPercentage = calculatePercentage(clicked, totalSent)

  const preparePopoverContent = (value: number, type: string): JSX.Element => {
    return (
      <div className={styles.tooltipText}>
        {type}:{value}% ({opened} out of {totalSent} contacts)
      </div>
    )
  }
  return (
    <div className={styles.popOverModal}>
      <div className={styles.customTooltip}>
        <p>O:</p>
        <Tooltip
          title={preparePopoverContent(openedPercentage, 'Opened')}
          placement={'bottom'}
        >
          <AntProgress showInfo={false} percent={openedPercentage} {...props} />
        </Tooltip>
      </div>
      <div className={styles.customTooltip}>
        <p>C:</p>
        <Tooltip
          placement={'bottom'}
          title={preparePopoverContent(clickedPercentage, 'Clicked')}
        >
          <AntProgress
            showInfo={false}
            percent={clickedPercentage}
            {...props}
          />
        </Tooltip>
      </div>
    </div>
  )
}

function calculatePercentage(value: number, total: number): number {
  return Number(Number((value * 100) / total).toFixed(2))
}

export default NewsLetterTile
