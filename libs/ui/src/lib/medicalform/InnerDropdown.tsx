import React, { FC } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
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
const InnerDropdown: FC<P> = ({
  required,
  activate,
  handlingSelectForm,
  formData,
}) => {
  // const dropdownOptions = [
  //   { id: 1, label: 'Option 1' },
  //   { id: 2, label: 'Option 2' },
  //   { id: 3, label: 'Option 3' },
  //   { id: 4, label: 'Option 4' },
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
        iconUrl={dropdownIcon}
        bgcolor="#65CD98"
        title="Dropdown"
      />
      {formData.arr1.length > 0 && (
        <InnerMedicalFormBody>
          <InnerRadio title={formData.txt1} options={formData.arr1} />
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerDropdown
