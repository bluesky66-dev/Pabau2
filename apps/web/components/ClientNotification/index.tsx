import React, { FC, useState } from 'react'
import { ClientNotification, Standard, Appointment, Smstext } from '@pabau/ui'

const Index: FC = () => {
  const [enableReminder, setEnableReminder] = useState(false)
  const [smartDelivery, setSmartDelivery] = useState(false)
  const [requestConfirmation, setRequestConfirmation] = useState(true)
  const [allowRescheduling, setAllowRescheduling] = useState(true)
  const [allowCancellation, setAllowCancellation] = useState(true)
  const [displayPolicy, setDisplayPolicy] = useState(true)
  const [showService, setShowService] = useState(true)
  const [showEmployeeName, setShowEmployeeName] = useState(true)
  const [addMedicalHisButton, setAddMedicalHisButton] = useState(true)
  const [backGroundColor, setBackGroundColor] = useState('')
  const [buttonColor, setButtonColor] = useState('')
  const [selectLanguage, setSelectLanguage] = useState('en')
  const [medicalMessage, setMedicalMessage] = useState('')
  const [informationMessage, setInformationMessage] = useState('')

  return (
    <ClientNotification
      tabComponent={
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
        />
      }
      previewComponent={
        <Appointment
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
      }
      smsComponent={
        <Smstext
        // enableReminder={enableReminder}
        // smartDelivery={smartDelivery}
        />
      }
    />
  )
}

export default Index
