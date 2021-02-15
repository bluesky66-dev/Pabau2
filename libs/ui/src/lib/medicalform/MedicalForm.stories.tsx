import React from 'react'
import InnerElement from './InnerElement'
import LeftSidebarElement from './LeftSidebarElement'
import MedicalForm from './MedicalForm'
import SettingElement from './SettingElement'

export default {
  component: MedicalForm,
  title: 'UI/Medical Form',
}

const LeftSidebarBasicHeadingStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicHeading = LeftSidebarBasicHeadingStory.bind({})
LeftSidebarBasicHeading.args = {
  type: 'basic',
  component: 'basic_heading',
}

const LeftSidebarBasicShortAnswerStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicShortAnswer = LeftSidebarBasicShortAnswerStory.bind(
  {}
)
LeftSidebarBasicShortAnswer.args = {
  type: 'basic',
  component: 'basic_shortanswer',
}

export const LeftSidebarBasicLongAnswer = () => (
  <LeftSidebarElement type="basic" component="basic_longanswer" />
)
export const LeftSidebarBasicTextBlock = () => (
  <LeftSidebarElement type="basic" component="basic_textblock" />
)
export const LeftSidebarBasicSingleChoice = () => (
  <LeftSidebarElement type="basic" component="basic_singlechoice" />
)
export const LeftSidebarBasicMultipleChoice = () => (
  <LeftSidebarElement type="basic" component="basic_multiplechoice" />
)
export const LeftSidebarBasicDropDown = () => (
  <LeftSidebarElement type="basic" component="basic_dropdown" />
)
export const LeftSidebarBasicDrawing = () => (
  <LeftSidebarElement type="basic" component="basic_drawing" />
)
export const LeftSidebarBasicSignature = () => (
  <LeftSidebarElement type="basic" component="basic_signature" />
)
export const LeftSidebarBasicConditions = () => (
  <LeftSidebarElement type="basic" component="basic_conditions" />
)
export const LeftSidebarBasicDrugs = () => (
  <LeftSidebarElement type="basic" component="basic_drugs" />
)
export const LeftSidebarBasicTravelDestination = () => (
  <LeftSidebarElement type="basic" component="basic_traveldestination" />
)
export const LeftSidebarBasicVaccineScheduler = () => (
  <LeftSidebarElement type="basic" component="basic_vaccinescheduler" />
)
export const LeftSidebarBasicVaccineHistory = () => (
  <LeftSidebarElement type="basic" component="basic_vaccinehistory" />
)
export const LeftSidebarBasicLabTests = () => (
  <LeftSidebarElement type="basic" component="basic_labtests" />
)

export const LeftSidebarCustomEmailMarketing = () => (
  <LeftSidebarElement type="custom" component="custom_emailmarketing" />
)
export const LeftSidebarCustomSmsMarketing = () => (
  <LeftSidebarElement type="custom" component="custom_smsmarketing" />
)
export const LeftSidebarCustomPhoneCall = () => (
  <LeftSidebarElement type="custom" component="custom_phonecall" />
)
export const LeftSidebarCustomLettermarketing = () => (
  <LeftSidebarElement type="custom" component="custom_lettermarketing" />
)
export const LeftSidebarCustomMembershipNumber = () => (
  <LeftSidebarElement type="custom" component="custom_membershipnumber" />
)
export const LeftSidebarCustomAuthorizationCode = () => (
  <LeftSidebarElement type="custom" component="custom_authorizationcode" />
)
export const LeftSidebarCustomCompany = () => (
  <LeftSidebarElement type="custom" component="custom_company" />
)
export const LeftSidebarCustomDob = () => (
  <LeftSidebarElement type="custom" component="custom_dob" />
)
export const LeftSidebarCustomGender = () => (
  <LeftSidebarElement type="custom" component="custom_gender" />
)
export const LeftSidebarCustomPhysicalAddress = () => (
  <LeftSidebarElement type="custom" component="custom_physicaladdress" />
)
export const LeftSidebarCustomPostalAddress = () => (
  <LeftSidebarElement type="custom" component="custom_postaladdress" />
)
export const LeftSidebarCustomReferredBy = () => (
  <LeftSidebarElement type="custom" component="custom_referredby" />
)
export const LeftSidebarCustomTelephoneNumber = () => (
  <LeftSidebarElement type="custom" component="custom_telephonenumber" />
)

