import React, { FC, useEffect, useState } from 'react'
import MedicalFilter, { MedicalFilterType } from './MedicalFilter'

export default {
  title: 'UI/MedicalFilter',
  argTypes: {
    language: {
      control: {
        type: 'select',
        options: [
          'English (UK)',
          'English (US)',
          'French',
          'Spanish',
          'Arabic',
          'Bulgarian',
          'Czech',
          'Danish',
          'Hungarian',
          'Latvian',
          'Norwegian',
          'Polish',
          'Spannish',
          'Swedish',
          'Romanian',
          'Russian',
        ],
      },
    },
    status: {
      control: {
        type: 'select',
        options: ['active', 'inactive', 'require_setup'],
      },
    },
    medicalHistory: {
      control: { type: 'boolean' },
    },
    consent: {
      control: { type: 'boolean' },
    },
    treatmentForm: {
      control: { type: 'boolean' },
    },
    epaper: {
      control: { type: 'boolean' },
    },
    presciption: {
      control: { type: 'boolean' },
    },
    labForm: {
      control: { type: 'boolean' },
    },
  },
}

const defaultFilter = {
  language: 'English (UK)',
  status: 'require_setup',
  medicalHistory: false,
  consent: false,
  treatmentForm: false,
  epaper: false,
  presciption: false,
  labForm: false,
}

interface MedicalFilterStoryProps {
  language: 'English (UK)'
  status: 'active' | 'inactive' | 'require_setup'
  medicalHistory: boolean
  consent: boolean
  treatmentForm: boolean
  epaper: boolean
  presciption: boolean
  labForm: boolean
}

const MedicalFilterStory: FC<MedicalFilterStoryProps> = (props) => {
  const {
    language,
    status,
    medicalHistory,
    consent,
    treatmentForm,
    epaper,
    presciption,
    labForm,
  } = props
  const [filter, setFilter] = useState<MedicalFilterType>({
    language,
    status,
    formtype: {
      medicalHistory,
      consent,
      treatmentForm,
      epaper,
      presciption,
      labForm,
    },
  })
  useEffect(() => {
    const tempFilter: MedicalFilterType = {
      language,
      status,
      formtype: {
        medicalHistory,
        consent,
        treatmentForm,
        epaper,
        presciption,
        labForm,
      },
    }
    setFilter(tempFilter)
  }, [
    language,
    status,
    medicalHistory,
    consent,
    treatmentForm,
    epaper,
    presciption,
    labForm,
  ])
  return (
    <MedicalFilter filter={filter} onApply={(filter) => console.log(filter)} />
  )
}

export const Basic = MedicalFilterStory.bind({})
Basic.args = { ...defaultFilter }
