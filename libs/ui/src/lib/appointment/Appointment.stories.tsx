import React from 'react'
import Appointment from './Appointment'
import iconEmailTemplate from '../../assets/images/icon-email-template.svg'

export default {
  component: Appointment,
  title: 'Notification/EmailTemplate',
  args: {
    title: '',
    iconPath: '',
    appointDate: '',
    service: '',
    name: '',
    content: '',
    address: '',
    note: '',
    medicalHistory: '',
    information: '',
    displayPolicy: true,
    showEmployeeName: true,
    showService: true,
    addMedicalHistoryBtn: true,
    requestConfirmation: true,
    allowRescheduling: true,
    allowCancellation: true,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    iconPath: { control: { type: 'text' } },
    appointDate: { control: { type: 'text' } },
    service: { control: { type: 'text' } },
    name: { control: { type: 'text' } },
    content: { control: { type: 'text' } },
    address: { control: { type: 'text' } },
    note: { control: { type: 'text' } },
    medicalHistory: { control: { type: 'text' } },
    information: { control: { type: 'text' } },
    requestConfirmation: { control: { type: 'boolean' } },
    allowRescheduling: { control: { type: 'boolean' } },
    allowCancellation: { control: { type: 'boolean' } },
    displayPolicy: { control: { type: 'boolean' } },
    showService: { control: { type: 'boolean' } },
    showEmployeeName: { control: { type: 'boolean' } },
    addMedicalHistoryBtn: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
    backgroundColor: {
      control: { type: 'color' },
    },
    buttonColor: {
      control: { type: 'color' },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const story = ({ ...args }) => <Appointment {...args} />

export const EmailTemplate = story.bind({})
EmailTemplate.args = {
  title: 'Hi Kristy, see you soon!',
  iconPath: iconEmailTemplate,
  appointDate: 'Monday, 16 November at 11:00',
  service: 'Consultation (30mins)',
  name: 'John Smith',
  content: 'M-A Hair Dressing & Spa',
  address: '574 Beverly Road, H3454, England, GB',
  note: '*Please, avoid cancelling within 48 hours notice',
  medicalHistory: '',
  information: '',
  displayPolicy: true,
  showEmployeeName: true,
  showService: true,
  addMedicalHistoryBtn: true,
  requestConfirmation: true,
  allowRescheduling: true,
  allowCancellation: true,
  backgroundColor: '#ffffff',
  // buttonColor: '#ffffff',
}
