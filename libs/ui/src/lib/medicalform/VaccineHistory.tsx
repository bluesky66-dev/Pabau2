import React, { FC } from 'react'
import vaccineHistoryIcon from '../../assets/images/medicalform_vaccinehistory.svg'
import BasicElement from './BasicElement'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const VaccineHistory: FC<P> = ({ handleSave, handleDelete }) => {
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
        iconUrl={vaccineHistoryIcon}
        bgcolor="#FAAD14"
        title="Vaccine history"
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

export default VaccineHistory
