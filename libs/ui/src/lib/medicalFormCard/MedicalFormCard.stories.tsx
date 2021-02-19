import React from 'react'
import { FilePdfOutlined } from '@ant-design/icons'

import MedicalCard from './MedicalFormCard'

export default {
  component: MedicalCard,
  title: 'Basics/MedicalCardForm',
  args: {
    list: [
      {
        image: <FilePdfOutlined />,
        title: 'Wedding hair and makeup trial',
        description:
          'Helping your client find their perfect wedding day look is a lot of fun and also a big responsibility.',
        form_type: 'consent',
        tags: [],
        key: 1,
      },
      {
        image: <FilePdfOutlined />,
        title: 'Aethetics Medical History and consultation',
        description:
          'A detailed medical history is important when creating a treatment plan with a patient.',
        form_type: 'consent',
        tags: [
          {
            title: 'Aesthetics',
            key: 1,
          },
        ],
        key: 2,
      },
      {
        image: <FilePdfOutlined />,
        title: 'Covid-19 Health agreement',
        description:
          'With all the options for skincare treatments and products it’s vital to complete a thrpugh...',
        form_type: 'consent',
        tags: [
          {
            title: 'Covid',
            key: 1,
          },
        ],
        key: 3,
      },
      {
        image: <FilePdfOutlined />,
        title: 'Facial Consultation',
        description:
          'With all the options for skincare treatments and products it’s vital to complete a thrpugh...',
        form_type: 'consent',
        tags: [],
        key: 4,
      },
      {
        image: <FilePdfOutlined />,
        title: 'Consent form for beafuty records',
        description:
          'It’s important to be really transparent with your client about why you collect their...',
        form_type: '',
        tags: [
          {
            title: 'Physio',
            key: 1,
          },
          {
            title: 'Aesthetics',
            key: 2,
          },
          {
            title: 'Tag one',
            key: 3,
          },
        ],
        key: 5,
      },
      {
        image: <FilePdfOutlined />,
        title: 'Comprehensive online hair consolation',
        description:
          'Use this comprehensive form to get a detailed picture of a new client’s hair history to help....',
        form_type: 'consent',
        tags: [
          {
            title: 'Physio',
            key: 1,
          },
          {
            title: 'Aesthetics',
            key: 2,
          },
          {
            title: 'Tag one',
            key: 3,
          },
          {
            title: 'Tag Two',
            key: 4,
          },
        ],
        key: 6,
      },
    ],
    onChange: (name: string): string => {
      return name
    },
  },
  onChange: { action: 'onChange' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const MedicalFormCardStory = ({ ...args }) => <MedicalCard {...args} />

export const MedicalFormCards = MedicalFormCardStory.bind({})
