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

const MedicalFormPreviewOldImage: FC<P> = ({ formValues }) => {
  // const options = Object.entries(formValues).map{(key, value) => (imgSrc = value.value)}
  if (typeof formValues === 'object') {
    console.log(formValues)
  }
  return (
    <div className={previewStyles.medicalFormBody}>
      <input
        type="file"
        className="form-control image medical-form-upload-image"
        value=""
      />
      <div className="medical-form-label medical-form-images-label">
        Accepted file types: jpg, gif, png.
      </div>
      <Image
        width={300}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    </div>
  )
}

export default MedicalFormPreviewOldImage
