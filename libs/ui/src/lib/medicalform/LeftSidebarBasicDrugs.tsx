import React, { FC } from 'react'
import drugsIcon from '../../assets/images/medicalform_drugs.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicDrugs: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={drugsIcon}
        bgcolor="#FAAD14"
        title="Drugs"
        desc="Description"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicDrugs
