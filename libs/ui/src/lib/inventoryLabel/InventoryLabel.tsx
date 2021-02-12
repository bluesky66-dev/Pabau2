import React, { FC } from 'react'
import styles from './InventoryLabel.module.less'

export enum LabelType {
  empty = 'empty',
  low = 'low',
  good = 'good',
}
interface P {
  labelType?: LabelType
}

export const InventoryLabel: FC<P> = ({ labelType = LabelType.empty }) => {
  return (
    <div className={styles.labelWrapper}>
      <label className={styles[labelType]}>{labelType}</label>
    </div>
  )
}

export default InventoryLabel
