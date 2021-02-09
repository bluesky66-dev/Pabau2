import React, { FC } from 'react'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
  activate?: boolean
  handleId?: number
  handlingSelectComponent?: (
    isActive?: boolean,
    handleId?: number,
    componentName?: string
  ) => void
}
const InnerSignature: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="Signature"
      handlingSelectComponent={handlingSelectComponent}
    >
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
