import React, { FC, ReactElement } from 'react'

import styles from './SetupChip.module.less'

export interface SetupChipProps {
  title: string
  subTitle: string
  image: ReactElement
}

export const SetupChip: FC<SetupChipProps> = ({ title, subTitle, image }) => {
  return (
    <div className={styles.chipBox}>
      <div className={styles.chipImage}>{image}</div>
      <div>
        <div className={styles.chipTitle}>{title}</div>
        <div className={styles.chipSubTitle}>{subTitle}</div>
      </div>
    </div>
  )
}

export default SetupChip
