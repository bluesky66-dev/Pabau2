import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomMembershipNumber: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={dobIcon}
        bgcolor="#20BAB1"
        title="Membership number"
        desc="Clients can opt in to marketing"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomMembershipNumber
