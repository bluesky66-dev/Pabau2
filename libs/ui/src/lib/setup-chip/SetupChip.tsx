import React, { FC, ReactElement } from 'react'

import styles from './SetupChip.module.less'

export interface SetupChipProps {
  title: string
  subTitle: string
  image: ReactElement
  onClick: (index: string) => void
}

export const SetupChip: FC<SetupChipProps> = ({
  title,
  subTitle,
  image,
  onClick,
}) => {
  return (
    <div className={styles.chipBox} onClick={() => onClick(title)}>
      <div className={styles.chipImage}>{image}</div>
      <div>
        <div className={styles.chipTitle}>{title}</div>
        <div className={styles.chipSubTitle}>{subTitle}</div>
      </div>
    </div>
  )
}

export default SetupChip
