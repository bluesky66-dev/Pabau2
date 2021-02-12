import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import CustomElement from './CustomElement'
import ElementAdvanced from './ElementAdvanced'
import ElementTypeOption from './ElementTypeOption'

const CustomAuthorizationCode: FC = () => {
  return (
    <CustomElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={dobIcon}
        bgcolor="#20BAB1"
        title="Authorization code"
        desc="Cliens can opt in to marketing"
      />
      <MedicalFormBody>
        {/* <ElementQuestion desc="Enter your question" title="Question" /> */}
        <ElementTypeOption title="Input type" />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </CustomElement>
  )
}

export default CustomAuthorizationCode
