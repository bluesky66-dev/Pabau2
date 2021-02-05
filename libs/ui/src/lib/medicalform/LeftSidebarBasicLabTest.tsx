import React, { FC } from 'react'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicLabTest: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={labTestIcon}
        bgcolor="#FAAD14"
        title="Lab tests"
        desc="Description"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicLabTest
