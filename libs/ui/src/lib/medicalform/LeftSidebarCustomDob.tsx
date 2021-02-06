import React, { FC } from 'react'
import customDobIcon from '../../assets/images/medicalform_custom_dob.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomDob: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customDobIcon}
        bgcolor="#88C65B"
        title="Date of birth"
        desc="Confirm a clients birth date"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomDob
