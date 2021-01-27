import { Input } from 'antd'
import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import styles from './Medicalform.module.less'
import MedicalformBottom from './MedicalformBottom'
import MedicalformTitle from './MedicalformTitle'

export const MedicalForm: FC = (): JSX.Element => {
  return (
    <div className={styles.headingForm}>
      <div className="formItem">
        <div className="formCaption formCommon">
          <span>component settings</span>
        </div>
      </div>
      <div className="formItem">
        <MedicalformTitle
          iconUrl={headingIcon}
          bgcolor="#6383F1"
          title="Heading"
          desc="Create a heading for a section"
        />
      </div>
      <div className="formItem">
        <div className="formQuestion formCommon">
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
        </div>
      </div>
      <div className="formItem" style={{ borderBottom: 'none' }}>
        <MedicalformBottom needLeft={false} />
      </div>
    </div>
  )
}

export default MedicalForm
