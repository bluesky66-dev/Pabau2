import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import customCompanyIcon from '../../assets/images/medicalform_custom_company.svg'
import CustomElement from './CustomElement'
import ElementAdvanced from './ElementAdvanced'
import ElementTypeOption from './ElementTypeOption'

const CustomCompany: FC = () => {
  return (
    <CustomElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={customCompanyIcon}
        bgcolor="#5991D2"
        title="Company"
        desc="Confirm a clients company"
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

export default CustomCompany
