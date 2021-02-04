import React, { FC } from 'react'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import BaiscElement from './BaiscElement'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const Signature: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={signatureIcon}
        bgcolor="#F78561"
        title="Signature"
        desc="Description"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your title" title="Title" />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BaiscElement>
  )
}

export default Signature
