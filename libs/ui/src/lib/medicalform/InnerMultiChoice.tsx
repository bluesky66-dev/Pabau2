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
  activate?: boolean
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
  formData?: any
}
const InnerMultiChoice: FC<P> = ({
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
        iconUrl={multipleChoiceIcon}
        bgcolor="#65CD98"
        title="Multiple choices"
      />
      {formData.arr1.length > 0 && (
        <InnerMedicalFormBody>
          <InnerCheckbox title={formData.txt1} options={formData.arr1} />
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerMultiChoice
