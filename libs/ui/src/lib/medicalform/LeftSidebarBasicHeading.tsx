import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicHeading: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={headingIcon}
        bgcolor="#6383F1"
        title="Heading"
        desc="Create a heading for a section"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicHeading
