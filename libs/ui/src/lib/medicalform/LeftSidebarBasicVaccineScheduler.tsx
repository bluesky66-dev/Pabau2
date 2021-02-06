import React, { FC } from 'react'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicVaccineScheduler: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={vaccineSchedulerIcon}
        bgcolor="#FAAD14"
        title="Vaccine scheduler"
        desc="Description"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicVaccineScheduler
