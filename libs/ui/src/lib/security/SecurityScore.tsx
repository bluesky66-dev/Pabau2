import React from 'react'

import styles from './Security.module.less'
import { Row, Col, Progress } from 'antd'
import {Button} from '../../lib/button/button'

export interface SecurityScoreProps {
  percent?: number
}

export function SecurityScore(props: SecurityScoreProps) {
  const {percent = 0 } = props
  
  var progressColor;

  if ( percent < 30 ) {
    progressColor = "red"
  } else if ( percent >= 30 && percent < 60) {
    progressColor = "yellow"
  } else {
    progressColor = "green"
  }

  return (
    <div className={styles.scoreBody}>
      <Row style={{position: 'relative'}}>
        <Col md={5} sm={5}>
          <p className={styles.scoreTitle}>Pabau Baseline Standart</p>
          <p className={styles.scorePercent}> {percent || 0 }% Good</p>
          <p className={styles.scoreTitle1}>of the standart met</p>
        </Col>
        <Col md = { 19 } sm = { 19}>
          
            <Progress className={styles.scoreProgress} percent={percent || 0} strokeColor={ progressColor } showInfo={false} />
            <Button className={styles.btnScore} onClick={() => {}} size="middle" type="link">How do we calculate this score?</Button>

        </Col>
      </Row>
    </div>
  )
}

export default SecurityScore
