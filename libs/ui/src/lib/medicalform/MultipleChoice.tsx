import React, { FC } from 'react'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import BaiscElement from './BaiscElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'
import MultiOptions from './MultiOptions'

const MultipleChoice: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={multipleChoiceIcon}
        bgcolor="#65CD98"
        title="Multiple choices"
        desc="Ask for a several choices"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <MultiOptions />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BaiscElement>
  )
}

export default MultipleChoice
