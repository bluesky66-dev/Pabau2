import React, { FC } from 'react'
import customCompanyIcon from '../../assets/images/medicalform_custom_company.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomCompany: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customCompanyIcon}
        bgcolor="#5991D2"
        title="Company"
        desc="Confirm a clients company"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomCompany
