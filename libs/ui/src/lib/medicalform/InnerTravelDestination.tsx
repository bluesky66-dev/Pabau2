import React, { FC } from 'react'
import travelDesctinationIcon from '../../assets/images/medicalform_traveldestination.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerTravelDestination: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={travelDesctinationIcon}
        bgcolor="#FAAD14"
        title="Travel destination"
      />
    </InnerElement>
  )
}

export default InnerTravelDestination
