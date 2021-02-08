import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'
import FileUpload from './FileUpload'

interface P {
  hideSideBar?: () => void
}

const Drawing: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }

  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={drawingIcon}
        bgcolor="#F78561"
        title="Drawing"
        desc="Draw on an image or a photo"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your title" title="Title" />
        <FileUpload
          title="Image"
          desc="Click or drag file to this area to upload"
        />
      </MedicalFormBody>
      <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
    </BasicElement>
  )
}

export default Drawing
