/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Conditions from './Conditions'
import CustomAuthorizationCode from './CustomAuthorizationCode'
import CustomCompany from './CustomCompany'
import CustomDob from './CustomDob'
import CustomEmailMarketing from './CustomEmailMarketing'
import CustomGender from './CustomGender'
import CustomLetterMarketing from './CustomLetterMarketing'
import CustomMembershipNumber from './CustomMembershipNumber'
import CustomPhoneCall from './CustomPhoneCall'
import CustomPhysicalAddress from './CustomPhysicalAddress'
import CustomPostalAddress from './CustomPostalAddress'
import CustomReferredBy from './CustomReferredBy'
import CustomSmsTextMarketing from './CustomSmsTextMarketing'
import CustomTelephoneNumber from './CustomTelephoneNumber'
import Dob from './Dob'
import Drawing from './Drawing'
import Dropdown from './Dropdown'
import Drugs from './Drugs'
import Heading from './Heading'
import InnerConditions from './InnerConditions'
import InnerDob from './InnerDob'
import InnerDrawing from './InnerDrawing'
import InnerDropdown from './InnerDropdown'
import InnerDrugs from './InnerDrugs'
import InnerGender from './InnerGender'
import InnerHeading from './InnerHeading'
import InnerLabTest from './InnerLabTest'
import InnerLongAnswer from './InnerLongAnswer'
import InnerMultiChoice from './InnerMultiChoice'
import InnerShortAnswer from './InnerShortAnswer'
import InnerSignature from './InnerSignature'
import InnerSingleChoice from './InnerSingleChoice'
import InnerTextBlock from './InnerTextBlock'
import InnerTravelDestination from './InnerTravelDestination'
import InnerVaccineHistory from './InnerVaccineHistory'
import InnerVaccineScheduler from './InnerVaccineScheduler'
import LabTest from './LabTest'
import LeftSidebarBasicCheckBox from './LeftSidebarBasicCheckBox'
import LeftSidebarBasicDrawing from './LeftSidebarBasicDrawing'
import LeftSidebarBasicDropDown from './LeftSidebarBasicDropDown'
import LeftSidebarBasicDrugs from './LeftSidebarBasicDrugs'
import LeftSidebarBasicHeading from './LeftSidebarBasicHeading'
import LeftSidebarBasicLabTest from './LeftSidebarBasicLabTest'
import LeftSidebarBasicLongAnswer from './LeftSidebarBasicLongAnswer'
import LeftSidebarBasicMedicalConditions from './LeftSidebarBasicMedicalConditions'
import LeftSidebarBasicShortAnswer from './LeftSidebarBasicShortAnswer'
import LeftSidebarBasicSignature from './LeftSidebarBasicSignature'
import LeftSidebarBasicSingleChoice from './LeftSidebarBasicSingleChoice'
import LeftSidebarBasicTextBlock from './LeftSidebarBasicTextBlock'
import LeftSidebarBasicTravelDestination from './LeftSidebarBasicTravelDestination'
import LeftSidebarBasicVaccineHistory from './LeftSidebarBasicVaccineHistory'
import LeftSidebarBasicVaccineScheduler from './LeftSidebarBasicVaccineScheduler'
import LeftSidebarCustomAuthorizationCode from './LeftSidebarCustomAuthorizationCode'
import LeftSidebarCustomCompany from './LeftSidebarCustomCompany'
import LeftSidebarCustomDob from './LeftSidebarCustomDob'
import LeftSidebarCustomEmailMarketing from './LeftSidebarCustomEmailMarketing'
import LeftSidebarCustomGender from './LeftSidebarCustomGender'
import LeftSidebarCustomLetterMarketing from './LeftSidebarCustomLetterMarketing'
import LeftSidebarCustomMembershipNumber from './LeftSidebarCustomMembershipNumber'
import LeftSidebarCustomPhoneCall from './LeftSidebarCustomPhoneCall'
import LeftSidebarCustomPhysicalAddress from './LeftSidebarCustomPhysicalAddress'
import LeftSidebarCustomPostalAddress from './LeftSidebarCustomPostalAddress'
import LeftSidebarCustomReferredBy from './LeftSidebarCustomReferredBy'
import LeftSidebarCustomSmsTextMarketing from './LeftSidebarCustomSmsTextMarketing'
import LeftSidebarCustomTelephoneNumber from './LeftSidebarCustomTelephoneNumber'
import LongAnswer from './LongAnswer'
import MedicalForm from './MedicalForm'
import MultipleChoice from './MultipleChoice'
import ShortAnswer from './ShortAnswer'
import Signature from './Signature'
import SingleChoice from './SingleChoice'
import TextBlock from './TextBlock'
import TravelDestination from './TravelDestination'
import VaccineHistory from './VaccineHistory'
import VaccineScheduler from './VaccineScheduler'

export default {
  component: MedicalForm,
  title: 'UI/Medical Form',
}

