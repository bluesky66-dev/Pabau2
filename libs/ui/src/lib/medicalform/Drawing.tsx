import React, { FC } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import BaiscElement from './BaiscElement'
import ElementQuestion from './ElementQuestion'
import FileUpload from './FileUpload'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const Drawing: FC = () => {
  return (
    <BaiscElement>
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
      <MedicalFormBottom needLeft={true} />
    </BaiscElement>
  )
}

export default Drawing
