import React from 'react'
import InnerElement from './InnerElement'
import LeftSidebarElement from './LeftSidebarElement'
import MedicalForm from './MedicalForm'
import SettingElement from './SettingElement'

export default {
  component: MedicalForm,
  title: 'UI/Medical Form',
}

const LeftSidebarBasicHeadingStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicHeading = LeftSidebarBasicHeadingStory.bind({
  type: '',
  component: '',
})
LeftSidebarBasicHeading.args = {
  type: 'basic',
  component: 'basic_heading',
}

const LeftSidebarBasicShortAnswerStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicShortAnswer = LeftSidebarBasicShortAnswerStory.bind(
  {}
)
LeftSidebarBasicShortAnswer.args = {
  type: 'basic',
  component: 'basic_shortanswer',
}

const LeftSidebarBasicLongAnswerStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicLongAnswer = LeftSidebarBasicLongAnswerStory.bind(
  {}
)
LeftSidebarBasicLongAnswer.args = {
  type: 'basic',
  component: 'basic_longanswer',
}

const LeftSidebarBasicTextBlockStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicTextBlock = LeftSidebarBasicTextBlockStory.bind({})
LeftSidebarBasicTextBlock.args = {
  type: 'basic',
  component: 'basic_textblock',
}

const LeftSidebarBasicSingleChoiceStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicSingleChoice = LeftSidebarBasicSingleChoiceStory.bind(
  {}
)
LeftSidebarBasicSingleChoice.args = {
  type: 'basic',
  component: 'basic_singlechoice',
}

const LeftSidebarBasicMultipleChoiceStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicMultipleChoice = LeftSidebarBasicMultipleChoiceStory.bind(
  {}
)
LeftSidebarBasicMultipleChoice.args = {
  type: 'basic',
  component: 'basic_multiplechoice',
}

const LeftSidebarBasicDropDownStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicDropDown = LeftSidebarBasicDropDownStory.bind({})
LeftSidebarBasicDropDown.args = {
  type: 'basic',
  component: 'basic_dropdown',
}

const LeftSidebarBasicDrawingStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicDrawing = LeftSidebarBasicDrawingStory.bind({})
LeftSidebarBasicDrawing.args = {
  type: 'basic',
  component: 'basic_drawing',
}

const LeftSidebarBasicStaticImageStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarStaticImage = LeftSidebarBasicStaticImageStory.bind({})
LeftSidebarStaticImage.args = {
  type: 'basic',
  component: 'basic_staticimage',
}

const LeftSidebarBasicSignatureStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicSignature = LeftSidebarBasicSignatureStory.bind({})
LeftSidebarBasicSignature.args = {
  type: 'basic',
  component: 'basic_signature',
}

const LeftSidebarBasicConditionsStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicConditions = LeftSidebarBasicConditionsStory.bind(
  {}
)
LeftSidebarBasicConditions.args = {
  type: 'basic',
  component: 'basic_conditions',
}

const LeftSidebarBasicDrugsStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicDrugs = LeftSidebarBasicDrugsStory.bind({})
LeftSidebarBasicDrugs.args = {
  type: 'basic',
  component: 'basic_drugs',
}

const LeftSidebarBasicLabTestsStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicLabTests = LeftSidebarBasicLabTestsStory.bind({})
LeftSidebarBasicLabTests.args = {
  type: 'basic',
  component: 'basic_labtests',
}

const LeftSidebarBasicTravelDestinationStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarBasicTravelDestination = LeftSidebarBasicTravelDestinationStory.bind(
  {}
)
LeftSidebarBasicTravelDestination.args = {
  type: 'basic',
  component: 'basic_traveldestination',
}

const LeftSidebarBasicVaccineSchedulerStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarBasicVaccineScheduler = LeftSidebarBasicVaccineSchedulerStory.bind(
  {}
)
LeftSidebarBasicVaccineScheduler.args = {
  type: 'basic',
  component: 'basic_vaccinescheduler',
}

const LeftSidebarBasicVaccineHistoryStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarBasicVaccineHistory = LeftSidebarBasicVaccineHistoryStory.bind(
  {}
)
LeftSidebarBasicVaccineHistory.args = {
  type: 'basic',
  component: 'basic_vaccinehistory',
}

const LeftSidebarCustomEmailMarketingStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomEmailMarketing = LeftSidebarCustomEmailMarketingStory.bind(
  {}
)
LeftSidebarCustomEmailMarketing.args = {
  type: 'custom',
  component: 'custom_emailmarketing',
}

const LeftSidebarCustomSmsMarketingStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomSmsMarketing = LeftSidebarCustomSmsMarketingStory.bind(
  {}
)
LeftSidebarCustomSmsMarketing.args = {
  type: 'custom',
  component: 'custom_smsmarketing',
}

const LeftSidebarCustomPhoneCallStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomPhoneCall = LeftSidebarCustomPhoneCallStory.bind(
  {}
)
LeftSidebarCustomPhoneCall.args = {
  type: 'custom',
  component: 'custom_phonecall',
}

const LeftSidebarCustomLettermarketingStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarCustomLettermarketing = LeftSidebarCustomLettermarketingStory.bind(
  {}
)
LeftSidebarCustomLettermarketing.args = {
  type: 'custom',
  component: 'custom_lettermarketing',
}

const LeftSidebarCustomMembershipNumberStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarCustomMembershipNumber = LeftSidebarCustomMembershipNumberStory.bind(
  {}
)
LeftSidebarCustomMembershipNumber.args = {
  type: 'custom',
  component: 'custom_membershipnumber',
}

const LeftSidebarCustomAuthorizationCodeStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarCustomAuthorizationCode = LeftSidebarCustomAuthorizationCodeStory.bind(
  {}
)
LeftSidebarCustomAuthorizationCode.args = {
  type: 'custom',
  component: 'custom_authorizationcode',
}

const LeftSidebarCustomCompanyStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomCompany = LeftSidebarCustomCompanyStory.bind({})
LeftSidebarCustomCompany.args = {
  type: 'custom',
  component: 'custom_company',
}

const LeftSidebarCustomDobStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomDob = LeftSidebarCustomDobStory.bind({})
LeftSidebarCustomDob.args = {
  type: 'custom',
  component: 'custom_dob',
}

const LeftSidebarCustomGenderStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomGender = LeftSidebarCustomGenderStory.bind({})
LeftSidebarCustomGender.args = {
  type: 'custom',
  component: 'custom_gender',
}

const LeftSidebarCustomPhysicalAddressStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarCustomPhysicalAddress = LeftSidebarCustomPhysicalAddressStory.bind(
  {}
)
LeftSidebarCustomPhysicalAddress.args = {
  type: 'custom',
  component: 'custom_physicaladdress',
}

const LeftSidebarCustomPostalAddressStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomPostalAddress = LeftSidebarCustomPostalAddressStory.bind(
  {}
)
LeftSidebarCustomPostalAddress.args = {
  type: 'custom',
  component: 'custom_postaladdress',
}

const LeftSidebarCustomReferredByStory = ({ type, component, ...rest }) => (
  <LeftSidebarElement type={type} component={component} {...rest} />
)
export const LeftSidebarCustomReferredBy = LeftSidebarCustomReferredByStory.bind(
  {}
)
LeftSidebarCustomReferredBy.args = {
  type: 'custom',
  component: 'custom_referredby',
}

const LeftSidebarCustomTelephoneNumberStory = ({
  type,
  component,
  ...rest
}) => <LeftSidebarElement type={type} component={component} {...rest} />
export const LeftSidebarCustomTelephoneNumber = LeftSidebarCustomTelephoneNumberStory.bind(
  {}
)
LeftSidebarCustomTelephoneNumber.args = {
  type: 'custom',
  component: 'custom_telephonenumber',
}

const InnerBasicHeadingStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicHeading = InnerBasicHeadingStory.bind({})
InnerBasicHeading.args = {
  type: 'basic',
  component: 'basic_heading',
}

const InnerBasicShortAnswerStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicShortAnswer = InnerBasicShortAnswerStory.bind({})
InnerBasicShortAnswer.args = {
  type: 'basic',
  component: 'basic_shortanswer',
}

const InnerBasicLongAnswerStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicLongAnswer = InnerBasicLongAnswerStory.bind({})
InnerBasicLongAnswer.args = {
  type: 'basic',
  component: 'basic_longanswer',
}

const InnerBasicTextBlockStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicTextBlock = InnerBasicTextBlockStory.bind({})
InnerBasicTextBlock.args = {
  type: 'basic',
  component: 'basic_textblock',
}

const InnerBasicSingleChoiceStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicSingleChoice = InnerBasicSingleChoiceStory.bind({})
InnerBasicSingleChoice.args = {
  type: 'basic',
  component: 'basic_singlechoice',
}

const InnerBasicMultipleChoiceStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicMultipleChoice = InnerBasicMultipleChoiceStory.bind({})
InnerBasicMultipleChoice.args = {
  type: 'basic',
  component: 'basic_multiplechoice',
}

const InnerBasicDropDownStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicDropDown = InnerBasicDropDownStory.bind({})
InnerBasicDropDown.args = {
  type: 'basic',
  component: 'basic_dropdown',
}

const InnerBasicDrawingStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicDrawing = InnerBasicDrawingStory.bind({})
InnerBasicDrawing.args = {
  type: 'basic',
  component: 'basic_drawing',
}

const InnerBasicStaticImageStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicStaticImage = InnerBasicStaticImageStory.bind({})
InnerBasicStaticImage.args = {
  type: 'basic',
  component: 'basic_staticimage',
}

const InnerBasicSignatureStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicSignature = InnerBasicSignatureStory.bind({})
InnerBasicSignature.args = {
  type: 'basic',
  component: 'basic_signature',
}

const InnerBasicConditionsStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicConditions = InnerBasicConditionsStory.bind({})
InnerBasicConditions.args = {
  type: 'basic',
  component: 'basic_conditions',
}

const InnerBasicDrugsStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicDrugs = InnerBasicDrugsStory.bind({})
InnerBasicDrugs.args = {
  type: 'basic',
  component: 'basic_drugs',
}

const InnerBasicLabTestsStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicLabTests = InnerBasicLabTestsStory.bind({})
InnerBasicLabTests.args = {
  type: 'basic',
  component: 'basic_labtests',
}

const InnerBasicTravelDestinationStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicTravelDestination = InnerBasicTravelDestinationStory.bind(
  {}
)
InnerBasicTravelDestination.args = {
  type: 'basic',
  component: 'basic_traveldestination',
}

const InnerBasicVaccineSchedulerStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicVaccineScheduler = InnerBasicVaccineSchedulerStory.bind(
  {}
)
InnerBasicVaccineScheduler.args = {
  type: 'basic',
  component: 'basic_vaccinescheduler',
}

const InnerBasicVaccineHistoryStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerBasicVaccineHistory = InnerBasicVaccineHistoryStory.bind({})
InnerBasicVaccineHistory.args = {
  type: 'basic',
  component: 'basic_vaccinehistory',
}

const InnerCustomEmailMarketingStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomEmailMarketing = InnerCustomEmailMarketingStory.bind({})
InnerCustomEmailMarketing.args = {
  type: 'custom',
  component: 'custom_emailmarketing',
}

const InnerCustomSmsMarketingStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomSmsMarketing = InnerCustomSmsMarketingStory.bind({})
InnerCustomSmsMarketing.args = {
  type: 'custom',
  component: 'custom_smsmarketing',
}

const InnerCustomPhoneCallStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomPhoneCall = InnerCustomPhoneCallStory.bind({})
InnerCustomPhoneCall.args = {
  type: 'custom',
  component: 'custom_phonecall',
}

const InnerCustomLettermarketingStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomLettermarketing = InnerCustomLettermarketingStory.bind(
  {}
)
InnerCustomLettermarketing.args = {
  type: 'custom',
  component: 'custom_lettermarketing',
}

const InnerCustomMembershipNumberStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomMembershipNumber = InnerCustomMembershipNumberStory.bind(
  {}
)
InnerCustomMembershipNumber.args = {
  type: 'custom',
  component: 'custom_membershipnumber',
}

const InnerCustomAuthorizationCodeStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomAuthorizationCode = InnerCustomAuthorizationCodeStory.bind(
  {}
)
InnerCustomAuthorizationCode.args = {
  type: 'custom',
  component: 'custom_authorizationcode',
}

const InnerCustomCompanyStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomCompany = InnerCustomCompanyStory.bind({})
InnerCustomCompany.args = {
  type: 'custom',
  component: 'custom_company',
}

const InnerCustomDobStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomDob = InnerCustomDobStory.bind({})
InnerCustomDob.args = {
  type: 'custom',
  component: 'custom_dob',
}

const InnerCustomGenderStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomGender = InnerCustomGenderStory.bind({})
InnerCustomGender.args = {
  type: 'custom',
  component: 'custom_gender',
}

const InnerCustomPhysicalAddressStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomPhysicalAddress = InnerCustomPhysicalAddressStory.bind(
  {}
)
InnerCustomPhysicalAddress.args = {
  type: 'custom',
  component: 'custom_physicaladdress',
}

const InnerCustomPostalAddressStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomPostalAddress = InnerCustomPostalAddressStory.bind({})
InnerCustomPostalAddress.args = {
  type: 'custom',
  component: 'custom_postaladdress',
}

const InnerCustomReferredByStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomReferredBy = InnerCustomReferredByStory.bind({})
InnerCustomReferredBy.args = {
  type: 'custom',
  component: 'custom_referredby',
}

const InnerCustomTelephoneNumberStory = ({
  required,
  activate,
  type,
  component,
  handleId,
  formData,
  ...rest
}) => (
  <InnerElement
    required={required}
    activate={activate}
    type={type}
    component={component}
    handleId={handleId}
    formData={formData}
    {...rest}
  />
)
export const InnerCustomTelephoneNumber = InnerCustomTelephoneNumberStory.bind(
  {}
)
InnerCustomTelephoneNumber.args = {
  type: 'custom',
  component: 'custom_telephonenumber',
}

const SettingBasicHeadingStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicHeading = SettingBasicHeadingStory.bind({})
SettingBasicHeading.args = {
  type: 'basic',
  component: 'basic_heading',
}

const SettingBasicShortAnswerStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicShortAnswer = SettingBasicShortAnswerStory.bind({})
SettingBasicShortAnswer.args = {
  type: 'basic',
  component: 'basic_shortanswer',
}

const SettingBasicLongAnswerStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicLongAnswer = SettingBasicLongAnswerStory.bind({})
SettingBasicLongAnswer.args = {
  type: 'basic',
  component: 'basic_longanswer',
}

const SettingBasicTextBlockStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicTextBlock = SettingBasicTextBlockStory.bind({})
SettingBasicTextBlock.args = {
  type: 'basic',
  component: 'basic_textblock',
}

const SettingBasicSingleChoiceStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicSingleChoice = SettingBasicSingleChoiceStory.bind({})
SettingBasicSingleChoice.args = {
  type: 'basic',
  component: 'basic_singlechoice',
}

const SettingBasicMultipleChoiceStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicMultipleChoice = SettingBasicMultipleChoiceStory.bind(
  {}
)
SettingBasicMultipleChoice.args = {
  type: 'basic',
  component: 'basic_multiplechoice',
}

const SettingBasicDropDownStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicDropDown = SettingBasicDropDownStory.bind({})
SettingBasicDropDown.args = {
  type: 'basic',
  component: 'basic_dropdown',
}

const SettingBasicDrawingStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicDrawing = SettingBasicDrawingStory.bind({})
SettingBasicDrawing.args = {
  type: 'basic',
  component: 'basic_drawing',
}

const SettingBasicStaticImageStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicStaticImage = SettingBasicStaticImageStory.bind({})
SettingBasicDrawing.args = {
  type: 'basic',
  component: 'basic_staticimage',
}

const SettingBasicSignatureStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicSignature = SettingBasicSignatureStory.bind({})
SettingBasicSignature.args = {
  type: 'basic',
  component: 'basic_signature',
}

const SettingBasicConditionsStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicConditions = SettingBasicConditionsStory.bind({})
SettingBasicConditions.args = {
  type: 'basic',
  component: 'basic_conditions',
}

const SettingBasicDrugsStory = ({ type, component, selectedForm, ...rest }) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicDrugs = SettingBasicDrugsStory.bind({})
SettingBasicDrugs.args = {
  type: 'basic',
  component: 'basic_drugs',
}

const SettingBasicLabTestsStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicLabTests = SettingBasicLabTestsStory.bind({})
SettingBasicLabTests.args = {
  type: 'basic',
  component: 'basic_labtests',
}

const SettingBasicTravelDestinationStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicTravelDestination = SettingBasicTravelDestinationStory.bind(
  {}
)
SettingBasicTravelDestination.args = {
  type: 'basic',
  component: 'basic_traveldestination',
}

const SettingBasicVaccineSchedulerStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicVaccineScheduler = SettingBasicVaccineSchedulerStory.bind(
  {}
)
SettingBasicVaccineScheduler.args = {
  type: 'basic',
  component: 'basic_vaccinescheduler',
}

const SettingBasicVaccineHistoryStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingBasicVaccineHistory = SettingBasicVaccineHistoryStory.bind(
  {}
)
SettingBasicVaccineHistory.args = {
  type: 'basic',
  component: 'basic_vaccinehistory',
}

const SettingCustomEmailMarketingStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomEmailMarketing = SettingCustomEmailMarketingStory.bind(
  {}
)
SettingCustomEmailMarketing.args = {
  type: 'custom',
  component: 'custom_emailmarketing',
}

const SettingCustomSmsMarketingStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomSmsMarketing = SettingCustomSmsMarketingStory.bind({})
SettingCustomSmsMarketing.args = {
  type: 'custom',
  component: 'custom_smsmarketing',
}

const SettingCustomPhoneCallStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomPhoneCall = SettingCustomPhoneCallStory.bind({})
SettingCustomPhoneCall.args = {
  type: 'custom',
  component: 'custom_phonecall',
}

const SettingCustomLettermarketingStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomLettermarketing = SettingCustomLettermarketingStory.bind(
  {}
)
SettingCustomLettermarketing.args = {
  type: 'custom',
  component: 'custom_lettermarketing',
}

const SettingCustomMembershipNumberStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomMembershipNumber = SettingCustomMembershipNumberStory.bind(
  {}
)
SettingCustomMembershipNumber.args = {
  type: 'custom',
  component: 'custom_membershipnumber',
}

const SettingCustomAuthorizationCodeStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomAuthorizationCode = SettingCustomAuthorizationCodeStory.bind(
  {}
)
SettingCustomAuthorizationCode.args = {
  type: 'custom',
  component: 'custom_authorizationcode',
}

const SettingCustomCompanyStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomCompany = SettingCustomCompanyStory.bind({})
SettingCustomCompany.args = {
  type: 'custom',
  component: 'custom_company',
}

const SettingCustomDobStory = ({ type, component, selectedForm, ...rest }) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomDob = SettingCustomDobStory.bind({})
SettingCustomDob.args = {
  type: 'custom',
  component: 'custom_dob',
}

const SettingCustomGenderStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomGender = SettingCustomGenderStory.bind({})
SettingCustomGender.args = {
  type: 'custom',
  component: 'custom_gender',
}

const SettingCustomPhysicalAddressStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomPhysicalAddress = SettingCustomPhysicalAddressStory.bind(
  {}
)
SettingCustomPhysicalAddress.args = {
  type: 'custom',
  component: 'custom_physicaladdress',
}

const SettingCustomPostalAddressStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomPostalAddress = SettingCustomPostalAddressStory.bind(
  {}
)
SettingCustomPostalAddress.args = {
  type: 'custom',
  component: 'custom_postaladdress',
}

const SettingCustomReferredByStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomReferredBy = SettingCustomReferredByStory.bind({})
SettingCustomReferredBy.args = {
  type: 'custom',
  component: 'custom_referredby',
}

const SettingCustomTelephoneNumberStory = ({
  type,
  component,
  selectedForm,
  ...rest
}) => (
  <SettingElement
    type={type}
    component={component}
    selectedForm={selectedForm}
    {...rest}
  />
)
export const SettingCustomTelephoneNumber = SettingCustomTelephoneNumberStory.bind(
  {}
)
SettingCustomTelephoneNumber.args = {
  type: 'custom',
  component: 'custom_telephonenumber',
}
