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

const InnerBasicHeadingStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicHeading = InnerBasicHeadingStory.bind({})
InnerBasicHeading.args = {
  type: 'basic',
  component: 'basic_heading',
}

const InnerBasicShortAnswerStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicShortAnswer = InnerBasicShortAnswerStory.bind({})
InnerBasicShortAnswer.args = {
  type: 'basic',
  component: 'basic_shortanswer',
}

const InnerBasicLongAnswerStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicLongAnswer = InnerBasicLongAnswerStory.bind({})
InnerBasicLongAnswer.args = {
  type: 'basic',
  component: 'basic_longanswer',
}

const InnerBasicTextBlockStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicTextBlock = InnerBasicTextBlockStory.bind({})
InnerBasicTextBlock.args = {
  type: 'basic',
  component: 'basic_textblock',
}

const InnerBasicSingleChoiceStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicSingleChoice = InnerBasicSingleChoiceStory.bind({})
InnerBasicSingleChoice.args = {
  type: 'basic',
  component: 'basic_singlechoice',
}

const InnerBasicMultipleChoiceStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerBasicMultipleChoice = InnerBasicMultipleChoiceStory.bind({})
InnerBasicMultipleChoice.args = {
  type: 'basic',
  component: 'basic_multiplechoice',
}

const InnerBasicDropDownStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicDropDown = InnerBasicDropDownStory.bind({})
InnerBasicDropDown.args = {
  type: 'basic',
  component: 'basic_dropdown',
}

const InnerBasicDrawingStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicDrawing = InnerBasicDrawingStory.bind({})
InnerBasicDrawing.args = {
  type: 'basic',
  component: 'basic_drawing',
}

const InnerBasicSignatureStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicSignature = InnerBasicSignatureStory.bind({})
InnerBasicSignature.args = {
  type: 'basic',
  component: 'basic_signature',
}

const InnerBasicConditionsStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicConditions = InnerBasicConditionsStory.bind({})
InnerBasicConditions.args = {
  type: 'basic',
  component: 'basic_conditions',
}

const InnerBasicDrugsStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicDrugs = InnerBasicDrugsStory.bind({})
InnerBasicDrugs.args = {
  type: 'basic',
  component: 'basic_drugs',
}

const InnerBasicTravelDestinationStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerBasicTravelDestination = InnerBasicTravelDestinationStory.bind(
  {}
)
InnerBasicTravelDestination.args = {
  type: 'basic',
  component: 'basic_traveldestination',
}

const InnerBasicVaccineSchedulerStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerBasicVaccineScheduler = InnerBasicVaccineSchedulerStory.bind(
  {}
)
InnerBasicVaccineScheduler.args = {
  type: 'basic',
  component: 'basic_vaccinescheduler',
}

const InnerBasicVaccineHistoryStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerBasicVaccineHistory = InnerBasicVaccineHistoryStory.bind({})
InnerBasicVaccineHistory.args = {
  type: 'basic',
  component: 'basic_vaccinehistory',
}

const InnerBasicLabTestsStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerBasicLabTests = InnerBasicLabTestsStory.bind({})
InnerBasicLabTests.args = {
  type: 'basic',
  component: 'basic_labtests',
}

const InnerCustomEmailMarketingStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomEmailMarketing = InnerCustomEmailMarketingStory.bind({})
InnerCustomEmailMarketing.args = {
  type: 'custom',
  component: 'custom_emailmarketing',
}

const InnerCustomSmsMarketingStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerCustomSmsMarketing = InnerCustomSmsMarketingStory.bind({})
InnerCustomSmsMarketing.args = {
  type: 'custom',
  component: 'custom_smsmarketing',
}

const InnerCustomPhoneCallStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerCustomPhoneCall = InnerCustomPhoneCallStory.bind({})
InnerCustomPhoneCall.args = {
  type: 'custom',
  component: 'custom_phonecall',
}

const InnerCustomLettermarketingStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomLettermarketing = InnerCustomLettermarketingStory.bind(
  {}
)
InnerCustomLettermarketing.args = {
  type: 'custom',
  component: 'custom_lettermarketing',
}

const InnerCustomMembershipNumberStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomMembershipNumber = InnerCustomMembershipNumberStory.bind(
  {}
)
InnerCustomMembershipNumber.args = {
  type: 'custom',
  component: 'custom_membershipnumber',
}

const InnerCustomAuthorizationCodeStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomAuthorizationCode = InnerCustomAuthorizationCodeStory.bind(
  {}
)
InnerCustomAuthorizationCode.args = {
  type: 'custom',
  component: 'custom_authorizationcode',
}

const InnerCustomCompanyStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerCustomCompany = InnerCustomCompanyStory.bind({})
InnerCustomCompany.args = {
  type: 'custom',
  component: 'custom_company',
}

const InnerCustomDobStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerCustomDob = InnerCustomDobStory.bind({})
InnerCustomDob.args = {
  type: 'custom',
  component: 'custom_dob',
}

const InnerCustomGenderStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerCustomGender = InnerCustomGenderStory.bind({})
InnerCustomGender.args = {
  type: 'custom',
  component: 'custom_gender',
}

const InnerCustomPhysicalAddressStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomPhysicalAddress = InnerCustomPhysicalAddressStory.bind(
  {}
)
InnerCustomPhysicalAddress.args = {
  type: 'custom',
  component: 'custom_physicaladdress',
}

const InnerCustomPostalAddressStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomPostalAddress = InnerCustomPostalAddressStory.bind({})
InnerCustomPostalAddress.args = {
  type: 'custom',
  component: 'custom_postaladdress',
}

const InnerCustomReferredByStory = ({ ...rest }) => <InnerElement {...rest} />
export const InnerCustomReferredBy = InnerCustomReferredByStory.bind({})
InnerCustomReferredBy.args = {
  type: 'custom',
  component: 'custom_referredby',
}

const InnerCustomTelephoneNumberStory = ({ ...rest }) => (
  <InnerElement {...rest} />
)
export const InnerCustomTelephoneNumber = InnerCustomTelephoneNumberStory.bind(
  {}
)
InnerCustomTelephoneNumber.args = {
  type: 'custom',
  component: 'custom_telephonenumber',
}

const SettingBasicHeadingStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicHeading = SettingBasicHeadingStory.bind({})
SettingBasicHeading.args = {
  type: 'basic',
  component: 'basic_heading',
}

const SettingBasicShortAnswerStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicShortAnswer = SettingBasicShortAnswerStory.bind({})
SettingBasicShortAnswer.args = {
  type: 'basic',
  component: 'basic_shortanswer',
}

const SettingBasicLongAnswerStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicLongAnswer = SettingBasicLongAnswerStory.bind({})
SettingBasicLongAnswer.args = {
  type: 'basic',
  component: 'basic_longanswer',
}

const SettingBasicTextBlockStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicTextBlock = SettingBasicTextBlockStory.bind({})
SettingBasicTextBlock.args = {
  type: 'basic',
  component: 'basic_textblock',
}

const SettingBasicSingleChoiceStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicSingleChoice = SettingBasicSingleChoiceStory.bind({})
SettingBasicSingleChoice.args = {
  type: 'basic',
  component: 'basic_singlechoice',
}

const SettingBasicMultipleChoiceStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicMultipleChoice = SettingBasicMultipleChoiceStory.bind(
  {}
)
SettingBasicMultipleChoice.args = {
  type: 'basic',
  component: 'basic_multiplechoice',
}

const SettingBasicDropDownStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicDropDown = SettingBasicDropDownStory.bind({})
SettingBasicDropDown.args = {
  type: 'basic',
  component: 'basic_dropdown',
}

const SettingBasicDrawingStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicDrawing = SettingBasicDrawingStory.bind({})
SettingBasicDrawing.args = {
  type: 'basic',
  component: 'basic_drawing',
}

const SettingBasicSignatureStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicSignature = SettingBasicSignatureStory.bind({})
SettingBasicSignature.args = {
  type: 'basic',
  component: 'basic_signature',
}

const SettingBasicConditionsStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicConditions = SettingBasicConditionsStory.bind({})
SettingBasicConditions.args = {
  type: 'basic',
  component: 'basic_conditions',
}

const SettingBasicDrugsStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicDrugs = SettingBasicDrugsStory.bind({})
SettingBasicDrugs.args = {
  type: 'basic',
  component: 'basic_drugs',
}

const SettingBasicTravelDestinationStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicTravelDestination = SettingBasicTravelDestinationStory.bind(
  {}
)
SettingBasicTravelDestination.args = {
  type: 'basic',
  component: 'basic_traveldestination',
}

const SettingBasicVaccineSchedulerStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicVaccineScheduler = SettingBasicVaccineSchedulerStory.bind(
  {}
)
SettingBasicVaccineScheduler.args = {
  type: 'basic',
  component: 'basic_vaccinescheduler',
}

const SettingBasicVaccineHistoryStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicVaccineHistory = SettingBasicVaccineHistoryStory.bind(
  {}
)
SettingBasicVaccineHistory.args = {
  type: 'basic',
  component: 'basic_vaccinehistory',
}

const SettingBasicLabTestsStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingBasicLabTests = SettingBasicLabTestsStory.bind({})
SettingBasicLabTests.args = {
  type: 'basic',
  component: 'basic_labtests',
}

const SettingCustomEmailMarketingStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomEmailMarketing = SettingCustomEmailMarketingStory.bind(
  {}
)
SettingCustomEmailMarketing.args = {
  type: 'custom',
  component: 'custom_emailmarketing',
}

const SettingCustomSmsMarketingStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomSmsMarketing = SettingCustomSmsMarketingStory.bind({})
SettingCustomSmsMarketing.args = {
  type: 'custom',
  component: 'custom_smsmarketing',
}

const SettingCustomPhoneCallStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomPhoneCall = SettingCustomPhoneCallStory.bind({})
SettingCustomPhoneCall.args = {
  type: 'custom',
  component: 'custom_phonecall',
}

const SettingCustomLettermarketingStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomLettermarketing = SettingCustomLettermarketingStory.bind(
  {}
)
SettingCustomLettermarketing.args = {
  type: 'custom',
  component: 'custom_lettermarketing',
}

const SettingCustomMembershipNumberStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomMembershipNumber = SettingCustomMembershipNumberStory.bind(
  {}
)
SettingCustomMembershipNumber.args = {
  type: 'custom',
  component: 'custom_membershipnumber',
}

const SettingCustomAuthorizationCodeStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomAuthorizationCode = SettingCustomAuthorizationCodeStory.bind(
  {}
)
SettingCustomAuthorizationCode.args = {
  type: 'custom',
  component: 'custom_authorizationcode',
}

const SettingCustomCompanyStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomCompany = SettingCustomCompanyStory.bind({})
SettingCustomCompany.args = {
  type: 'custom',
  component: 'custom_company',
}

const SettingCustomDobStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomDob = SettingCustomDobStory.bind({})
SettingCustomDob.args = {
  type: 'custom',
  component: 'custom_dob',
}

const SettingCustomGenderStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomGender = SettingCustomGenderStory.bind({})
SettingCustomGender.args = {
  type: 'custom',
  component: 'custom_gender',
}

const SettingCustomPhysicalAddressStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomPhysicalAddress = SettingCustomPhysicalAddressStory.bind(
  {}
)
SettingCustomPhysicalAddress.args = {
  type: 'custom',
  component: 'custom_physicaladdress',
}

const SettingCustomPostalAddressStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomPostalAddress = SettingCustomPostalAddressStory.bind(
  {}
)
SettingCustomPostalAddress.args = {
  type: 'custom',
  component: 'custom_postaladdress',
}

const SettingCustomReferredByStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomReferredBy = SettingCustomReferredByStory.bind({})
SettingCustomReferredBy.args = {
  type: 'custom',
  component: 'custom_referredby',
}

const SettingCustomTelephoneNumberStory = ({ ...rest }) => (
  <SettingElement {...rest} selectedForm={{}} />
)
export const SettingCustomTelephoneNumber = SettingCustomTelephoneNumberStory.bind(
  {}
)
SettingCustomTelephoneNumber.args = {
  type: 'custom',
  component: 'custom_telephonenumber',
}
