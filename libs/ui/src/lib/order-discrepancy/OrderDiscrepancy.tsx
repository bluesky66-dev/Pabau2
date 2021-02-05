import React from 'react'
import styles from './OrderDiscrepancy.module.less'

/* eslint-disable-next-line */
export interface OrderDiscrepancyProps {}

export function OrderDiscrepancy({ word, number, ...rest }) {
  return (
    <div className={styles.orderDiscrepancy}>
      {word == 1 ? (
        <div className={styles.positive}>{`+${number}`}</div>
      ) : (
        <div className={styles.negative}>{`-${number}`}</div>
      )}
    </div>
  )
}

export default OrderDiscrepancy
