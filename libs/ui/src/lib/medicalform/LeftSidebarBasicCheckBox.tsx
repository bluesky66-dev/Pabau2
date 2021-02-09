import React, { FC } from 'react'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicCheckBox: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={multipleChoiceIcon}
        bgcolor="#65CD98"
        title="Checkboxes"
        desc="Ask for a several choices"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicCheckBox
