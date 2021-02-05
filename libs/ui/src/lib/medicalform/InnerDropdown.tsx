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
}
const InnerDropdown: FC<P> = ({ required }) => {
  const dropdownOptions = [
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
        iconUrl={dropdownIcon}
        bgcolor="#65CD98"
        title="Dropdown"
      />
      <InnerMedicalFormBody>
        <InnerRadio title="Some question" options={dropdownOptions} />
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerDropdown
