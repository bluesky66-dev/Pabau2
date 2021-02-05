import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomPhoneCall: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={dobIcon}
        bgcolor="#20BAB1"
        title="Phone calls"
        desc="Clients can opt in to marketing"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomPhoneCall
