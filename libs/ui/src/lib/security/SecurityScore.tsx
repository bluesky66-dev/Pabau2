/* eslint-disable */
import React from 'react'

import styles from './Security.module.less'
import { Progress } from 'antd'
import { Button } from '@pabau/ui'

export interface SecurityScoreProps {
  percent?: number
}

export function SecurityScore(props: SecurityScoreProps) {
  const { percent = 0 } = props

  let progressColor, stateStr

  if (percent < 30) {
    progressColor = 'red'
    stateStr = 'Bad'
  } else if (percent >= 30 && percent < 60) {
    progressColor = 'yellow'
    stateStr = 'Good'
  } else {
    progressColor = 'green'
    stateStr = 'Excellent'
  }

  return (
    <div className={styles.scoreBody}>
      <p className={styles.scoreTitle}>Pabau Baseline Standard</p>
      <div className={styles.seconddivrow}>
        <span className={styles.scorePercent}> {percent || 0}% {stateStr}</span>
        <Progress
            className={styles.scoreProgress}
            percent={percent || 0}
            strokeColor={progressColor}
            showInfo={false}
          />
      </div>
      <div className={styles.thirddivrow}> 
        <span className={styles.scoreTitle1}>of the standart met</span>
        <Button className={styles.btnScore} size="middle" type="link">
              How do we calculate this score?
        </Button>
      </div>
      
    </div>
  )
}

export default SecurityScore
