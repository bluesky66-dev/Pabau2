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

const LeftSidebarBasicLongAnswerStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicLongAnswer = LeftSidebarBasicLongAnswerStory.bind(
  {}
)
LeftSidebarBasicLongAnswer.args = {
  type: 'basic',
  component: 'basic_longanswer',
}

const LeftSidebarBasicTextBlockStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicTextBlock = LeftSidebarBasicTextBlockStory.bind({})
LeftSidebarBasicTextBlock.args = {
  type: 'basic',
  component: 'basic_textblock',
}

const LeftSidebarBasicSingleChoiceStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicSingleChoice = LeftSidebarBasicSingleChoiceStory.bind(
  {}
)
LeftSidebarBasicSingleChoice.args = {
  type: 'basic',
  component: 'basic_singlechoice',
}

const LeftSidebarBasicMultipleChoiceStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicMultipleChoice = LeftSidebarBasicMultipleChoiceStory.bind(
  {}
)
LeftSidebarBasicMultipleChoice.args = {
  type: 'basic',
  component: 'basic_multiplechoice',
}

const LeftSidebarBasicDropDownStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicDropDown = LeftSidebarBasicDropDownStory.bind({})
LeftSidebarBasicDropDown.args = {
  type: 'basic',
  component: 'basic_dropdown',
}

const LeftSidebarBasicDrawingStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicDrawing = LeftSidebarBasicDrawingStory.bind({})
LeftSidebarBasicDrawing.args = {
  type: 'basic',
  component: 'basic_drawing',
}

const LeftSidebarBasicSignatureStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicSignature = LeftSidebarBasicSignatureStory.bind({})
LeftSidebarBasicSignature.args = {
  type: 'basic',
  component: 'basic_signature',
}

const LeftSidebarBasicConditionsStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicConditions = LeftSidebarBasicConditionsStory.bind(
  {}
)
LeftSidebarBasicConditions.args = {
  type: 'basic',
  component: 'basic_conditions',
}

const LeftSidebarBasicDrugsStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicDrugs = LeftSidebarBasicDrugsStory.bind({})
LeftSidebarBasicDrugs.args = {
  type: 'basic',
  component: 'basic_drugs',
}

const LeftSidebarBasicTravelDestinationStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicTravelDestination = LeftSidebarBasicTravelDestinationStory.bind(
  {}
)
LeftSidebarBasicTravelDestination.args = {
  type: 'basic',
  component: 'basic_traveldestination',
}

const LeftSidebarBasicVaccineSchedulerStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicVaccineScheduler = LeftSidebarBasicVaccineSchedulerStory.bind(
  {}
)
LeftSidebarBasicVaccineScheduler.args = {
  type: 'basic',
  component: 'basic_vaccinescheduler',
}

const LeftSidebarBasicVaccineHistoryStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicVaccineHistory = LeftSidebarBasicVaccineHistoryStory.bind(
  {}
)
LeftSidebarBasicVaccineHistory.args = {
  type: 'basic',
  component: 'basic_vaccinehistory',
}

const LeftSidebarBasicLabTestsStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarBasicLabTests = LeftSidebarBasicLabTestsStory.bind({})
LeftSidebarBasicLabTests.args = {
  type: 'basic',
  component: 'basic_labtests',
}

const LeftSidebarCustomEmailMarketingStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomEmailMarketing = LeftSidebarCustomEmailMarketingStory.bind(
  {}
)
LeftSidebarCustomEmailMarketing.args = {
  type: 'custom',
  component: 'custom_emailmarketing',
}

const LeftSidebarCustomSmsMarketingStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomSmsMarketing = LeftSidebarCustomSmsMarketingStory.bind(
  {}
)
LeftSidebarCustomSmsMarketing.args = {
  type: 'custom',
  component: 'custom_smsmarketing',
}

const LeftSidebarCustomPhoneCallStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomPhoneCall = LeftSidebarCustomPhoneCallStory.bind(
  {}
)
LeftSidebarCustomPhoneCall.args = {
  type: 'custom',
  component: 'custom_phonecall',
}

const LeftSidebarCustomLettermarketingStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomLettermarketing = LeftSidebarCustomLettermarketingStory.bind(
  {}
)
LeftSidebarCustomLettermarketing.args = {
  type: 'custom',
  component: 'custom_lettermarketing',
}

const LeftSidebarCustomMembershipNumberStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomMembershipNumber = LeftSidebarCustomMembershipNumberStory.bind(
  {}
)
LeftSidebarCustomMembershipNumber.args = {
  type: 'custom',
  component: 'custom_membershipnumber',
}

const LeftSidebarCustomAuthorizationCodeStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomAuthorizationCode = LeftSidebarCustomAuthorizationCodeStory.bind(
  {}
)
LeftSidebarCustomAuthorizationCode.args = {
  type: 'custom',
  component: 'custom_authorizationcode',
}

const LeftSidebarCustomCompanyStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomCompany = LeftSidebarCustomCompanyStory.bind({})
LeftSidebarCustomCompany.args = {
  type: 'custom',
  component: 'custom_company',
}

const LeftSidebarCustomDobStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomDob = LeftSidebarCustomDobStory.bind({})
LeftSidebarCustomDob.args = {
  type: 'custom',
  component: 'custom_dob',
}

const LeftSidebarCustomGenderStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomGender = LeftSidebarCustomGenderStory.bind({})
LeftSidebarCustomGender.args = {
  type: 'custom',
  component: 'custom_gender',
}

const LeftSidebarCustomPhysicalAddressStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomPhysicalAddress = LeftSidebarCustomPhysicalAddressStory.bind(
  {}
)
LeftSidebarCustomPhysicalAddress.args = {
  type: 'custom',
  component: 'custom_physicaladdress',
}

const LeftSidebarCustomPostalAddressStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomPostalAddress = LeftSidebarCustomPostalAddressStory.bind(
  {}
)
LeftSidebarCustomPostalAddress.args = {
  type: 'custom',
  component: 'custom_postaladdress',
}

const LeftSidebarCustomReferredByStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomReferredBy = LeftSidebarCustomReferredByStory.bind(
  {}
)
LeftSidebarCustomReferredBy.args = {
  type: 'custom',
  component: 'custom_referredby',
}

const LeftSidebarCustomTelephoneNumberStory = ({ ...rest }) => (
  <LeftSidebarElement {...rest} />
)
export const LeftSidebarCustomTelephoneNumber = LeftSidebarCustomTelephoneNumberStory.bind(
  {}
)
LeftSidebarCustomTelephoneNumber.args = {
  type: 'custom',
  component: 'custom_telephonenumber',
}

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
