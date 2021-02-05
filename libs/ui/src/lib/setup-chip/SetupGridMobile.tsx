import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import styles from './SetupChip.module.less'

export interface SubDataTitleMobile {
  title: string
  data: string[]
}

export interface SetupGridMobileProps {
  image: string
  title: string
  subDataTitles: SubDataTitleMobile[]
  onClick: (index: string) => void
}

export function SetupGridMobile(props: SetupGridMobileProps): JSX.Element {
  const { image, title, subDataTitles } = props

  return (
    <div
      className={styles.gridMobileWrapper}
      onClick={() => props.onClick(title)}
    >
      <div className={styles.imgTitleWrap}>
        <img src={image} alt={title} />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.listIcon}>
        {subDataTitles.length > 0 && <RightOutlined />}
      </div>
    </div>
  )
}

export default SetupGridMobile
