import React, { FC, useEffect, useState } from 'react'
import { ClientNotification } from '@pabau/ui'
import NotificationPreview from './NotificationPreview'
import StandardTab from './StandardTab'

const Index: FC = () => {
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

  useEffect(() => {
    console.log('object')
  })
  return (
    <ClientNotification
      tabComponent={
        <StandardTab
          requestConfirmHook={[requestConfirmation, setRequestConfirmation]}
          allowReschedulingHook={[allowRescheduling, setAllowRescheduling]}
          allowCancellationHook={[allowCancellation, setAllowCancellation]}
          displayPolicyHook={[displayPolicy, setDisplayPolicy]}
          showServiceHook={[showService, setShowService]}
          showEmployeeNameHook={[showEmployeeName, setShowEmployeeName]}
          addMedicalHisButtonHook={[addMedicalHisButton, setAddMedicalHisButton]}
          selectLanguageHook={[selectLanguage, setSelectLanguage]}
          backGroundColorHook={[backGroundColor, setBackGroundColor]}
          buttonColorHook={[buttonColor, setButtonColor]}
        />
      }
      previewComponent={
        <NotificationPreview
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
        />
      }
    />
  )
}

export default Index
