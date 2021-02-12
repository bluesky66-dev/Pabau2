import React, { FC } from 'react'
import genderIcon from '../../assets/images/medicalform_singlechoice.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'
import InnerRadio from './InnerRadio'

interface P {
  required?: boolean
}
const InnerGender: FC<P> = ({ required }) => {
  const genderOptions = [
    { id: 1, name: 'Male' },
    { id: 2, name: 'Female' },
  ]
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={genderIcon}
        bgcolor="#65CD98"
        title="Gender"
      />
      <InnerMedicalFormBody>
        <InnerRadio title="What is your gender?" options={genderOptions} />
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerGender
