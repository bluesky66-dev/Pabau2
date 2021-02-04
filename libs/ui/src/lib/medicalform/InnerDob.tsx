import React, { FC } from 'react'
import dobIcon from '../../assets/images/medicalform_dob.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerDob: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle iconUrl={dobIcon} bgcolor="#20BAB1" title="DOB" />
      <InnerMedicalFormBody>
        <p>Please enter your DOB</p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerDob
