import { PlusOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input, Radio } from 'antd'
import React, { FC, useState } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import styles from './MedicalForm.module.less'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormTitle from './MedicalFormTitle'

const Dropdown: FC = () => {
  const [optionVal, setOptionVal] = useState(1)
  const radioStyle = {
    display: 'block',
    height: '30px',
    lineHeight: '30px',
    color: '#9292a3',
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
          iconUrl={dropdownIcon}
          bgcolor="#65CD98"
          title="Dropdown"
          desc="A list of options that can be ticked"
        />
      </div>
      <div className={styles.formItem}>
        <div className={`${styles.formQuestion} ${styles.formCommon}`}>
          <p style={{ marginTop: '5px' }}>Question</p>
          <Input placeholder="Enter your question" />
          <p style={{ marginTop: '20px' }}>Options</p>
          <Radio.Group
            size="small"
            value={optionVal}
            onChange={(e) => setOptionVal(e.target.value)}
          >
            <Radio value={1} style={radioStyle}>
              Option 1
            </Radio>
            <Radio value={2} style={radioStyle}>
              Add option
            </Radio>
          </Radio.Group>
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

export default Dropdown
