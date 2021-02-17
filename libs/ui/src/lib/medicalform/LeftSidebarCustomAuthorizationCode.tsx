import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomAuthorizationCode: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={dobIcon}
        bgcolor="#20BAB1"
        title="Authorisation code"
        desc="Clients can opt in to marketing"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomAuthorizationCode
