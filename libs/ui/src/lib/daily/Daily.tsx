import React, { FC } from 'react'
import classNames from 'classnames'
import styles from './Daily.module.less'
export interface DailyProps {
  tickedDays?: Array<number>
}

export const Daily: FC<DailyProps> = ({ tickedDays = [] }) => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  const isTicked = (idx) => {
    return tickedDays.find((day) => day === idx + 1)
  }
  return (
    <div className={styles.dailyContainer}>
      {weekDays.map((day, index) => (
        <div
          key={day}
          className={
            index === 6
              ? classNames(styles.dailyItem, styles.dailyLast)
              : styles.dailyItem
          }
        >
          <span className={isTicked(index) ? styles.dailyTicked : ''}>
            {day}
          </span>
        </div>
      ))}
    </div>
  )
}

export default Daily
