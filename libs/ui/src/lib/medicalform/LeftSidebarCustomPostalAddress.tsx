import React, { FC } from 'react'
import customPostalAddressIcon from '../../assets/images/medicalform_custom_postal_address.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomPostalAddress: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customPostalAddressIcon}
        bgcolor="#88C65B"
        title="Postal address"
        desc="Confirm a clients postal address"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomPostalAddress
