import React, { FC } from 'react'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import BaiscElement from './BaiscElement'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const VaccineScheduler: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={vaccineSchedulerIcon}
        bgcolor="#FAAD14"
        title="Vaccine scheduler"
        desc="Description"
      />
      <MedicalFormBottom needLeft={false} />
    </BaiscElement>
  )
}

export default VaccineScheduler
