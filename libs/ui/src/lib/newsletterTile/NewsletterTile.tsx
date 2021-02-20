import React, { FC } from 'react'
import { Progress as AntProgress, Tooltip } from 'antd'
import { ProgressProps } from 'antd/lib/progress'

import styles from './NewsletterTile.module.less'

interface P extends ProgressProps {
  totalSent: number
  opened: number
  clicked: number
}

interface popoverContent {
  value: number
  type: string
}

const NewsletterTile: FC<P> = ({ totalSent, opened, clicked, ...props }) => {
  const openedPercentage = calculatePercentage(opened, totalSent)
  const clickedPercentage = calculatePercentage(clicked, totalSent)

  const PreparePopoverContent: FC<popoverContent> = ({ value, type }) => {
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
          title={
            <PreparePopoverContent value={openedPercentage} type={'Opened'} />
          }
          placement={'bottom'}
        >
          <AntProgress showInfo={false} percent={openedPercentage} {...props} />
        </Tooltip>
      </div>
      <div className={styles.customTooltip}>
        <p>C:</p>
        <Tooltip
          placement={'bottom'}
          title={
            <PreparePopoverContent value={clickedPercentage} type={'Clicked'} />
          }
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

export default NewsletterTile
