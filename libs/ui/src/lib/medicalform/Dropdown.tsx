import React, { FC } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import BaiscElement from './BaiscElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'
import Options from './Options'

const Dropdown: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={dropdownIcon}
        bgcolor="#65CD98"
        title="Dropdown"
        desc="A list of options that can be ticked"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <Options />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BaiscElement>
  )
}

export default Dropdown