export const InnerBasicHeading = () => (
  <InnerElement type="basic" component="basic_heading" />
)
export const InnerBasicShortAnswer = () => (
  <InnerElement type="basic" component="basic_shortanswer" />
)
export const InnerBasicLongAnswer = () => (
  <InnerElement type="basic" component="basic_longanswer" />
)
export const InnerBasicTextBlock = () => (
  <InnerElement type="basic" component="basic_textblock" />
)
export const InnerBasicSingleChoice = () => (
  <InnerElement type="basic" component="basic_singlechoice" />
)
export const InnerBasicMultipleChoice = () => (
  <InnerElement type="basic" component="basic_multiplechoice" />
)
export const InnerBasicDropDown = () => (
  <InnerElement type="basic" component="basic_dropdown" />
)
export const InnerBasicDrawing = () => (
  <InnerElement type="basic" component="basic_drawing" />
)
export const InnerBasicSignature = () => (
  <InnerElement type="basic" component="basic_signature" />
)
export const InnerBasicConditions = () => (
  <InnerElement type="basic" component="basic_conditions" />
)
export const InnerBasicDrugs = () => (
  <InnerElement type="basic" component="basic_drugs" />
)
export const InnerBasicTravelDestination = () => (
  <InnerElement type="basic" component="basic_traveldestination" />
)
export const InnerBasicVaccineScheduler = () => (
  <InnerElement type="basic" component="basic_vaccinescheduler" />
)
export const InnerBasicVaccineHistory = () => (
  <InnerElement type="basic" component="basic_vaccinehistory" />
)
export const InnerBasicLabTests = () => (
  <InnerElement type="basic" component="basic_labtests" />
)

export const InnerCustomEmailMarketing = () => (
  <InnerElement type="custom" component="custom_emailmarketing" />
)
export const InnerCustomSmsMarketing = () => (
  <InnerElement type="custom" component="custom_smsmarketing" />
)
export const InnerCustomPhoneCall = () => (
  <InnerElement type="custom" component="custom_phonecall" />
)
export const InnerCustomLettermarketing = () => (
  <InnerElement type="custom" component="custom_lettermarketing" />
)
export const InnerCustomMembershipNumber = () => (
  <InnerElement type="custom" component="custom_membershipnumber" />
)
export const InnerCustomAuthorizationCode = () => (
  <InnerElement type="custom" component="custom_authorizationcode" />
)
export const InnerCustomCompany = () => (
  <InnerElement type="custom" component="custom_company" />
)
export const InnerCustomDob = () => (
  <InnerElement type="custom" component="custom_dob" />
)
export const InnerCustomGender = () => (
  <InnerElement type="custom" component="custom_gender" />
)
export const InnerCustomPhysicalAddress = () => (
  <InnerElement type="custom" component="custom_physicaladdress" />
)
export const InnerCustomPostalAddress = () => (
  <InnerElement type="custom" component="custom_postaladdress" />
)
export const InnerCustomReferredBy = () => (
  <InnerElement type="custom" component="custom_referredby" />
)
export const InnerCustomTelephoneNumber = () => (
  <InnerElement type="custom" component="custom_telephonenumber" />
)

export const SettingBasicHeading = () => (
  <SettingElement type="basic" component="basic_heading" selectedForm={{}} />
)
export const SettingBasicShortAnswer = () => (
  <SettingElement
    type="basic"
    component="basic_shortanswer"
    selectedForm={{}}
  />
)
export const SettingBasicLongAnswer = () => (
  <SettingElement type="basic" component="basic_longanswer" selectedForm={{}} />
)
export const SettingBasicTextBlock = () => (
  <SettingElement type="basic" component="basic_textblock" selectedForm={{}} />
)
export const SettingBasicSingleChoice = () => (
  <SettingElement
    type="basic"
    component="basic_singlechoice"
    selectedForm={{}}
  />
)
export const SettingBasicMultipleChoice = () => (
  <SettingElement
    type="basic"
    component="basic_multiplechoice"
    selectedForm={{}}
  />
)
export const SettingBasicDropDown = () => (
  <SettingElement type="basic" component="basic_dropdown" selectedForm={{}} />
)
export const SettingBasicDrawing = () => (
  <SettingElement type="basic" component="basic_drawing" selectedForm={{}} />
)
export const SettingBasicSignature = () => (
  <SettingElement type="basic" component="basic_signature" selectedForm={{}} />
)
export const SettingBasicConditions = () => (
  <SettingElement type="basic" component="basic_conditions" selectedForm={{}} />
)
export const SettingBasicDrugs = () => (
  <SettingElement type="basic" component="basic_drugs" selectedForm={{}} />
)
export const SettingBasicTravelDestination = () => (
  <SettingElement
    type="basic"
    component="basic_traveldestination"
    selectedForm={{}}
  />
)
export const SettingBasicVaccineScheduler = () => (
  <SettingElement
    type="basic"
    component="basic_vaccinescheduler"
    selectedForm={{}}
  />
)
export const SettingBasicVaccineHistory = () => (
  <SettingElement
    type="basic"
    component="basic_vaccinehistory"
    selectedForm={{}}
  />
)
export const SettingBasicLabTests = () => (
  <SettingElement type="basic" component="basic_labtests" selectedForm={{}} />
)

export const SettingCustomEmailMarketing = () => (
  <SettingElement
    type="custom"
    component="custom_emailmarketing"
    selectedForm={{}}
  />
)
export const SettingCustomSmsMarketing = () => (
  <SettingElement
    type="custom"
    component="custom_smsmarketing"
    selectedForm={{}}
  />
)
export const SettingCustomPhoneCall = () => (
  <SettingElement
    type="custom"
    component="custom_phonecall"
    selectedForm={{}}
  />
)
export const SettingCustomLettermarketing = () => (
  <SettingElement
    type="custom"
    component="custom_lettermarketing"
    selectedForm={{}}
  />
)
export const SettingCustomMembershipNumber = () => (
  <SettingElement
    type="custom"
    component="custom_membershipnumber"
    selectedForm={{}}
  />
)
export const SettingCustomAuthorizationCode = () => (
  <SettingElement
    type="custom"
    component="custom_authorizationcode"
    selectedForm={{}}
  />
)
export const SettingCustomCompany = () => (
  <SettingElement type="custom" component="custom_company" selectedForm={{}} />
)
export const SettingCustomDob = () => (
  <SettingElement type="custom" component="custom_dob" selectedForm={{}} />
)
export const SettingCustomGender = () => (
  <SettingElement type="custom" component="custom_gender" selectedForm={{}} />
)
export const SettingCustomPhysicalAddress = () => (
  <SettingElement
    type="custom"
    component="custom_physicaladdress"
    selectedForm={{}}
  />
)
export const SettingCustomPostalAddress = () => (
  <SettingElement
    type="custom"
    component="custom_postaladdress"
    selectedForm={{}}
  />
)
export const SettingCustomReferredBy = () => (
  <SettingElement
    type="custom"
    component="custom_referredby"
    selectedForm={{}}
  />
)
export const SettingCustomTelephoneNumber = () => (
  <SettingElement
    type="custom"
    component="custom_telephonenumber"
    selectedForm={{}}
  />
)
