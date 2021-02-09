import React, { FC } from 'react'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicSignature: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={signatureIcon}
        bgcolor="#F78561"
        title="Signature"
        desc="Draw on an image or a photo"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicSignature
