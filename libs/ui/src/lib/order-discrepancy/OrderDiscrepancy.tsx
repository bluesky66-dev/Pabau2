import React, { FC } from 'react'
import styles from './OrderDiscrepancy.module.less'

/* eslint-disable-next-line */
export interface OrderDiscrepancyProps {
  word: 0 | 1
  number: number
}

export const OrderDiscrepancy: FC<OrderDiscrepancyProps> = ({
  word,
  number,
  ...rest
}) => {
  return (
    <div className={styles.orderDiscrepancy}>
      {word === 1 ? (
        <div className={styles.positive}>{`+${number}`}</div>
      ) : word === 0 ? (
        <div className={styles.negative}>{`-${number}`}</div>
      ) : (
        ''
      )}
    </div>
  )
}

export default OrderDiscrepancy
