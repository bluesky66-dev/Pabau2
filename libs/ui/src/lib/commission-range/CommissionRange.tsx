import React, { FC } from 'react'
import { Row, Col } from 'antd'
import styles from './CommissionRange.module.less'

const colors = ['red-focused', 'warning', 'green-focused']

export interface UserField {
  avatar: string
  name: string
  revenue: number
}

export interface CommissionRangeField {
  range: Array<number>
  percent: number
}

/* eslint-disable-next-line */
export interface CommissionRangeProps {
  rangeItems: CommissionRangeField[]
  userRevenue: UserField
  type: string
}

export const CommissionRange: FC<CommissionRangeProps> = ({
  rangeItems,
  userRevenue,
  type,
}) => {
  rangeItems.sort((a, b) => {
    return a.range[0] - b.range[0]
  })

  const maxRevenue =
    rangeItems.length > 0 ? rangeItems[rangeItems.length - 1].range[1] : 0
  const renderRangeItems = rangeItems.map((rangeItem, index) => {
    const width = ((rangeItem.range[1] - rangeItem.range[0]) * 100) / maxRevenue
    return (
      <div
        key={index}
        className={styles.rangeItem}
        bar-color={colors[index % 3]}
        style={{
          width: `${width > 100 ? 100 : width}%`,
          zIndex: rangeItems.length - index,
        }}
      >
        <span className={styles.rangeValue}>{rangeItem.percent}%</span>
        <div className={styles.rangeBar}></div>
      </div>
    )
  })
  const renderRangeSteps = rangeItems.map((rangeItem, index) => (
    <span key={index} dot-color={colors[index % 3]}>
      £{rangeItem.range[0]}
    </span>
  ))

  const left = (userRevenue.revenue * 100) / maxRevenue

  return (
    <div className={styles.commissionRange}>
      <Row>
        <Col>
          <h2>{type}s commission</h2>
        </Col>
      </Row>
      <Row wrap={false}>
        <Col className={styles.rangeWrapper}>
          <div className={styles.rangeItems}>{renderRangeItems}</div>
          <div
            className={styles.rangeUser}
            style={{ left: `${left > 100 ? 100 : left}%` }}
          >
            <img src={userRevenue.avatar} alt={userRevenue.name} />
          </div>
        </Col>
      </Row>
      <Row className={styles.directionColumn}>
        <div className={styles.rangeSteps}>{renderRangeSteps}</div>
        <div className={styles.totalRevenue}>
          <span>Total: £{userRevenue.revenue}</span>
        </div>
      </Row>
    </div>
  )
}

export default CommissionRange
