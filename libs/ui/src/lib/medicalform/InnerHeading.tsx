import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerHeading: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={headingIcon}
        bgcolor="#6383F1"
        title="Heading"
      />
      <InnerMedicalFormBody>
        <p>Welcome to Day Spa Wellington</p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerHeading
