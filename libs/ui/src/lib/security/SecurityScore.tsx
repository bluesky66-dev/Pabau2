/* eslint-disable */
import React from 'react'

import styles from './Security.module.less'
import { Row, Col, Progress } from 'antd'
import { Button } from '../../lib/button/button'

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
      <Row style={{ position: 'relative' }}>
        <Col md={5} sm={5}>
          <p className={styles.scoreTitle}>Pabau Baseline Standart</p>
          <p className={styles.scorePercent}> {percent || 0}% {stateStr}</p>
          <p className={styles.scoreTitle1}>of the standart met</p>
        </Col>
        <Col md={19} sm={19}>
          <Progress
            className={styles.scoreProgress}
            percent={percent || 0}
            strokeColor={progressColor}
            showInfo={false}
          />
          <Button className={styles.btnScore} size="middle" type="link">
            How do we calculate this score?
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default SecurityScore
