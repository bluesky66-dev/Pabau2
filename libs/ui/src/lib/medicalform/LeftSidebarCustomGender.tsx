import React, { FC } from 'react'
import customGenderIcon from '../../assets/images/medicalform_custom_gender.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomGender: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customGenderIcon}
        bgcolor="#88C65B"
        title="Gender"
        desc="Confirm a clients gender"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomGender
