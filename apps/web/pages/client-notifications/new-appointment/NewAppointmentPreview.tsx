import React, { FC } from 'react'
import { Button, Appointment } from '@pabau/ui'
import { getFlag } from '../../../mocks/utils'
import styles from './index.module.less'

interface P {
  requestConfirm?: boolean
  allowRescheduling?: boolean
  allowCancellation?: boolean
  displayPolicy?: boolean
  showService?: boolean
  showEmployeeName?: boolean
  selectLanguage: string
  backGroundColor?: string
  buttonColor?: string
  informationMessage?: string
  standardTapIndex?: string
  activeSocialIcons?: string[]
}

const NewAppointmentPreview: FC<P> = ({
  requestConfirm,
  allowRescheduling,
  allowCancellation,
  displayPolicy,
  showService,
  showEmployeeName,
  selectLanguage,
  informationMessage,
  backGroundColor,
  buttonColor,
  standardTapIndex,
  activeSocialIcons = [],
}) => {
  return (
    <div>
      {standardTapIndex === '1' ? (
        <Appointment
          requestConfirm={requestConfirm}
          allowRescheduling={allowRescheduling}
          allowCancellation={allowCancellation}
          displayPolicy={displayPolicy}
          showService={showService}
          showEmployeeName={showEmployeeName}
          addMedicalHisButton={false}
          selectLanguage={selectLanguage}
          backGroundColor={backGroundColor}
          buttonColor={buttonColor}
          informationMessage={informationMessage}
          standardTapIndex={standardTapIndex}
          activeSocialIcons={activeSocialIcons}
          type={'new'}
        />
      ) : (
        <div
          className={styles.cardAddTemplateContainer}
          style={{ backgroundColor: backGroundColor }}
        >
          <Button type="default" className={styles.addTemplateTxt}>
            <img src={getFlag(selectLanguage)} alt="" />
            &nbsp;+ Add Template
          </Button>
        </div>
      )}
    </div>
  )
}

export default NewAppointmentPreview
