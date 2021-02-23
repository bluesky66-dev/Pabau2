import { Checkbox } from 'antd'
import React, { FC } from 'react'
import previewStyles from './MedicalFormPreview.module.less'

interface CheckBoxOption {
  value: string
  baseline: boolean
  critical: boolean
  desc?: string
  trigger?: number
}

interface P {
  formValues: CheckBoxOption[]
}

const MedicalFormPreviewOldCheckBox: FC<P> = ({ formValues }) => {
  const options = Object.entries(formValues).map(([key, value]) => ({
    value: value.value,
    label: value.value,
  }))
  return (
    <div className={previewStyles.medicalFormBody}>
      <Checkbox.Group options={options} />
    </div>
  )
}

export default MedicalFormPreviewOldCheckBox
