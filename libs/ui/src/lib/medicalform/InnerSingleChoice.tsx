import React, { FC } from 'react'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'
import InnerRadio from './InnerRadio'

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
const InnerSingleChoice: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  const singleChoiceOptions = [
    { id: 1, label: 'Dry' },
    { id: 2, label: 'Normal' },
    { id: 3, label: 'Oily' },
    { id: 4, label: 'Combination' },
  ]
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="SingleChoice"
      handlingSelectComponent={handlingSelectComponent}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={singleChoiceIcon}
        bgcolor="#65CD98"
        title="Single choice"
      />
      <InnerMedicalFormBody>
        <InnerRadio
          title="Do you have concerns about any of following?"
          options={singleChoiceOptions}
        />
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerSingleChoice
