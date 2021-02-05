import React, { FC } from 'react'
import vaccineHistoryIcon from '../../assets/images/medicalform_vaccinehistory.svg'
import BasicElement from './BasicElement'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

interface P {
  hideSideBar?: () => void
}

const VaccineHistory: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
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
      <MedicalFormBottom saveFunc={saveFunc} needLeft={false} />
    </BasicElement>
  )
}

export default VaccineHistory
