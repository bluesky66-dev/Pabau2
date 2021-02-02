import { Button, ButtonTypes } from '@pabau/ui'
import { Input } from 'antd'
import React, { FC, useState } from 'react'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import LinkedField from './LinkedField'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'
import Options from './Options'

const SingleChoice: FC = () => {
  const [advanced, setAdvanced] = useState(false)
  return (
    <div className={styles.mainBody}>
      <div className={styles.formItem}>
        <div className={`${styles.formCaption} ${styles.formCommon}`}>
          <span>component settings</span>
        </div>
      </div>
      <div className={styles.formItem}>
        <MedicalFormTitle
          iconUrl={singleChoiceIcon}
          bgcolor="#65CD98"
          title="Single choice"
          desc="Ask for a single choice"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
          <Options />
          {advanced && <LinkedField linkedLabel="Linked field" />}
          <br />
          <Button
            type={ButtonTypes.default}
            style={{ marginTop: '15px' }}
            onClick={(e) => setAdvanced((advanced) => !advanced)}
            size="small"
          >
            {!advanced && `Show advanced settings`}
            {advanced && `Hide advanced settings`}
          </Button>
        </div>
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom needLeft={true} />
      </div>
    </div>
  )
}

export default SingleChoice
