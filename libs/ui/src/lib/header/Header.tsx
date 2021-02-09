import React, { FC, useState, MouseEvent } from 'react'
import { Col, Layout, Row } from 'antd'
import { BellOutlined, MailOutlined } from '@ant-design/icons'

import { Logo } from '../logo/Logo'
import styles from './Header.module.less'
import { Dropdown as AvatarDropDown, QuickCreate } from '@pabau/ui'
import { Search } from './search/Search'
import PabauNotification from './notification/Notification'
import PabauMessages from './messages/Messages'
import classNames from 'classnames'
const AntHeader = Layout.Header

interface P {
  searchRender?: (innerComponent: JSX.Element) => JSX.Element
  onCreateChannel?: (
    name: string,
    description: string,
    isPrivate: boolean
  ) => void
  onMessageType?: (e: MouseEvent<HTMLElement>) => void
}

export const Header: FC<P> = ({
  searchRender,
  onCreateChannel,
  onMessageType,
  ...props
}) => {
  const [openNotificationDrawer, setNotificationDrawer] = useState<boolean>(
    false
  )
  const [openMessageDrawer, setMessageDrawer] = useState<boolean>(false)
  return (
    <>
      <AntHeader
        className={classNames(styles.pabauHeader, styles.mobileViewNone)}
      >
        <div
          style={{
            paddingLeft: '30px',
            paddingRight: '30px',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Row>
            <Col md={6} lg={8}>
              <Logo />
            </Col>
            <Col md={8} lg={8} className={styles.headerSearchCenter}>
              <div style={{ width: '360px' }}>
                {searchRender ? searchRender(<Search />) : <Search />}
              </div>
            </Col>
            <Col md={10} lg={8} className={styles.headerIconEnd}>
              <div className={styles.headerAlign}>
                <BellOutlined
                  className={styles.headerIcon}
                  onClick={() => setNotificationDrawer((e) => !e)}
                />
                <MailOutlined
                  className={styles.headerIcon}
                  onClick={() => setMessageDrawer((e) => !e)}
                />
                <div>
                  <QuickCreate />
                </div>
                <AvatarDropDown />
              </div>
            </Col>
          </Row>
        </div>
      </AntHeader>

      {openNotificationDrawer && (
        <PabauNotification
          openDrawer={openNotificationDrawer}
          closeDrawer={() => setNotificationDrawer((e) => !e)}
        />
      )}
      {openMessageDrawer && (
        <PabauMessages
          openDrawer={openMessageDrawer}
          closeDrawer={() => setMessageDrawer((e) => !e)}
          onCreateChannel={onCreateChannel}
          onMessageType={onMessageType}
        />
      )}
    </>
  )
}

export default Header
