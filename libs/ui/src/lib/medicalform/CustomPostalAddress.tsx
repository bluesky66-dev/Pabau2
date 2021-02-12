import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import customPostalAddressIcon from '../../assets/images/medicalform_custom_postal_address.svg'
import CustomElement from './CustomElement'
import ElementAdvanced from './ElementAdvanced'
import ElementTypeOption from './ElementTypeOption'

const CustomPostalAddress: FC = () => {
  return (
    <CustomElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={customPostalAddressIcon}
        bgcolor="#88C65B"
        title="Postal address"
        desc="Confirm a clients postal address"
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

export default CustomPostalAddress
