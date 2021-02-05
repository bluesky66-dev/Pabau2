import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import travelDesctinationIcon from '../../assets/images/medicalform_traveldestination.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'

interface P {
  hideSideBar?: () => void
}

const TravelDesctination: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={travelDesctinationIcon}
        bgcolor="#FAAD14"
        title="Travel destination"
        desc="Description"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
    </BasicElement>
  )
}

export default TravelDesctination
