import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useState } from 'react'
import shortAnswerIcon from '../../assets/images/medicalform_shortanswer.svg'
import styles from './Medicalform.module.less'
import MedicalformBottom from './MedicalformBottom'
import MedicalformTitle from './MedicalformTitle'

const typeOptions = [
  { label: 'Text', value: 'text' },
  { label: 'Email', value: 'email' },
  { label: 'Number', value: 'number' },
  { label: 'Date', value: 'date' },
]

export const ShortAnswer: FC = (): JSX.Element => {
  const [selOption, setSelOption] = useState('text')
  const [advanced, setAdvanced] = useState(false)

  return (
    <div className={styles.headingForm}>
      <div className="formItem">
        <div className="formCaption formCommon">
          <span>component settings</span>
        </div>
      </div>
      <div className="formItem">
        <MedicalformTitle
          iconUrl={shortAnswerIcon}
          bgcolor="#6383F1"
          title="Short answer"
          desc="Ask a question with a short answer"
        />
      </div>
      <div className="formItem">
        <div className="formQuestion formCommon">
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
            onClick={(e) => setAdvanced(!advanced)}
            size="small"
          >
            {!advanced && `Show advanced settings`}
            {advanced && `Hide advanced settings`}
          </Button>
        </div>
      </div>
      <div className="formItem" style={{ borderBottom: 'none' }}>
        <MedicalformBottom needLeft={true} />
      </div>
    </div>
  )
}

export default ShortAnswer
