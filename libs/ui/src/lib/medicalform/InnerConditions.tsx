import React, { FC } from 'react'
import conditionsIcon from '../../assets/images/medicalform_conditions.svg'
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
const InnerConditions: FC<P> = ({
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
        iconUrl={conditionsIcon}
        bgcolor="#FAAD14"
        title="Medical Conditions"
      />
      {formData.txt1 !== '' && (
        <InnerMedicalFormBody>
          <p>{formData.txt1}</p>
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerConditions
