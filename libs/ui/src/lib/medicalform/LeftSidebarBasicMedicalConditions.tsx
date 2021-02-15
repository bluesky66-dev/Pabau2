import React, { FC } from 'react'
import conditionsIcon from '../../assets/images/medicalform_conditions.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicMedicalConditions: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={conditionsIcon}
        bgcolor="#FAAD14"
        title="Medical Conditions"
        desc="Description"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicMedicalConditions
