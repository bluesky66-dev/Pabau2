import React, { useState } from 'react'
import Appointment from './Appointment'
import iconEmailTemplate from '../../assets/images/icon-email-template.svg'

export default {
  component: Appointment,
  title: 'Notification/EmailTemplate',
  args: {
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
    buttonColor: '#ffffff',
    medicalMessage: '',
    informationMessage: '',
  },
  argTypes: {
    medicalMessage: { control: { type: 'text' } },
    informationMessage: { control: { type: 'text' } },
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
    displayPolicy: { control: { type: 'boolean' } },
    showEmployeeName: { control: { type: 'boolean' } },
    showService: { control: { type: 'boolean' } },
    addMedicalHistoryBtn: { control: { type: 'boolean' } },
    requestConfirmation: { control: { type: 'boolean' } },
    allowRescheduling: { control: { type: 'boolean' } },
    allowCancellation: { control: { type: 'boolean' } },
    backgroundColor: { control: { type: 'color' } },
    buttonColor: { control: { type: 'color' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

/* eslint-disable */
const story = ({ ...args }) => {
  const [requestConfirmation, SetRequestConfirmation] = useState(true)
  const [allowRescheduling, SetAllowRescheduling] = useState(true)
  const [allowCancellation, SetAllowCancellation] = useState(true)
  const [displayPolicy, SetDisplayPolicy] = useState(true)
  const [showService, SetShowService] = useState(true)
  const [showEmployeeName, SetShowEmployeeName] = useState(true)
  const [addMedicalHisButton, SetAddMedicalHisButton] = useState(true)
  const [backGroundColor, SetBackGroundColor] = useState('')
  const [buttonColor, SetButtonColor] = useState('')
  const [selectLanguage, SetSelectLanguage] = useState('en')
  const [medicalMessage, SetMedicalMessage] = useState('')
  const [informationMessage, SetInformationMessage] = useState('')
  return (
    <div style={{ width: '400px' }}>
      <Appointment
        {...args}
        requestConfirm={requestConfirmation}
        allowRescheduling={allowRescheduling}
        allowCancellation={allowCancellation}
        displayPolicy={displayPolicy}
        showService={showService}
        showEmployeeName={showEmployeeName}
        addMedicalHisButton={addMedicalHisButton}
        selectLanguage={selectLanguage}
        backGroundColor={backGroundColor}
        buttonColor={buttonColor}
        informationMessage={informationMessage}
        medicalMessage={medicalMessage}
      />
    </div>
  )
}

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
  buttonColor: '#ffffff',
  informationMessage: '',
  medicalMessage: '',
}
