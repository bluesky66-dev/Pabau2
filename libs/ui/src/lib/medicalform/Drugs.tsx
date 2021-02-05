import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import drugsIcon from '../../assets/images/medicalform_drugs.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'

interface P {
  hideSideBar?: () => void
}

const Drugs: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={drugsIcon}
        bgcolor="#FAAD14"
        title="Drugs"
        desc="Description"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
    </BasicElement>
  )
}

export default Drugs
