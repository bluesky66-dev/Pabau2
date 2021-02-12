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
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
  formData?: any
}
const InnerShortAnswer: FC<P> = ({
  required,
  activate,
  handlingSelectForm,
  formData,
}) => {
  return (
    <InnerElement
      handleId={formData.id}
      activate={activate}
      handlingSelectForm={handlingSelectForm}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={shortAnswerIcon}
        bgcolor="#6383F1"
        title="Short answer"
      />
      {formData.txt1 !== '' && (
        <InnerMedicalFormBody>
          <p>{formData.txt1}</p>
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerShortAnswer
