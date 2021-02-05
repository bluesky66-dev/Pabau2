import React, { FC } from 'react'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicLongAnswer: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={longAnswerIcon}
        bgcolor="#6383F1"
        title="Long answer"
        desc="Ask a question with a long answer"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicLongAnswer
