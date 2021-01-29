import React, { useState } from 'react'

import Standard from './Standard'

export default {
  component: Standard,
  title: 'Notification/DefaultStandard',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const Story: React.FC = ({ ...args }) => {
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

  return (
    <div style={{ width: '392px' }}>
      <Standard
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
      />
    </div>
  )
}

export const DefaultStandard = Story.bind({})
DefaultStandard.args = {}
