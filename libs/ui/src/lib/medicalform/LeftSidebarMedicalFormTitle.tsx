import React, { FC } from 'react'
import styles from './LeftSidebar.module.less'

interface P {
  iconUrl: string
  bgcolor: string
  title: string
  desc: string
}

const LeftSidebarMedicalFormTitle: FC<P> = ({
  iconUrl,
  bgcolor,
  title,
  desc,
}) => {
  return (
    <div className={styles.formItem}>
      <div className={`${styles.formTitle} ${styles.formCommon}`}>
        <div className={styles.titleImg} style={{ background: bgcolor }}>
          <img src={iconUrl} alt="" />
        </div>
        <div className={styles.titleDesc}>
          <h1>{title}</h1>
          <span>{desc}</span>
        </div>
      </div>
    </div>
  )
}

export default LeftSidebarMedicalFormTitle
