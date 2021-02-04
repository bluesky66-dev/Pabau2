import React, { FC } from 'react'
import travelDesctinationIcon from '../../assets/images/medicalform_traveldestination.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const TravelDesctination: FC = () => {
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
      <MedicalFormBottom needLeft={true} />
    </BasicElement>
  )
}

export default TravelDesctination
