import React, { FC, useState, useEffect } from 'react'
import { Row, Col, Divider } from 'antd'
import { Button } from '@pabau/ui'
import styles from './Notification.module.less'
import { ReactComponent as NormalClinicLogo } from './normal-clinic-logo.svg'
import { ReactComponent as Calendar } from './calendar.svg'

interface LangData {
  [key: string]: Email
}

interface Email {
  greeting: string
  detail: string
  date: string
  reschedule: string
  service: string
  employee: string
  title: string
  address: string
  cancelButton: string
  confirmButton: string
  policy: string
  cancelPolicy: string
  complete: string
}

const langData: LangData = {
  en: {
    greeting: 'Hi Kristy, see you soon!',
    detail: 'Appointment details:',
    date: 'Monday, 16 November at 11:00',
    reschedule: 'Reschedule',
    service: 'Consultation (30 mins)',
    employee: ' with John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Cancel appointment',
    confirmButton: 'Confirm appointment',
    policy: '*Please, avoid cancelling within 48 hours notice',
    cancelPolicy: 'Cancellation policy',
    complete: 'Complete MedicalHistory',
  },
  sp: {
    greeting: 'Hola Kristy, ¡hasta pronto!',
    detail: 'Detalles de la cita:',
    date: 'Lunes 16 de noviembre a las 11:00',
    reschedule: 'Reprogramar',
    service: 'Consulta (30 minutos)',
    employee: ' con John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, Inglaterra, GB',
    cancelButton: 'Cancelar cita',
    confirmButton: 'Confirmar cita',
    policy: '* Por favor, evite cancelar con 48 horas de anticipación',
    cancelPolicy: 'Política de cancelación',
    complete: 'Complete MedicalHistory',
  },
  fr: {
    greeting: 'Salut Kristy, à bientôt!',
    detail: 'Détails du rendez-vous:',
    date: 'Lundi 16 novembre à 11:00',
    reschedule: 'Replanifier',
    service: 'Consultation (30 min)',
    employee: ' avec John Smith',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Annuler rendez-vous',
    confirmButton: 'Confirmer le rendez-vous',
    policy: '* Veuillez éviter dannuler dans les 48 heures davis',
    cancelPolicy: 'Politique dannulation',
    complete: 'Histoire médicale complète',
  },
  ru: {
    greeting: 'Привет, Кристи, до скорой встречи!',
    detail: 'Сведения о встрече:',
    date: 'Понедельник, 16 ноября в 11:00',
    reschedule: 'Перенести график',
    service: 'Консультация (30 минут)',
    employee: ' с Джоном Смитом',
    title: 'M-A Hair Dressing & Spa',
    address: '574 Beferly Road, H3454, England, GB',
    cancelButton: 'Отменить встречу',
    confirmButton: 'Подтвердить встречу',
    policy: '* Пожалуйста, избегайте отмены в течение 48 часов.',
    cancelPolicy: 'Политика отмены',
    complete: 'Полная медицинская история',
  },
}

interface P {
  requestConfirm?: boolean
  allowRescheduling?: boolean
  allowCancellation?: boolean
  displayPolicy?: boolean
  showService?: boolean
  showEmployeeName?: boolean
  addMedicalHisButton?: boolean
  selectLanguage?: string
  backGroundColor?: string
  buttonColor?: string
}

const NotificationPreview: FC<P> = ({
  requestConfirm,
  allowRescheduling,
  allowCancellation,
  displayPolicy,
  showService,
  showEmployeeName,
  addMedicalHisButton,
  selectLanguage,
}) => {
  const [selectLangData, setSelectLangData] = useState<Email>(langData['en'])

  useEffect(() => {
    if (langData[`${selectLanguage.toLowerCase()}`]) {
      setSelectLangData({ ...langData[`${selectLanguage.toLowerCase()}`] })
    }
  }, [selectLanguage])

  return (
    <div className={styles.cardAppointment}>
      <Row justify="center" className={styles.logo}>
        <Col>
          <NormalClinicLogo />
        </Col>
      </Row>
      <Row gutter={[0, 4]}>
        <Col>
          <span className={styles.greetingText}>{selectLangData.greeting}</span>
        </Col>
      </Row>
      <Divider className={styles.divider} />
      <Row justify="start" align="middle" gutter={[0, 4]}>
        <Col>
          <Calendar />
          <span style={{ marginLeft: '5px' }}>{selectLangData.detail}</span>
        </Col>
      </Row>
      <Row gutter={[0, 4]}>
        <Col>
          <span>{selectLangData.date}</span>
          {allowRescheduling && (
            <span className={styles.anchor}>{selectLangData.reschedule}</span>
          )}
        </Col>
      </Row>
      <Row gutter={[0, 4]}>
        {showService && (
          <Col>
            <span>
              {selectLangData.service}{' '}
              {showEmployeeName ? selectLangData.employee : ''}
            </span>
          </Col>
        )}
      </Row>
      <Row gutter={[0, 4]}>
        <Col>
          <span className={styles.mainAppointment}>{selectLangData.title}</span>
        </Col>
      </Row>
      <Row gutter={[0, 16]}>
        <Col>
          <span className={styles.address}>{selectLangData.address}</span>
        </Col>
      </Row>
      <Row gutter={[0, 16]} justify="space-between">
        {allowCancellation && (
          <Col>
            <Button type="default" className={styles.button}>
              {selectLangData.cancelButton}
            </Button>
          </Col>
        )}
        {requestConfirm && (
          <Col>
            <Button type="primary" backgroundColor="#00A1E1">
              {selectLangData.confirmButton}
            </Button>
          </Col>
        )}
      </Row>
      {displayPolicy && (
        <Row gutter={[0, 8]}>
          <Col>
            <span>{selectLangData.policy}</span>
          </Col>
        </Row>
      )}
      <Row gutter={[0, 8]}>
        <Col>
          <span className={styles.anchor}>{selectLangData.cancelPolicy}</span>
        </Col>
      </Row>
      <Divider />
      <Row justify="center">
        {addMedicalHisButton && (
          <Button type="default" className={styles.button}>
            {selectLangData.complete}
          </Button>
        )}
      </Row>
    </div>
  )
}

export default NotificationPreview