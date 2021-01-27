import { Input } from 'antd'
import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const MedicalForm: FC = () => {
  return (
    <div className={styles.mainBody}>
      <div className={styles.formItem}>
        <div className={`${styles.formCaption} ${styles.formCommon}`}>
          <span>component settings</span>
        </div>
      </div>
      <div className={styles.formItem}>
        <MedicalFormTitle
          iconUrl={headingIcon}
          bgcolor="#6383F1"
          title="Heading"
          desc="Create a heading for a section"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
        </div>
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom needLeft={false} />
      </div>
    </div>
  )
}

export default MedicalForm
