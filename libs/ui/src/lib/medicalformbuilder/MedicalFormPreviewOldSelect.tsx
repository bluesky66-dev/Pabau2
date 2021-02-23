import { Select } from 'antd'
import React, { FC } from 'react'
import previewStyles from './MedicalFormPreview.module.less'

const { Option } = Select
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

const MedicalFormPreviewOldSelect: FC<P> = ({ formValues }) => {
  const options = Object.entries(formValues).map(([key, value]) => ({
    value: value.value,
    label: value.value,
  }))
  return (
    <div className={previewStyles.medicalFormBody}>
      <Select size="small" style={{ width: '100%' }}>
        <Option value="">Select</Option>
        {options.map((option, index) => (
          <Option key={index} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
    </div>
  )
}

export default MedicalFormPreviewOldSelect
