/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import Conditions from './Conditions'
import Dob from './Dob'
import Drawing from './Drawing'
import Dropdown from './Dropdown'
import Drugs from './Drugs'
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
