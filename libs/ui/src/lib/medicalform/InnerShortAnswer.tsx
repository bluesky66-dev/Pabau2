import React, { FC } from 'react'
import shortAnswerIcon from '../../assets/images/medicalform_shortanswer.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
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
const InnerShortAnswer: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="ShortAnswer"
      handlingSelectComponent={handlingSelectComponent}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={shortAnswerIcon}
        bgcolor="#6383F1"
        title="Short answer"
      />
      <InnerMedicalFormBody>
        <p>Welcome to Day Spa Wellington</p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerShortAnswer
