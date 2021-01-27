import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input } from 'antd'
import React, { FC, useState } from 'react'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const LongAnswer: FC = () => {
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
          iconUrl={longAnswerIcon}
          bgcolor="#6383F1"
          title="Long answer"
          desc="Ask a question with a long answer             "
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
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

export default LongAnswer
