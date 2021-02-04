import React, { FC } from 'react'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

const LongAnswer: FC = () => {
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={longAnswerIcon}
        bgcolor="#6383F1"
        title="Long answer"
        desc="Ask a question with a long answer"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BasicElement>
  )
}

export default LongAnswer
