import React, { FC } from 'react'
import customTelePhoneIcon from '../../assets/images/medicalform_custom_tele_phone.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomTelephoneNumber: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customTelePhoneIcon}
        bgcolor="#88C65B"
        title="Telephone number"
        desc="Confirm a clients telephone number"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomTelephoneNumber
