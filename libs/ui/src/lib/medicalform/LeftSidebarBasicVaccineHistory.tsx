import React, { FC } from 'react'
import vaccineHistoryIcon from '../../assets/images/medicalform_vaccinehistory.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicVaccineHistory: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={vaccineHistoryIcon}
        bgcolor="#FAAD14"
        title="Vaccine history"
        desc="Description"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicVaccineHistory
