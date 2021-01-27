import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'
import { Button, ButtonTypes } from '@pabau/ui'
import { Input } from 'antd'
import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import styles from './Medicalform.module.less'
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
          <p>Question</p>
          <Input placeholder="Enter your question" />
        </div>
      </div>
      <div className="formBottom formCommon">
        <Button type={ButtonTypes.default} icon={<DeleteOutlined />}>
          Delete
        </Button>
        <Button type={ButtonTypes.primary} icon={<SaveOutlined />}>
          Save component
        </Button>
      </div>
    </div>
  )
}

export default MedicalForm
