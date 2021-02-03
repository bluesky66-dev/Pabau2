import React, { FC } from 'react'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerSignature: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={signatureIcon}
        bgcolor="#F78561"
        title="Signature"
      />
    </InnerElement>
  )
}

export default InnerSignature
