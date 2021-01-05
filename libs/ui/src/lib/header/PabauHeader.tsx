import React, { FC, HTMLProps, useCallback, useEffect, useRef, useState } from 'react'
import { Avatar, Badge, Col, Dropdown, Input, Layout, Menu, Row } from 'antd'
import {
  BellOutlined,
  CalendarOutlined,
  DownOutlined,
  MailOutlined,
  PlusCircleFilled,
  PoundOutlined,
  SearchOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Logo from '../logo/Logo'
import styles from './Header.module.less'
import { Button, ButtonTypes } from '@pabau/ui'
import PabauNotification from './notification/notification'
import PabauMessages from './messages/messages'

const { Header } = Layout

/* eslint-disable-next-line */
export interface HeaderProps {}

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

export const PabauHeader: FC = ({ ...props }: HTMLProps<HTMLElement>) => {
  const searchRef = useRef<Input>(null)
  const [notification, setNotification] = useState<boolean>(false)
  const [messages, setMessages] = useState<boolean>(false)
  useEffect(() => {
    window.document.onkeydown = (e) => {
      if (e.ctrlKey && e.code === 'KeyA') {
        e.preventDefault()
        // noinspection BadExpressionStatementJS
        searchRef.current?.focus()
      }
    }
  })
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
    <Header
      className={styles.pabauHeader}
      style={{
        backgroundColor: 'white',
        // padding: '1rem',
        // position: 'sticky',

        height: '64px',
        top: 0,
        zIndex: 2,
        border: '1px solid #ECEDF0',
      }}
    >
      <Row style={{ paddingLeft: '30px', paddingRight: '30px', height: '100%' }}>
        <Col span={8} style={{ height: '100%', padding: '16px' }}>
          <Logo />
        </Col>
        <Col span={8} style={{ height: '64px' }}>
          <Input
            className={styles.searchInputStyle}
            placeholder="Search clients or leads"
            prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
            ref={searchRef}
          />
        </Col>
        <Col span={8}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div className="pr-4">
              <SettingOutlined className={styles.headerIcon} />
            </div>
            <div className="pr-4">
              <BellOutlined
                className={styles.headerIcon}
                onClick={() => setNotification(!notification)}
              />
            </div>
            <div className="pr-4">
              <MailOutlined className={styles.headerIcon} onClick={() => setMessages(!messages)} />
            </div>

            <Dropdown overlay={overlay}>
              <Button
                style={{ borderRadius: 5 }}
                type={ButtonTypes.primary}
                // shape="round"
                // size="large"
                className={styles.createBtnStyle}
              >
                <PlusCircleFilled /> Create
              </Button>
            </Dropdown>
            <div className="pl-4">
              <Badge
                dot
                color="#65CD98"
                offset={[-2, 30]}
                size="default"
                style={{ height: '8px', width: '8px' }}
              >
                <Avatar size={40} icon={<UserOutlined />} />
              </Badge>
            </div>
            <DownOutlined style={{ paddingLeft: '10px', color: '#9292A3' }} />
          </div>
        </Col>
      </Row>
      {notification && (
        <PabauNotification
          openDrawer={notification}
          closeDrawer={() => setNotification(!notification)}
        />
      )}
      {messages && (
        <PabauMessages openDrawer={messages} closeDrawer={() => setMessages(!messages)} />
      )}
    </Header>
  )
}

export default PabauHeader
