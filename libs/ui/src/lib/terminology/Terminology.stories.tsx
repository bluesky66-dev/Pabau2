import React from 'react'
import Terminology, { TerminologyProps } from './Terminology'

export default {
  component: Terminology,
  title: 'Business Details/Terminology',
  args: {},
  argTypes: {},
}

const TerminologyStory = ({ ...args }: TerminologyProps) => {
  return <Terminology {...args} />
}

export const Basic = TerminologyStory.bind({})
Basic.args = {
  config: [
    {
      title: 'What do you call people who attend appointments with you?',
      items: [
        {
          key: 'Singular',
          value: 'Patient',
        },
        {
          key: 'Plural',
          value: 'Patients',
        },
      ],
    },
    {
      title: 'What do you call bookings with multiple attendees?',
      items: [
        {
          key: 'Singular',
          value: 'Class',
        },
        {
          key: 'Plural',
          value: 'Classes',
        },
      ],
    },
    {
      title: 'What do you call employees who perform services?',
      items: [
        {
          key: 'Singular',
          value: 'Employee',
        },
        {
          key: 'Plural',
          value: 'Employees',
        },
      ],
    },
    {
      title: 'What do you call people who perform classes?',
      items: [
        {
          key: 'Singular',
          value: 'Teacher',
        },
        {
          key: 'Plural',
          value: 'Teachers',
        },
      ],
    },
    {
      title: 'What do you call TAX?',
      items: [
        {
          key: 'Singular',
          value: 'VAT',
        },
      ],
    },
  ],
  optIns: [
    {
      title: 'For Clients',
      items: [
        {
          key: 'Postal',
          value: 'Whould you like to receive postal communications?',
        },
        {
          key: 'SMS',
          value: 'Whould you like to receive SMS messages from us?',
        },
        {
          key: 'Email',
          value: 'Whould you like to receive email communications?',
        },
        {
          key: 'Phone',
          value: 'Whould you like to receive phone calls?',
        },
      ],
    },
    {
      title: 'For Leads',
      items: [
        {
          key: 'Postal',
          value: 'Whould you like to receive postal communications?',
        },
        {
          key: 'SMS',
          value: 'Whould you like to receive SMS messages from us?',
        },
        {
          key: 'Email',
          value: 'Whould you like to receive email communications?',
        },
        {
          key: 'Phone',
          value: 'Whould you like to receive phone calls?',
        },
      ],
    },
  ],
  onSave: (val) => {
    console.log(val)
  },
}
