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
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
  formData?: any
}
const InnerLongAnswer: FC<P> = ({
  required,
  activate,
  handlingSelectForm,
  formData,
}) => {
  return (
    <InnerElement
      handleId={formData.id}
      activate={activate}
      componentName="LongAnswer"
      handlingSelectForm={handlingSelectForm}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={longAnswerIcon}
        bgcolor="#6383F1"
        title="Long answer"
      />
      {formData.txt1 !== '' && (
        <InnerMedicalFormBody>
          <p>{formData.txt1}</p>
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerLongAnswer
