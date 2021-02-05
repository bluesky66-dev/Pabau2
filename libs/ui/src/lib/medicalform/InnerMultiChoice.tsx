import React, { FC } from 'react'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import InnerCheckbox from './InnerCheckbox'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerMultiChoice: FC<P> = ({ required }) => {
  const multiChoiceOptions = [
    { id: 1, label: 'Option 1' },
    { id: 2, label: 'Option 2' },
    { id: 3, label: 'Option 3' },
    { id: 4, label: 'Option 4' },
  ]
  return (
    <InnerElement>
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={multipleChoiceIcon}
        bgcolor="#65CD98"
        title="Multiple choices"
      />
      <InnerMedicalFormBody>
        <InnerCheckbox title="Some question" options={multiChoiceOptions} />
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerMultiChoice
