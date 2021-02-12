import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import customPhyAddressIcon from '../../assets/images/medicalform_custom_physical_address.svg'
import CustomElement from './CustomElement'
import ElementAdvanced from './ElementAdvanced'
import ElementTypeOption from './ElementTypeOption'

const CustomPhysicalAddress: FC = () => {
  return (
    <CustomElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={customPhyAddressIcon}
        bgcolor="#88C65B"
        title="Physical address"
        desc="Confirm a clients physical address"
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

export default CustomPhysicalAddress
