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
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
  formData?: any
}
const InnerSingleChoice: FC<P> = ({
  required,
  activate,
  handlingSelectForm,
  formData,
}) => {
  // const singleChoiceOptions = [
  //   { id: 1, label: 'Dry' },
  //   { id: 2, label: 'Normal' },
  //   { id: 3, label: 'Oily' },
  //   { id: 4, label: 'Combination' },
  // ]
  return (
    <InnerElement
      handleId={formData.id}
      activate={activate}
      handlingSelectForm={handlingSelectForm}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={singleChoiceIcon}
        bgcolor="#65CD98"
        title="Single choice"
      />
      {formData.arr1.length > 0 && (
        <InnerMedicalFormBody>
          <InnerRadio title={formData.txt1} options={formData.arr1} />
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerSingleChoice
