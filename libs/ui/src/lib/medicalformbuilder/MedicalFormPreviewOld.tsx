import { Button, ButtonTypes } from '@pabau/ui'
import { Input } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormPreviewOldResult from './MedicalFormPreviewOldResult'
const { TextArea } = Input

const MedicalFormPreviewOld: FC = () => {
  const [formData, setFormData] = useState('')
  const [formData1, setFormData1] = useState('')
  const handleChange = (e) => {
    setFormData(e.target.value)
  }

  const handleChange1 = () => {
    setFormData1(formData)
  }

  return (
    <div className={styles.MedicalFormPreviewOldPanel}>
      <TextArea rows={10} onChange={handleChange} />
      <Button
        type={ButtonTypes.primary}
        className={styles.formPreviewButton}
        onClick={handleChange1}
      >
        Preview Form
      </Button>
      <MedicalFormPreviewOldResult formData={formData1} />
    </div>
  )
}

export default MedicalFormPreviewOld
