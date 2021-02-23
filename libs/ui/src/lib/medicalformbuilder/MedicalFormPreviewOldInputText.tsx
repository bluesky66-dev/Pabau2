import { DatePicker, Input, InputNumber } from 'antd'
import React, { FC } from 'react'
import previewStyles from './MedicalFormPreview.module.less'

const { TextArea } = Input
interface P {
  inputType: string
  defaultValue: string
}
const MedicalFormPreviewOldInputText: FC<P> = ({ inputType, defaultValue }) => {
  return (
    <div className={previewStyles.medicalFormBody}>
      {inputType === 'date' && <DatePicker />}
      {(inputType === 'text' || inputType === 'email') && <Input />}
      {inputType === 'number' && <InputNumber />}
      {inputType === 'textarea' && <TextArea rows={4} />}
    </div>
  )
}

export default MedicalFormPreviewOldInputText
