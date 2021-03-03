import React, { FC } from 'react'

import { Button } from '../button/Button'
import styles from './NotificationBanner.module.less'
import { Row, Col } from 'antd'
import iconClose from '../../assets/images/icon_close.svg'
import Link from 'next/link'

interface P {
  title?: string
  desc?: string
  imgPath?: string
  allowClose?: boolean
  setHide: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  showPaymentButton?: boolean
  email?: string
  showEmail?: boolean
  hrefPath?: string
  hrefTitle?: string
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
  showEmail = false,
  hrefPath = '/',
  hrefTitle = 'Enable Payments',
}) => {
  return (
    <div
      className={isHide ? styles.hideBlock : styles.notificationBody}
      style={{ backgroundImage: `url(${imgPath})` }}
    >
      <Row className={styles.rowPosition}>
        <Col md={16} sm={12}>
          <p className={styles.title1}>{title}</p>
          <p className={styles.title2}>{desc}</p>
          {showEmail && <p className={styles.linkEmail}>{email}</p>}
          <Link href={hrefPath}>
            {showPaymentButton && (
              <Button
                className={styles.btnPayment}
                // onClick={() => {}}
                size="middle"
                type="link"
              >
                {hrefTitle}
              </Button>
            )}
          </Link>
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
