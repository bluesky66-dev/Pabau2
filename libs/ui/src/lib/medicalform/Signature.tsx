import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'

interface P {
  hideSideBar?: () => void
}

const Signature: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }
  return (
    <BasicElement>
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
      <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
    </BasicElement>
  )
}

export default Signature
