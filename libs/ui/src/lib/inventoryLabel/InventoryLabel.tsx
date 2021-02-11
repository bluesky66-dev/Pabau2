import React, { FC } from 'react'
import styles from './InventoryLabel.module.less'
import classNames from 'classnames'
interface P {
  labelType?: string
}

export const InventoryLabel: FC<P> = ({ labelType, ...props }) => {
  return (
    <div className={styles.labelWrapper}>
      <label
        className={classNames(
          labelType?.toLowerCase() === 'empty'
            ? styles.empty
            : labelType?.toLowerCase() === 'low'
            ? styles.low
            : styles.good
        )}
      >
        {labelType?.toLowerCase() === 'empty'
          ? 'Empty'
          : labelType?.toLowerCase() === 'low'
          ? 'Low'
          : 'Good'}
      </label>
    </div>
  )
}

export default InventoryLabel
