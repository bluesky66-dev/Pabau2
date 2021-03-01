import React, { FC, useState, forwardRef } from 'react'
import { ClientNotification, Standard, Appointment, Smstext } from '@pabau/ui'
import CancelAppointmentPreview from '../../pages/client-notifications/cancelled-appointment/CancelAppointmentPreview'
import NoShowAppointmentPreview from '../../pages/client-notifications/noshow-appointment/NoShowAppointmentPreview'
import NewAppointmentPreview from '../../pages/client-notifications/new-appointment/NewAppointmentPreview'
import RescheduleAppointmentPreview from '../../pages/client-notifications/rescheduled-appointment/RescheduleAppointmentPreview'
import BookedOntoClassPreview from '../../pages/client-notifications/class-booked/BookedOntoClassPreview'
import WaitListPreview from '../../pages/client-notifications/waitlist/WaitListPreview'
import ClassSpotAvailablePreview from '../../pages/client-notifications/class-spot-available/ClassSpotAvailablePreview'

interface P {
  onSeletedTab: (number) => void
  isTabComponent?: boolean
  isPreviewComponent?: boolean
  isSmsComponent?: boolean
  displayRadioGroup?: boolean
  displayButtons?: boolean
  ref?: unknown
  standardMessage?: string
  hideReminderTimeFrameTabPane?: boolean
  hideRequestConfirmationOption?: boolean
  hideMedicalHistoryOption?: boolean
  hideAllowReschedulingOption?: boolean
  hideAllowCancellationOption?: boolean
  hideDisplayPolicyOption?: boolean
  hideServiceOption?: boolean
  hideEmployeeNameOption?: boolean
  type?: string
  smsCustom?: string
}

