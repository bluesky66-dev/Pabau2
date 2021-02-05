import React, { FC } from 'react'
import customGenderIcon from '../../assets/images/medicalform_custom_gender.svg'
import CustomElement from './CustomElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import ElementTypeOption from './ElementTypeOption'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const CustomGender: FC = () => {
  return (
    <CustomElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={customGenderIcon}
        bgcolor="#88C65B"
        title="Gender"
        desc="Confirm a clients gender"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <ElementTypeOption title="Input type" />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </CustomElement>
  )
}

export default CustomGender