export const HeadingForm = () => <Heading />
export const ShortAnswerForm = () => <ShortAnswer />
export const LongAnswerForm = () => <LongAnswer />
export const SingleChoiceForm = () => <SingleChoice />
export const TextBlockForm = () => <TextBlock />
export const MultipleChoicesForm = () => <MultipleChoice />
export const DropdownForm = () => <Dropdown />
export const SignatureForm = () => <Signature />
export const DrawingForm = () => <Drawing />
export const ConditionsForm = () => <Conditions />
export const DrugsForm = () => <Drugs />
export const TravelDestinationForm = () => <TravelDestination />
export const LabTestForm = () => <LabTest />
export const VaccineHistoryForm = () => <VaccineHistory />
export const VaccineSchedulerForm = () => <VaccineScheduler />
export const DobForm = () => <Dob />
export const InnerHeadingForm = () => <InnerHeading required={false} />
export const InnerShortAnswerForm = () => <InnerShortAnswer required={false} />
export const InnerLongAnswerForm = () => <InnerLongAnswer required={false} />
export const InnerTextBlockForm = () => <InnerTextBlock required={false} />
export const InnerVaccineSchedulerForm = () => (
  <InnerVaccineScheduler required={false} />
)
export const InnerVaccineHistoryForm = () => (
  <InnerVaccineHistory required={false} />
)
export const InnerLabTestForm = () => <InnerLabTest required={true} />
export const InnerConditionsForm = () => <InnerConditions required={false} />
export const InnerDrugsForm = () => <InnerDrugs required={false} />
export const InnerTravelDestinationForm = () => (
  <InnerTravelDestination required={false} />
)
export const InnerSingleChoiceForm = () => (
  <InnerSingleChoice required={false} />
)
export const InnerDropdownForm = () => <InnerDropdown required={true} />
export const InnerMultiChoiceForm = () => <InnerMultiChoice required={true} />
export const InnerDrawingBlockForm = () => <InnerDrawing required={false} />
export const InnerSignatureForm = () => <InnerSignature required={false} />
export const InnerDobForm = () => <InnerDob required={false} />
export const InnerGenderForm = () => <InnerGender required={false} />

export const CustomEmailMarketingForm = () => <CustomEmailMarketing />
export const CustomSmsTextMarketingForm = () => <CustomSmsTextMarketing />
export const CustomPhoneCallForm = () => <CustomPhoneCall />
export const CustomLetterMarketingForm = () => <CustomLetterMarketing />
export const CustomMembershipNumberForm = () => <CustomMembershipNumber />
export const CustomAuthorizationCodeForm = () => <CustomAuthorizationCode />
export const CustomCompanyForm = () => <CustomCompany />
export const CustomDobForm = () => <CustomDob />
export const CustomGenderForm = () => <CustomGender />
export const CustomPhysicalAddressForm = () => <CustomPhysicalAddress />
export const CustomPostalAddressForm = () => <CustomPostalAddress />
export const CustomReferredByForm = () => <CustomReferredBy />
export const CustomTelephoneNumberForm = () => <CustomTelephoneNumber />

export const SidebarBasicHeading = () => <LeftSidebarBasicHeading />
export const SidebarBasicShortAnswer = () => <LeftSidebarBasicShortAnswer />
export const SidebarBasicLongAnswer = () => <LeftSidebarBasicLongAnswer />
export const SidebarBasicTextBlock = () => <LeftSidebarBasicTextBlock />
export const SidebarBasicSingleChoice = () => <LeftSidebarBasicSingleChoice />
export const SidebarBasicCheckBox = () => <LeftSidebarBasicCheckBox />
export const SidebarBasicDropDown = () => <LeftSidebarBasicDropDown />
export const SidebarBasicDrawing = () => <LeftSidebarBasicDrawing />
export const SidebarBasicSignature = () => <LeftSidebarBasicSignature />
export const SidebarBasicMedicalConditions = () => (
  <LeftSidebarBasicMedicalConditions />
)
export const SidebarBasicDrugs = () => <LeftSidebarBasicDrugs />
export const SidebarBasicTravelDestination = () => (
  <LeftSidebarBasicTravelDestination />
)

export const SidebarBasicVaccineScheduler = () => (
  <LeftSidebarBasicVaccineScheduler />
)
export const SidebarBasicVaccineHistory = () => (
  <LeftSidebarBasicVaccineHistory />
)
export const SidebarBasicLabTest = () => <LeftSidebarBasicLabTest />
export const SidebarCustomEmailMarketing = () => (
  <LeftSidebarCustomEmailMarketing />
)
export const SidebarCustomSmsTextMarketing = () => (
  <LeftSidebarCustomSmsTextMarketing />
)
export const SidebarCustomPhoneCall = () => <LeftSidebarCustomPhoneCall />
export const SidebarCustomLetterMarketing = () => (
  <LeftSidebarCustomLetterMarketing />
)
export const SidebarCustomMembershipNumber = () => (
  <LeftSidebarCustomMembershipNumber />
)
export const SidebarCustomAuthorizationCode = () => (
  <LeftSidebarCustomAuthorizationCode />
)
export const SidebarCustomCompany = () => <LeftSidebarCustomCompany />
export const SidebarCustomDob = () => <LeftSidebarCustomDob />
export const SidebarCustomGender = () => <LeftSidebarCustomGender />
export const SidebarCustomPhysicalAddress = () => (
  <LeftSidebarCustomPhysicalAddress />
)
export const SidebarCustomPostalAddress = () => (
  <LeftSidebarCustomPostalAddress />
)
export const SidebarCustomReferredBy = () => <LeftSidebarCustomReferredBy />
export const SidebarCustomTelephoneNumber = () => (
  <LeftSidebarCustomTelephoneNumber />
)
