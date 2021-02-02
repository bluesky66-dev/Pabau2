/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Conditions from './Conditions'
import Dob from './Dob'
import Drawing from './Drawing'
import Dropdown from './Dropdown'
import Drugs from './Drugs'
import InnerConditions from './InnerConditions'
import InnerDob from './InnerDob'
import InnerDrawing from './InnerDrawing'
import InnerDropdown from './InnerDropdown'
import InnerDrugs from './InnerDrugs'
import InnerHeading from './InnerHeading'
import InnerLabTest from './InnerLabTest'
import InnerLongAnswer from './InnerLongAnswer'
import InnerMultiChoice from './InnerMultiChoice'
import InnerShortAnswer from './InnerShortAnswer'
import InnerSignature from './InnerSignature'
import InnerSingleChoice from './InnerSingleChoice'
import InnerTextBlock from './InnerTextBlock'
import InnerVaccineHistory from './InnerVaccineHistory'
import InnerVaccineScheduler from './InnerVaccineScheduler'
import LabTest from './LabTest'
import LongAnswer from './LongAnswer'
import MeicalForm from './MedicalForm'
import MultipleChoice from './MultipleChoice'
import ShortAnswer from './ShortAnswer'
import Signature from './Signature'
import SingleChoice from './SingleChoice'
import TravelDestination from './TravelDestination'
import VaccineHistory from './VaccineHistory'
import VaccineScheduler from './VaccineScheduler'

export default {
  component: MeicalForm,
  title: 'UI/Medical Form',
}

export const Heading = () => <MeicalForm />
export const ShortAnswerForm = () => <ShortAnswer />
export const LongAnswerForm = () => <LongAnswer />
export const SingleChoiceForm = () => <SingleChoice />
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
export const InnerSingleChoiceForm = () => (
  <InnerSingleChoice required={false} />
)
export const InnerDropdownForm = () => <InnerDropdown required={true} />
export const InnerMultiChoiceForm = () => <InnerMultiChoice required={true} />
export const InnerDrawingBlockForm = () => <InnerDrawing required={false} />
export const InnerSignatureForm = () => <InnerSignature required={false} />
export const InnerDobForm = () => <InnerDob required={false} />
