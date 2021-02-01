import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useState } from 'react'
import customDobIcon from '../../assets/images/medicalform_custom_dob.svg'
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

const CustomDob: FC = () => {
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
          iconUrl={customDobIcon}
          bgcolor="#88C65B"
          title="Date of birth"
          desc="Confirm a clients birth date"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
          <p style={{ marginTop: '20px' }}>Input type</p>
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

export default CustomDob
