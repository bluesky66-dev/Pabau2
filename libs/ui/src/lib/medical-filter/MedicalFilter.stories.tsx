import React, { FC } from 'react'
import MedicalFilter, { MedicalFilterProps } from './MedicalFilter'

export default {
  component: MedicalFilter,
  title: 'UI/MedicalFilter',
}

const defaultFilter = {
  language: 'English (UK)',
  status: false,
  formtype: {
    medicalHistory: false,
    consent: false,
    treatmentForm: false,
    epaper: false,
    presciption: false,
    labForm: false,
  },
}

const MedicalFilterStory: FC<MedicalFilterProps> = ({ ...props }) => (
  <MedicalFilter {...props} />
)

export const Basic = MedicalFilterStory.bind({})
Basic.args = {
  filter: defaultFilter,
  onApply: (filter) => console.log(filter),
}
