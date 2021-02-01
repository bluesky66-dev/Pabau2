import React, { FC, useState } from 'react'
import { ClientNotification } from '@pabau/ui'
// eslint-disable-next-line
import Standard from '../../../../libs/ui/src/lib/standard/Standard'
// eslint-disable-next-line
import Appointment from '../../../../libs/ui/src/lib/appointment/Appointment'
import Smstext from 'libs/ui/src/lib/smstext/Smstext'

const Index: FC = () => {
  const [enableReminder, SetEnableReminder] = useState(false)
  const [smartDelivery, SetSmartDelivery] = useState(false)
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
          enableReminderHook={[enableReminder, SetEnableReminder]}
          smartDeliveryHook={[smartDelivery, SetSmartDelivery]}
          requestConfirmHook={[requestConfirmation, setRequestConfirmation]}
          allowReschedulingHook={[allowRescheduling, setAllowRescheduling]}
          allowCancellationHook={[allowCancellation, setAllowCancellation]}
          displayPolicyHook={[displayPolicy, setDisplayPolicy]}
          showServiceHook={[showService, setShowService]}
          showEmployeeNameHook={[showEmployeeName, setShowEmployeeName]}
          addMedicalHisButtonHook={[
            addMedicalHisButton,
            setAddMedicalHisButton,
          ]}
          selectLanguageHook={[selectLanguage, setSelectLanguage]}
          backGroundColorHook={[backGroundColor, setBackGroundColor]}
          buttonColorHook={[buttonColor, setButtonColor]}
          informationMessageHook={[informationMessage, setInformationMessage]}
          medicalMessageHook={[medicalMessage, setMedicalMessage]}
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
