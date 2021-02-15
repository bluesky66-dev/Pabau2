import React, { FC } from 'react'
import styles from './NotificationBanner.module.less'
import { Row, Col } from 'antd'
import iconClose from '../../assets/images/icon_close.svg'

interface P {
  title?: string
  desc?: string
  imgPath?: string
  allowClose?: boolean
  setHide: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
}

export const NotificationBanner: FC<P> = ({
  title,
  desc,
  imgPath,
  allowClose,
  setHide: [isHide, setHide],
  ...rest
  // selectLanguageHook: [string, React.Dispatch<React.SetStateAction<string>>]
  // childHook: [isHide, React.Dispatch<React.SetStateAction<[]>>]
  // const [isHide, setHide] = useState(false)
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
          {rest.children}
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
