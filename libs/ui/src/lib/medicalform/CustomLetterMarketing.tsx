import { Button, ButtonTypes } from '@pabau/ui'
import { Radio } from 'antd'
import React, { FC, useState } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import ElementQuestion from './ElementQuestion'
import LinkedField from './LinkedField'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const typeOptions = [
  { label: 'Text', value: 'text' },
  { label: 'Email', value: 'email' },
  { label: 'Number', value: 'number' },
  { label: 'Date', value: 'date' },
]

const CustomLetterMarketing: FC = () => {
  const [selOption, setSelOption] = useState('text')
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
          iconUrl={dobIcon}
          bgcolor="#20BAB1"
          title="Letter marketing"
          desc="Cliens can opt in to marketing"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <ElementQuestion desc="Enter your question" title="Question" />
          <h3 style={{ marginTop: '20px' }}>Input type</h3>
          <Radio.Group
            options={typeOptions}
            value={selOption}
            onChange={(e) => setSelOption(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          />
          {advanced && (
            <>
              <LinkedField linkedLabel="Linked field" />
              <LinkedField linkedLabel="Default field" />
              <br />
            </>
          )}
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

export default CustomLetterMarketing
