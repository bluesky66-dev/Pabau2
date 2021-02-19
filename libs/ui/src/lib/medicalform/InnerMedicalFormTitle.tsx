import React, { FC } from 'react'
import styles from './Inner.module.less'

interface P {
  iconUrl: string
  bgcolor: string
  title: string
}

const InnerMedicalFormTitle: FC<P> = ({ iconUrl, bgcolor, title }) => {
  return (
    <div className={styles.formItem} style={{ borderTop: 'none' }}>
      <div className={`${styles.formTitle} ${styles.formCommon}`}>
        <div className={styles.titleImg} style={{ background: bgcolor }}>
          <img src={iconUrl} alt="" />
        </div>
        <div className={styles.titleDesc}>
          <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default InnerMedicalFormTitle
