import React from 'react'

import styles from './Security.module.less'
import { Progress } from 'antd'
import { Button } from '@pabau/ui'

interface P {
  percent: number
  title1: string
  title2: string
  buttonTitle: string
}

export const SecurityScore: React.FC<P> = ({
  percent,
  title1,
  title2,
  buttonTitle,
}) => {
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
      <p className={styles.scoreTitle}>{title1}</p>
      <div className={styles.seconddivrow}>
        <span className={styles.scorePercent}>
          {' '}
          {percent || 0}% {stateStr}
        </span>
        <Progress
          className={styles.scoreProgress}
          percent={percent || 0}
          strokeColor={progressColor}
          showInfo={false}
        />
      </div>
      <div className={styles.thirddivrow}>
        <span className={styles.scoreTitle1}>{title2}</span>
        <Button className={styles.btnScore} size="middle" type="link">
          {buttonTitle}
        </Button>
      </div>
    </div>
  )
}

export default SecurityScore
