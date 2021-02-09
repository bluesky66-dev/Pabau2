import React, { FC } from 'react'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicTextBlock: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={textBlockIcon}
        bgcolor="#6383F1"
        title="Text block"
        desc="Add a paragraph without a question"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicTextBlock
