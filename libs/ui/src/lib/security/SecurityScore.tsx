import React from 'react'

import styles from './Security.module.less'
import { Row, Col, Progress } from 'antd'
import {Button} from '../../lib/button/button'

export interface SecurityProps {}

export function SecurityScore(props: SecurityProps) {
  return (
    <div className={styles.scoreBody}>
      <Row style={{position: 'relative'}}>
        <Col md={5} sm={5}>
          <p className={styles.scoreTitle}>Pabau Baseline Standart</p>
          <p className={styles.scorePercent}>76% Good</p>
          <p className={styles.scoreTitle1}>of the standart met</p>
        </Col>
        <Col md = { 19 } sm = { 19}>
          
            <Progress className={styles.scoreProgress} percent={100} showInfo={false} />
            <Button className={styles.btnScore} onClick={() => {}} size="medium" type="link">How do we calculate this score?</Button>
        </Col>
      </Row>
    </div>
  )
}

export default SecurityScore
