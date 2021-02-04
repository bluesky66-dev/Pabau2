import React, { FC } from 'react'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'
import Options from './Options'

const SingleChoice: FC = () => {
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={singleChoiceIcon}
        bgcolor="#65CD98"
        title="Single choice"
        desc="Ask for a single choice"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <Options />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom needLeft={true} />
    </BasicElement>
  )
}

export default SingleChoice
