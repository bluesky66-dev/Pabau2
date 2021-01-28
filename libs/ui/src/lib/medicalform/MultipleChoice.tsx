import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Checkbox, Input } from 'antd'
import React, { FC } from 'react'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const MultipleChoice: FC = () => {
  const checkboxStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
    marginLeft: '0px',
  }
  return (
    <div className={styles.mainBody}>
      <div className={styles.formItem}>
        <div className={`${styles.formCaption} ${styles.formCommon}`}>
          <span>component settings</span>
        </div>
      </div>
      <div className={styles.formItem}>
        <MedicalFormTitle
          iconUrl={multipleChoiceIcon}
          bgcolor="#65CD98"
          title="Multiple choices"
          desc="Ask for a several choices"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
          <p style={{ marginTop: '20px' }}>Options</p>
          <Checkbox value="C" style={checkboxStyle}>
            Option 1
          </Checkbox>
          <Checkbox value="C" style={checkboxStyle}>
            Add option
          </Checkbox>
          <p style={{ marginTop: '20px' }}>Linked field</p>
          <Button
            type={ButtonTypes.default}
            icon={<PlusOutlined />}
            size="small"
          >
            Add
          </Button>
        </div>
      </div>
      <div className={styles.formItem} style={{ borderBottom: 'none' }}>
        <MedicalFormBottom needLeft={true} />
      </div>
    </div>
  )
}

export default MultipleChoice
