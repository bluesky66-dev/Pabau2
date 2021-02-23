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

const MedicalFormPreviewOldSignature: FC<P> = ({ formValues }) => {
  console.log(formValues)
  return (
    <div className={previewStyles.medicalFormBody}>
      <canvas style={{ width: '100%', height: '200px' }}></canvas>
    </div>
  )
}

export default MedicalFormPreviewOldSignature
