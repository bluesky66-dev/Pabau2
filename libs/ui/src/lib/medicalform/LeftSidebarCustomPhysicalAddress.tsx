import React, { FC } from 'react'
import customPhyAddressIcon from '../../assets/images/medicalform_custom_physical_address.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomPhysicalAddress: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customPhyAddressIcon}
        bgcolor="#88C65B"
        title="Physical address"
        desc="Confirm a clients physical address"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomPhysicalAddress
