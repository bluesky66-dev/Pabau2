import React, { FC } from 'react'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import BasicElement from './BasicElement'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

interface P {
  hideSideBar?: () => void
}

const VaccineScheduler: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={vaccineSchedulerIcon}
        bgcolor="#FAAD14"
        title="Vaccine scheduler"
        desc="Description"
      />
      <MedicalFormBottom saveFunc={saveFunc} needLeft={false} />
    </BasicElement>
  )
}

export default VaccineScheduler
