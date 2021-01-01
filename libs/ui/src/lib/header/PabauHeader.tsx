import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import './PabauHeader.less'
import Logo from './logo/Logo'
import { Button, Dropdown, Input, Layout, Menu, Row, Col, Avatar, Badge } from 'antd'
import {
  CalendarOutlined,
  PoundOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined,
  SettingOutlined,
  BellOutlined,
  MailOutlined,
  PlusCircleFilled,
  DownOutlined,
} from '@ant-design/icons'
import PabauNotification from './notification/notification'
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

export const PabauHeader: FC = () => {
  const searchRef = useRef<Input>(null)
  const [notification, setNotification] = useState<boolean>(false)
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
      className="pabau-header"
      style={{
        backgroundColor: 'white',
        // padding: '1rem',
        position: 'sticky',

        top: 0,
        zIndex: 2,
        border: '1px solid #ECEDF0',
      }}
    >
      <Row style={{ paddingLeft: '30px', paddingRight: '30px' }}>
        <Col span={8}>
          <Logo />
        </Col>
        <Col span={8}>
          <Input
            className="search-input-style"
            placeholder="Search clients or leads"
            prefix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
            ref={searchRef}
          />
        </Col>
        <Col span={8}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div className="pr-4">
              <SettingOutlined className="header-icon" />
            </div>
            <div className="pr-4">
              <BellOutlined
                className="header-icon"
                onClick={() => setNotification(!notification)}
              />
            </div>
            <div className="pr-4">
              <MailOutlined className="header-icon" />
            </div>

            <Dropdown overlay={overlay}>
              <Button
                style={{ borderRadius: 5 }}
                type="primary"
                shape="round"
                size="large"
                className="button create-btn-style"
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
    </Header>
  )
}

export default PabauHeader
