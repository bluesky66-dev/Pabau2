import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomSmsTextMarketing: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={dobIcon}
        bgcolor="#20BAB1"
        title="Accepts SMS/Text marketing"
        desc="Clients can opt in to marketing"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomSmsTextMarketing
