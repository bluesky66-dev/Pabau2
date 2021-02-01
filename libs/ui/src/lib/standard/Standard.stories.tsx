import React, { useState } from 'react'

import Standard from './Standard'

export default {
  component: Standard,
  title: 'Notification/Standardtab',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const Story: React.FC = ({ ...args }) => {
  const [enableReminder, SetEnableReminder] = useState(true)
  const [smartDelivery, SetSmartDelivery] = useState(true)
  const [requestConfirmation, SetRequestConfirmation] = useState(true)
  const [allowRescheduling, SetAllowRescheduling] = useState(true)
  const [allowCancellation, SetAllowCancellation] = useState(true)
  const [displayPolicy, SetDisplayPolicy] = useState(true)
  const [showService, SetShowService] = useState(true)
  const [showEmployeeName, SetShowEmployeeName] = useState(true)
  const [addMedicalHisButton, SetAddMedicalHisButton] = useState(true)
  const [backGroundColor, SetBackGroundColor] = useState('')
  const [buttonColor, SetButtonColor] = useState('')
  const [selectLanguage, SetSelectLanguage] = useState('EN')
  const [medicalMessage, setMedicalMessage] = useState('')
  const [informationMessage, setInformationMessage] = useState('')

  return (
    <div style={{ width: '392px' }}>
      <Standard
        enableReminderHook={[enableReminder, SetEnableReminder]}
        smartDeliveryHook={[smartDelivery, SetSmartDelivery]}
        requestConfirmHook={[requestConfirmation, SetRequestConfirmation]}
        allowReschedulingHook={[allowRescheduling, SetAllowRescheduling]}
        allowCancellationHook={[allowCancellation, SetAllowCancellation]}
        displayPolicyHook={[displayPolicy, SetDisplayPolicy]}
        showServiceHook={[showService, SetShowService]}
        showEmployeeNameHook={[showEmployeeName, SetShowEmployeeName]}
        addMedicalHisButtonHook={[addMedicalHisButton, SetAddMedicalHisButton]}
        selectLanguageHook={[selectLanguage, SetSelectLanguage]}
        backGroundColorHook={[backGroundColor, SetBackGroundColor]}
        buttonColorHook={[buttonColor, SetButtonColor]}
        informationMessageHook={[informationMessage, setInformationMessage]}
        medicalMessageHook={[medicalMessage, setMedicalMessage]}
      />
      <p>{medicalMessage}</p>
    </div>
  )
}

export const Standardtab = Story.bind({})
Standardtab.args = {}
