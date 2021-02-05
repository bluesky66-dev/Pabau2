import React, { FC } from 'react'
import LeftSidebarCustomAuthorizationCode from '../medicalform/LeftSidebarCustomAuthorizationCode'
import LeftSidebarCustomCompany from '../medicalform/LeftSidebarCustomCompany'
import LeftSidebarCustomDob from '../medicalform/LeftSidebarCustomDob'
import LeftSidebarCustomEmailMarketing from '../medicalform/LeftSidebarCustomEmailMarketing'
import LeftSidebarCustomGender from '../medicalform/LeftSidebarCustomGender'
import LeftSidebarCustomLetterMarketing from '../medicalform/LeftSidebarCustomLetterMarketing'
import LeftSidebarCustomMembershipNumber from '../medicalform/LeftSidebarCustomMembershipNumber'
import LeftSidebarCustomPhoneCall from '../medicalform/LeftSidebarCustomPhoneCall'
import LeftSidebarCustomPhysicalAddress from '../medicalform/LeftSidebarCustomPhysicalAddress'
import LeftSidebarCustomPostalAddress from '../medicalform/LeftSidebarCustomPostalAddress'
import LeftSidebarCustomReferredBy from '../medicalform/LeftSidebarCustomReferredBy'
import LeftSidebarCustomSmsTextMarketing from '../medicalform/LeftSidebarCustomSmsTextMarketing'
import LeftSidebarCustomTelephoneNumber from '../medicalform/LeftSidebarCustomTelephoneNumber'

const MedicalFormLeftSidebarCustomPanels: FC = () => {
  return (
    <div>
      <LeftSidebarCustomEmailMarketing />
      <LeftSidebarCustomSmsTextMarketing />
      <LeftSidebarCustomPhoneCall />
      <LeftSidebarCustomLetterMarketing />
      <LeftSidebarCustomMembershipNumber />
      <LeftSidebarCustomAuthorizationCode />
      <LeftSidebarCustomCompany />
      <LeftSidebarCustomDob />
      <LeftSidebarCustomGender />
      <LeftSidebarCustomPhysicalAddress />
      <LeftSidebarCustomPostalAddress />
      <LeftSidebarCustomReferredBy />
      <LeftSidebarCustomTelephoneNumber />
    </div>
  )
}

export default MedicalFormLeftSidebarCustomPanels
