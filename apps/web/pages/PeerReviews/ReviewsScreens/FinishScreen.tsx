import React, { FC } from 'react'
import { Button } from '@pabau/ui'
import TickMarkIcon from './assets/TickMark'
import styles from '../index.module.less'

/* eslint-disable-next-line */
export interface P {
  finishTitle: string
  finishDescription: string
  onClose: () => void
}

export const FinishScreen: FC<P> = ({
  finishTitle,
  finishDescription,
  onClose,
}) => {
  return (
    <div className={styles.section}>
      <div className={styles.centeralFlexBox}>
        <div className={styles.tickMark}>
          <TickMarkIcon />
        </div>
        <div className={styles.title}>{finishTitle}</div>
        <div className={styles.subTitle}>{finishDescription}</div>
        <div className={styles.btn}>
          <Button type="primary" size="large" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

export default FinishScreen
