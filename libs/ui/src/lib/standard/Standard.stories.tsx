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
  const [enableReminder, setEnableReminder] = useState(true)
  const [smartDelivery, setSmartDelivery] = useState(true)
  const [requestConfirmation, setRequestConfirmation] = useState(true)
  const [allowRescheduling, setAllowRescheduling] = useState(true)
  const [allowCancellation, setAllowCancellation] = useState(true)
  const [displayPolicy, setDisplayPolicy] = useState(true)
  const [showService, setShowService] = useState(true)
  const [showEmployeeName, setShowEmployeeName] = useState(true)
  const [addMedicalHisButton, setAddMedicalHisButton] = useState(true)
  const [backGroundColor, setBackGroundColor] = useState('')
  const [buttonColor, setButtonColor] = useState('')
  const [selectLanguage, setSelectLanguage] = useState('EN')
  const [medicalMessage, setMedicalMessage] = useState('')
  const [informationMessage, setInformationMessage] = useState('')
  const [smsMessage, setSmsMessage] = useState('Hi, Kristy')

  return (
    <div style={{ width: '392px' }}>
      <Standard
        enableReminder={enableReminder}
        onEnableReminder={(value) => setEnableReminder(value)}
        smartDelivery={smartDelivery}
        onSmartDelivery={(value) => setSmartDelivery(value)}
        requestConfirmation={requestConfirmation}
        onRequestConfirmation={(value) => setRequestConfirmation(value)}
        allowRescheduling={allowRescheduling}
        onAllowRescheduling={(value) => setAllowRescheduling(value)}
        allowCancellation={allowCancellation}
        onAllowCancellation={(value) => setAllowCancellation(value)}
        displayPolicy={displayPolicy}
        onDisplayPolicy={(value) => setDisplayPolicy(value)}
        showService={showService}
        onShowService={(value) => setShowService(value)}
        showEmployeeName={showEmployeeName}
        onShowEmployeeName={(value) => setShowEmployeeName(value)}
        addMedicalHisButton={addMedicalHisButton}
        onAddMedicalHisButton={(value) => setAddMedicalHisButton(value)}
        backGroundColor={backGroundColor}
        onBackGroundColor={(value) => setBackGroundColor(value)}
        buttonColor={buttonColor}
        onButtonColor={(value) => setButtonColor(value)}
        selectLanguage={selectLanguage}
        onSelectLanguage={(value) => setSelectLanguage(value)}
        medicalMessage={medicalMessage}
        onMedicalMessage={(value) => setMedicalMessage(value)}
        informationMessage={informationMessage}
        onInformationMessage={(value) => setInformationMessage(value)}
        onStandardTabChanged={(value) => {
          console.log(value)
        }}
        hideAppearanceTabPane={true}
        smsMessage={smsMessage}
        onSmsMessage={(value) => setSmsMessage(value)}
      />
      <p>{medicalMessage}</p>
    </div>
  )
}

export const Standardtab = Story.bind({})
Standardtab.args = {}
