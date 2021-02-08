import React, { FC } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicDropDown: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={dropdownIcon}
        bgcolor="#65CD98"
        title="Dropdown"
        desc="A list of options that can be ticked"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicDropDown
