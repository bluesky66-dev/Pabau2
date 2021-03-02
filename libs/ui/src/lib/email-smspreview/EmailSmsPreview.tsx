import React, { PropsWithChildren, ReactNode } from 'react'
import { Row, Col, Divider, Radio } from 'antd'
import styles from './EmailSmsPreview.module.less'
import { ReactComponent as NormalClinicLogo } from '../../assets/images/normal-clinic-logo.svg'
import { ReactComponent as GiftVoucherLogo } from '../../assets/images/gift-voucher.svg'
import {
  FacebookOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  TwitterOutlined,
} from '@ant-design/icons'

export interface EmailSMSPreviewProps {
  greeting?: string
  subtitle?: string
  children?: ReactNode
  footerIconGroup?: boolean
  footerContact?: boolean
  footerText?: string
  isFooterText?: boolean
  smsGreeting?: string
  smsMessage?: string
  smsFooterText?: string
  footer?: boolean
  isGiftVoucher?: boolean
  hideLogo?: boolean
}

export interface FooterProps {
  iconGroup?: boolean
  contact?: boolean
  text?: string
  isFooterText?: boolean
}

export interface NoShowAppointmentProps {
  message?: string
  contactNumber?: string
}

export interface BookedOntoClassProps {
  dateTime?: string
  consultationDetail?: string
  consultancyName?: string
  address?: string
  message?: string
}

export interface CancelAClassBookingProps {
  dateTime?: string
  consultationDetail?: string
  consultancyName?: string
  address?: string
  message?: string
  text?: string
}

export interface ClassRescheduledProps {
  message?: string
}

export interface ReminderForClassProps {
  message?: string
  contactNumber?: number
}

export interface MissedAClassProps {
  message?: string
  contactNumber?: string
}

export interface ReferralProps {
  message?: string
  footerText?: string
}

export interface InvoicesProps {
  message?: string
  footerText?: string
}

export interface LeadResponsesProps {
  message?: string
  text?: string
}

export interface GiftVoucherProps {
  value?: string
  voucherCode?: string
  expiry?: string
  consultancyName?: string
}

export interface ConnectRegistrationProps {
  message?: string
  connectURL?: string
  username?: string
  password?: string
  text?: string
}

export interface MedicalFormProps {
  message?: string
  contactNumber?: string
  text?: string
}

export interface NewAppoinmentsIsBookedProps {
  message?: string
  contactNumber?: number
}

export interface ClassWaitListProps {
  message?: string
}

export interface ClassesSpotAvailableProps {
  message?: string
}

export interface UpComingAppoinmentReminderProps {
  message?: string
  contactNumber?: number
}

export function EmailSMSFooter(props: FooterProps): JSX.Element {
  const {
    iconGroup = true,
    contact = false,
    text,
    isFooterText = false,
  } = props
  return (
    <>
      <Divider className={styles.dividerHr} />
      {contact && (
        <>
          <Row gutter={[0, 4]} className={styles.bookAppointment}>
            <Col>
              <span className={styles.message}>
                Or get in touch with us via Phone or Email:
              </span>
            </Col>
          </Row>
          <Row gutter={[0, 4]} className={styles.bookAppointment}>
            <Col>
              <span className={styles.contactInfo}>+44 000 987 507</span>
            </Col>
          </Row>
          <Row gutter={[0, 4]} className={styles.bookAppointment}>
            <Col>
              <span className={styles.contactInfo}>info@theclinic.com</span>
            </Col>
          </Row>
        </>
      )}
      {isFooterText && text !== '' && (
        <Row gutter={[0, 4]} className={styles.textBox}>
          <Col>
            <span
              className={styles.text}
              dangerouslySetInnerHTML={{ __html: text || '' }}
            ></span>
          </Col>
        </Row>
      )}
      {iconGroup === true && (
        <Row className={styles.footerIcon}>
          <Col>
            <div className={styles.iconGroup}>
              <FacebookOutlined className={styles.color} />
              <WhatsAppOutlined className={styles.color} />
              <InstagramOutlined className={styles.color} />
              <TwitterOutlined className={styles.color} />
            </div>
          </Col>
        </Row>
      )}
    </>
  )
}

export const EmailSmsPreview = (
  props: PropsWithChildren<EmailSMSPreviewProps>
): JSX.Element => {
  const {
    greeting,
    subtitle,
    children,
    footerContact,
    footerIconGroup,
    footerText,
    isFooterText,
    smsGreeting,
    smsFooterText,
    smsMessage,
    footer = true,
    isGiftVoucher = false,
    hideLogo = false,
  } = props
  const [previewStatus, setPreviewStatus] = React.useState('email')

  const handleSmsTabChanged = (value) => {
    setPreviewStatus(value)
  }

  return (
    <div className={styles.previewWrapper}>
      <Row justify="center" className={styles.previewButtonGroup}>
        <Radio.Group defaultValue="email" buttonStyle="solid">
          <Radio.Button
            className={styles.radioLeftButton}
            value="email"
            onClick={() => handleSmsTabChanged('email')}
          >
            Email
          </Radio.Button>
          <Radio.Button
            className={styles.radioRightButton}
            value="sms"
            onClick={() => handleSmsTabChanged('sms')}
          >
            SMS Text
          </Radio.Button>
        </Radio.Group>
      </Row>
      {previewStatus === 'email' && (
        <div
          className={`${styles.emailPreview} ${isGiftVoucher && `${styles.giftVoucher}`
            }`}
        >
          {isGiftVoucher && (
            <div className={styles.giftVoucherBlock}>
              <div className={styles.giftVoucherCenter}>
                <GiftVoucherLogo />
              </div>
            </div>
          )}
          <div>
            {!hideLogo && (
              <>
                <Row justify="center" className={styles.logo}>
                  <Col>
                    <NormalClinicLogo />
                  </Col>
                </Row>
                <Row gutter={[0, 4]}>
                  <Col>
                    <span className={styles.greetingText}>{greeting}</span>
                  </Col>
                </Row>
              </>
            )}
            {subtitle !== '' && (
              <Row className={styles.subhead}>
                <Col>
                  <span className={styles.mainAppointment}>{subtitle}</span>
                </Col>
              </Row>
            )}
            {children}
            {footer && (
              <EmailSMSFooter
                contact={footerContact}
                iconGroup={footerIconGroup}
                text={footerText}
                isFooterText={isFooterText}
              />
            )}
          </div>
        </div>
      )}
      {previewStatus === 'sms' && (
        <div className={styles.smsPreview}>
          <Row className={styles.smsHead}>
            <Col>
              {smsGreeting !== '' && (
                <span className={styles.titleRow}>{smsGreeting}</span>
              )}
            </Col>
          </Row>
          <Row className={styles.smsHead}>
            <Col>
              {smsMessage && smsMessage !== '' && (
                <span
                  id="smsMessage"
                  dangerouslySetInnerHTML={{ __html: smsMessage }}
                ></span>
              )}
            </Col>
          </Row>
          {smsFooterText && smsFooterText !== '' && (
            <span
              id="smsFooterText"
              dangerouslySetInnerHTML={{ __html: smsFooterText || '' }}
            ></span>
          )}
        </div>
      )}
    </div>
  )
}

export default EmailSmsPreview
