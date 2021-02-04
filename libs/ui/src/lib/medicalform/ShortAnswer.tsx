import React, { FC } from 'react'
import shortAnswerIcon from '../../assets/images/medicalform_shortanswer.svg'
import BaiscElement from './BaiscElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import ElementTypeOption from './ElementTypeOption'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const ShortAnswer: FC = () => {
  return (
    <BaiscElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={shortAnswerIcon}
        bgcolor="#6383F1"
        title="Short answer"
        desc="Ask a question with a short answer"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <ElementTypeOption title="Input type" />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BaiscElement>
  )
}

export default ShortAnswer
