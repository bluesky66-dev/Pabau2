import { Image } from 'antd'
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

const MedicalFormPreviewOldStaticImage: FC<P> = ({ formValues }) => {
  if (typeof formValues === 'object') {
    console.log(formValues)
  }
  return (
    <div className={previewStyles.medicalFormBody}>
      <Image
        width={300}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </div>
  )
}

export default MedicalFormPreviewOldStaticImage
