import React, { FC, useCallback, useState } from 'react'
import { Col, Dropdown, Layout, Menu, Row } from 'antd'
import {
  BellOutlined,
  CalendarOutlined,
  MailOutlined,
  MenuOutlined,
  PlusCircleFilled,
  PoundOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { Logo } from '../logo/Logo'
import styles from './Header.module.less'
import { Button, Dropdown as AvatarDropDown } from '@pabau/ui'
import { Search } from './search/Search'
import PabauNotification from './notification/Notification'
import PabauMessages from './messages/Messages'
import { Sidebar } from '../sidebar/MobileSidebar'
const AntHeader = Layout.Header

interface P {
  searchRender?: (innerComponent: JSX.Element) => JSX.Element
}

const items = [
  {
    name: 'Contact',
    icon: <UserOutlined />,
  },
  {
    name: 'Lead',
    icon: <SmileOutlined />,
  },
  {
    name: 'Appointment',
    icon: <CalendarOutlined />,
  },
  {
    name: 'Invoice',
    icon: <PoundOutlined />,
  },
]

export const Header: FC<P> = ({ searchRender, ...props }) => {
  const [openNotificationDrawer, setNotificationDrawer] = useState<boolean>(false)
  const [openMessageDrawer, setMessageDrawer] = useState<boolean>(false)
  const [openMenuDrawer, setMenuDrawer] = useState<boolean>(false)

  const handleMenuClick = useCallback(() => alert('Not yet done'), [])
  const overlay = (
    <Menu onClick={handleMenuClick}>
      {items.map(({ name, icon }) => (
        <Menu.Item key={name} icon={icon}>
          {name}
        </Menu.Item>
      ))}
    </Menu>
  )
  return (
    <>
      <AntHeader className={styles.pabauHeader}>
        <div
          style={{
            paddingLeft: '30px',
            paddingRight: '30px',
            height: '100%',
            alignItems: 'center',
          }}
        >
          <Row>
            <Col md={8}>
              <Logo />
            </Col>
            <Col md={8} className={styles.headerSearchCenter}>
              <div style={{ width: '360px' }}>
                {searchRender ? searchRender(<Search />) : <Search />}
              </div>
            </Col>
            <Col md={8} className={styles.headerIconEnd}>
              <div className={styles.headerAlign}>
                {/* <SettingOutlined className={styles.headerIcon} /> */}
                <BellOutlined
                  className={styles.headerIcon}
                  onClick={() => setNotificationDrawer((e) => !e)}
                />
                <MailOutlined
                  className={styles.headerIcon}
                  onClick={() => setMessageDrawer((e) => !e)}
                />
                <div>
                  <Dropdown overlay={overlay}>
                    <Button type="default" className={styles.createBtnStyle}>
                      <PlusCircleFilled /> Create
                    </Button>
                  </Dropdown>
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
        />
      )}
      {/* mobile responsive header start */}
      <AntHeader className={styles.pabauMobileHeader}>
        <div className={styles.mobileViewAlign}>
          <div className={styles.mobileViewHeaderHeading}>
            <MenuOutlined
              className="menuHeaderIconColor"
              onClick={() => {
                setMenuDrawer((e) => !openMenuDrawer)
              }}
            />
            <p>Setup</p>
          </div>
        </div>
      </AntHeader>
      {openMenuDrawer && (
        <Sidebar
          searchRender={searchRender}
          onSideBarClosed={() => setMenuDrawer((e) => !openMenuDrawer)}
          onClickNotificationDrawer={() => setNotificationDrawer((e) => !e)}
          onClickChatDrawer={() => setMessageDrawer((e) => !e)}
        />
      )}
      {/* mobile responsive header end */}
    </>
  )
}

export default Header
