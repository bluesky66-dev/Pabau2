import React from 'react'
import { RightOutlined } from '@ant-design/icons'
import styles from './SetupChip.module.less'

export interface SubDataMenuTitleMobile {
  title: string
  data: string[]
}

export interface SetupGridSubMenuMobileProps {
  subTitleData: SubDataMenuTitleMobile
}

export function SetupGridSubMenuMobile(
  props: SetupGridSubMenuMobileProps
): JSX.Element {
  const { subTitleData } = props

  return (
    <div className={styles.gridMobileWrapper}>
      <div className={styles.imgTitleWrap}>
        <div className={styles.title}>{subTitleData.title}</div>
      </div>
      {subTitleData.data.length > 0 && (
        <div className={styles.listIcon}>
          <RightOutlined />
        </div>
      )}
    </div>
  )
}

export default SetupGridSubMenuMobile
