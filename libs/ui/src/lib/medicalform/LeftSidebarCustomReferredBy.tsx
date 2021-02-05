import React, { FC } from 'react'
import customReferIcon from '../../assets/images/medicalform_custom_refer.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarCustomReferredBy: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={customReferIcon}
        bgcolor="#88C65B"
        title="Referred by"
        desc="Where did they hear of you"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarCustomReferredBy
