import React, { FC } from 'react'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import BasicElement from './BasicElement'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const VaccineScheduler: FC<P> = ({ handleSave, handleDelete }) => {
  const saveFunc = () => {
    handleSave?.()
  }

  const deleteFunc = () => {
    handleDelete?.()
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
      <MedicalFormBottom
        saveFunc={saveFunc}
        deleteFunc={deleteFunc}
        needLeft={false}
      />
    </BasicElement>
  )
}

export default VaccineScheduler
