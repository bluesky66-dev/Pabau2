import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useState } from 'react'
import shortAnswerIcon from '../../assets/images/medicalform_shortanswer.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const typeOptions = [
  { label: 'Text', value: 'text' },
  { label: 'Email', value: 'email' },
  { label: 'Number', value: 'number' },
  { label: 'Date', value: 'date' },
]

const ShortAnswer: FC = () => {
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
          iconUrl={shortAnswerIcon}
          bgcolor="#6383F1"
          title="Short answer"
          desc="Ask a question with a short answer"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
          <p style={{ marginTop: '20px' }}>Input type</p>
          <Radio.Group
            className={styles.aaaaa}
            options={typeOptions}
            value={selOption}
            onChange={(e) => setSelOption(e.target.value)}
            optionType="button"
            buttonStyle="solid"
          />
          {advanced && (
            <>
              <p style={{ marginTop: '20px' }}>Linked field</p>
              <Button
                type={ButtonTypes.default}
                icon={<PlusOutlined />}
                size="small"
              >
                Add
              </Button>
              <p style={{ marginTop: '20px' }}>Default field</p>
              <Button
                type={ButtonTypes.default}
                icon={<PlusOutlined />}
                size="small"
              >
                Add
              </Button>
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

export default ShortAnswer
