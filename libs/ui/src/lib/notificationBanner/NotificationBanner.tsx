import React, { FC } from 'react'

import { Button } from '../button/button'
import styles from './NotificationBanner.module.less'
import { Row, Col } from 'antd'
import iconClose from '../../assets/images/icon_close.svg'

interface P {
  title?: string
  desc?: string
  imgPath?: string
  allowClose?: boolean
  setHide: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  showPaymentButton?: boolean
  showPaymentTitle?: string
  email?: string
  showEmail?: boolean
}

export const NotificationBanner: FC<P> = ({
  title,
  desc,
  imgPath,
  allowClose,
  email,
  setHide: [isHide, setHide],
  // selectLanguageHook: [string, React.Dispatch<React.SetStateAction<string>>]
  // childHook: [isHide, React.Dispatch<React.SetStateAction<[]>>]
  // const [isHide, setHide] = useState(false)
  showPaymentButton = true,
  showPaymentTitle = '',
  showEmail = false,
}) => {
  return (
    <div
      className={isHide ? styles.hideBlock : styles.notificationBody}
      style={{ backgroundImage: `url(${imgPath})`, backgroundSize: 'contain' }}
    >
      <Row className={styles.rowPosition}>
        <Col md={16} sm={12}>
          <p className={styles.title1}>{title}</p>
          <p className={styles.title2}>{desc}</p>
          {showEmail && <p className={styles.linkEmail}>{email}</p>}
          {showPaymentButton && (
            <Button
              className={styles.btnPayment}
              // onClick={() => {}}
              size="middle"
              type="link"
            >
              {showPaymentTitle || 'Enable Payments'}
            </Button>
          )}
        </Col>
        {allowClose && (
          <img
            className={styles.iconClose}
            src={iconClose}
            onClick={() => setHide(true)}
            alt=""
          />
        )}
      </Row>
    </div>
  )
}

export default NotificationBanner
