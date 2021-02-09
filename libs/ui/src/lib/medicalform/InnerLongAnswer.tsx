import React, { FC } from 'react'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
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
const InnerLongAnswer: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="LongAnswer"
      handlingSelectComponent={handlingSelectComponent}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={longAnswerIcon}
        bgcolor="#6383F1"
        title="Long answer"
      />
      <InnerMedicalFormBody>
        <p>Welcome to Day Spa Wellington</p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerLongAnswer
