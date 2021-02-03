import React, { FC } from 'react'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerTextBlock: FC<P> = ({ required }) => {
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={textBlockIcon}
        bgcolor="#6383F1"
        title="Text block"
      />
      <InnerMedicalFormBody>
        <p>
          At Day Space Wellington we believe you deserve to make the most of
          your me-time. To say no to stress and push pause on life. To relax,
          unwind, recharge and simply, live better.
        </p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerTextBlock
