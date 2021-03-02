import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import conditionsIcon from '../../assets/images/medicalform_conditions.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'

interface P {
  hideSideBar?: () => void
}

const Conditions: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }

  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={conditionsIcon}
        bgcolor="#FAAD14"
        title="Medical Conditions"
        desc="Description"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
    </BasicElement>
  )
}

export default Conditions