// eslint-disable-next-line react/display-name
const Index: FC<P> = forwardRef(
  (
    {
      onSeletedTab,
      standardMessage,
      hideReminderTimeFrameTabPane = false,
      hideRequestConfirmationOption = false,
      hideMedicalHistoryOption = false,
      hideAllowReschedulingOption = false,
      hideAllowCancellationOption = false,
      hideDisplayPolicyOption = false,
      hideServiceOption = false,
      hideEmployeeNameOption = false,
      type = '',
      smsCustom = '',
      isTabComponent = true,
      isPreviewComponent = true,
      isSmsComponent = true,
      displayRadioGroup = true,
      displayButtons = true,
    },
    ref
  ) => {
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
    const [standardTapIndex, setStandardTap] = useState('1')
    const [hideAppearanceTabPane, setHideAppearanceTabPane] = useState(true)
    const [smsMessage, setSmsMessage] = useState(smsCustom || 'Hi, Kristy')

    const [activeSocialIcons, setActiveSocialIcons] = React.useState([])
    const [disableCustomTab, setDisableCustomTab] = useState(false)

    React.useImperativeHandle(ref, () => ({
      propsData: () => {
        return {
          requestConfirm: requestConfirmation,
          allowRescheduling,
          allowCancellation,
          displayPolicy,
          showService,
          showEmployeeName,
          addMedicalHisButton,
          selectLanguage,
          backGroundColor,
          buttonColor,
          informationMessage,
          medicalMessage,
          standardTapIndex,
          activeSocialIcons,
        }
      },
    }))
    function handleSelectedTab(value) {
      onSeletedTab(value)
    }
    return (
      <ClientNotification
        onSmsTabChanged={(value) => {
          if (value === 2) {
            console.log('this is smstext tab')
            setDisableCustomTab(true)
            handleSelectedTab(value)
            setEnableReminder(true)
            setSmartDelivery(true)
            setHideAppearanceTabPane(false)
            setStandardTap('1')
          } else {
            console.log('this is email tab')
            handleSelectedTab(value)
            setEnableReminder(false)
            setSmartDelivery(false)
            setHideAppearanceTabPane(true)
            setDisableCustomTab(false)
          }
        }}
        tabComponent={
          isTabComponent && (
            <Standard
              disableCustomTab={disableCustomTab}
              onStandardTabChanged={(value) => setStandardTap(value)}
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
              hideAppearanceTabPane={hideAppearanceTabPane}
              smsMessage={smsMessage}
              onSmsMessage={(value) => setSmsMessage(value)}
              onActiveSocialIcon={(value) => {
                setActiveSocialIcons(value.map((e) => e))
              }}
              standardMessage={standardMessage}
              hideRequestConfirmationOption={hideRequestConfirmationOption}
              hideAllowReschedulingOption={hideAllowReschedulingOption}
              hideAllowCancellationOption={hideAllowCancellationOption}
              hideDisplayPolicyOption={hideDisplayPolicyOption}
              hideMedicalHistoryOption={hideMedicalHistoryOption}
              hideReminderTimeFrameTabPane={hideReminderTimeFrameTabPane}
              hideEmployeeNameOption={hideEmployeeNameOption}
              hideServiceOption={hideServiceOption}
            />
          )
        }
        previewComponent={
          isPreviewComponent &&
          (type === 'cancel' || type === 'cancelClassBooking' ? (
            <CancelAppointmentPreview
              standardTapIndex={standardTapIndex}
              backGroundColor={backGroundColor}
              activeSocialIcons={activeSocialIcons}
              selectLanguage={selectLanguage}
              showService={showService}
              showEmployeeName={showEmployeeName}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              type={type}
            />
          ) : type === 'noShowAppointment' || type === 'missedAClass' ? (
            <NoShowAppointmentPreview
              standardTapIndex={standardTapIndex}
              backGroundColor={backGroundColor}
              activeSocialIcons={activeSocialIcons}
              selectLanguage={selectLanguage}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
            />
          ) : type === 'newAppointment' ? (
            <NewAppointmentPreview
              requestConfirm={requestConfirmation}
              allowRescheduling={allowRescheduling}
              allowCancellation={allowCancellation}
              displayPolicy={displayPolicy}
              showService={showService}
              showEmployeeName={showEmployeeName}
              selectLanguage={selectLanguage}
              backGroundColor={backGroundColor}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              standardTapIndex={standardTapIndex}
              activeSocialIcons={activeSocialIcons}
            />
          ) : type === 'reschedule' || type === 'classReschedule' ? (
            <RescheduleAppointmentPreview
              requestConfirm={requestConfirmation}
              allowRescheduling={allowRescheduling}
              allowCancellation={allowCancellation}
              displayPolicy={displayPolicy}
              showService={showService}
              showEmployeeName={showEmployeeName}
              selectLanguage={selectLanguage}
              backGroundColor={backGroundColor}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              standardTapIndex={standardTapIndex}
              activeSocialIcons={activeSocialIcons}
              addMedicalHisButton={addMedicalHisButton}
              medicalMessage={medicalMessage}
            />
          ) : type === 'bookedOntoClass' ? (
            <BookedOntoClassPreview
              standardTapIndex={standardTapIndex}
              backGroundColor={backGroundColor}
              activeSocialIcons={activeSocialIcons}
              selectLanguage={selectLanguage}
              showService={showService}
              showEmployeeName={showEmployeeName}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              type={type}
            />
          ) : type === 'waitList' ? (
            <WaitListPreview
              standardTapIndex={standardTapIndex}
              backGroundColor={backGroundColor}
              activeSocialIcons={activeSocialIcons}
              selectLanguage={selectLanguage}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              type={type}
            />
          ) : type === 'classSpotAvailable' ? (
            <ClassSpotAvailablePreview
              standardTapIndex={standardTapIndex}
              backGroundColor={backGroundColor}
              activeSocialIcons={activeSocialIcons}
              selectLanguage={selectLanguage}
              buttonColor={buttonColor}
              informationMessage={informationMessage}
              type={type}
            />
          ) : (
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
              standardTapIndex={standardTapIndex}
              activeSocialIcons={activeSocialIcons}
            />
          ))
        }
        smsComponent={
          isSmsComponent && (
            <Smstext
              smsMessage={smsMessage}
              // enableReminder={enableReminder}
              // smartDelivery={smartDelivery}
            />
          )
        }
        displayButtons={displayButtons}
        displayRadioGroup={displayRadioGroup}
      />
    )
  }
)

export default Index
