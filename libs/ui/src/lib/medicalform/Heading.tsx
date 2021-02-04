import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import BaiscElement from './BaiscElement'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const Heading: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={headingIcon}
        bgcolor="#6383F1"
        title="Heading"
        desc="Create a heading for a section"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={false} />
    </BaiscElement>
  )
}

export default Heading
