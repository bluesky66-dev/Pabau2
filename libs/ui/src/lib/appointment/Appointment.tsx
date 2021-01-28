import React, { FC } from 'react'

import styles from './Appointment.module.less'
import { Button } from '@pabau/ui'
import iconAppoint from '../../assets/images/icon-appoint.svg'

interface P {
  title?: string
  iconPath?: string
  appointDate?: string
  service?: string
  name?: string
  content?: string
  address?: string
  note?: string
  medicalHistory?: string
  information?: string
  displayPolicy?: boolean
  showEmployeeName?: boolean
  showService?: boolean
  addMedicalHistoryBtn?: boolean
  requestConfirmation?: true
  allowRescheduling?: true
  allowCancellation?: true
  backgroundColor?: string
  buttonColor?: string
}

export const Appointment: FC<P> = ({
  title,
  iconPath,
  appointDate,
  service,
  name,
  content,
  address,
  note,
  medicalHistory,
  information,
  displayPolicy,
  showEmployeeName,
  showService,
  addMedicalHistoryBtn,
  backgroundColor,
}) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={styles.imageContainer}>
        <img src={iconPath} width="83" height="39" alt="" />
      </div>

      <span className={styles.titleText}>{title}</span>
      <div>
        <hr className={styles.wholeLine} />
      </div>

      <div className={styles.appointContainer}>
        <img className={styles.iconAppoint} src={iconAppoint} alt="" />
        <span className={styles.arial12FontBlack}> Appoinment details:</span>
      </div>

      <div className={styles.rescheduleContainer}>
        <span className={styles.arial13FontBlack}>{appointDate}</span>
        <Button type="link">Reschedule</Button>
      </div>
      <div className={styles.serviceContainer}>
        {showService && (
          <span className={styles.arial13FontBlack}>
            {service} with {showEmployeeName && name}
          </span>
        )}
      </div>

      <div className={styles.contentContainer}>
        <span className={styles.arial13FontBlackBold}>{content}</span>
      </div>

      <div className={styles.addressContainer}>
        <span className={styles.arial10FontGray}>{address}</span>
      </div>

      <div className={styles.appointBtnContainer}>
        <Button className={styles.cancelAppointBtn}>Cancel appointment*</Button>
        <Button className={styles.confirmAppointBtn} type="primary">
          Confirm appointment
        </Button>
      </div>

      {displayPolicy && (
        <>
          <div className={styles.noteContainer}>
            <span className={styles.arial12FontBlack}>{note}</span>
          </div>

          <div className={styles.cancellationContainer}>
            <Button className={styles.cancellBtn} type="link">
              Cancellation policy
            </Button>
          </div>
        </>
      )}
      {addMedicalHistoryBtn && (
        <>
          <div>
            <hr className={styles.wholeLineBottom} />
          </div>

          {medicalHistory !== '' && (
            <div>
              <span>{medicalHistory}</span>
            </div>
          )}

          <div className={styles.medicalHistoryContainer}>
            <Button>Complete Medical History</Button>
          </div>
        </>
      )}

      {information !== '' && (
        <div>
          <span>{information}</span>
        </div>
      )}
    </div>
  )
}

export default Appointment
