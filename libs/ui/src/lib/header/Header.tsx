import React, { FC, HTMLProps, useCallback } from 'react'
import { Avatar, Badge, Dropdown, Layout, Menu } from 'antd'
import {
  BellOutlined,
  CalendarOutlined,
  DownOutlined,
  MailOutlined,
  PlusCircleFilled,
  PoundOutlined,
  SettingOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { Logo } from '../logo/Logo'
import styles from './Header.module.less'
import { Button, ButtonTypes } from '@pabau/ui'
import { Search } from '../search/search'

const AntHeader = Layout.Header

/* eslint-disable-next-line */
export interface HeaderProps {
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

export const Header: FC = ({ ...props }: HTMLProps<HTMLElement>) => {
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
    <AntHeader
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
      <div
        style={{
          paddingLeft: '30px',
          paddingRight: '30px',
          height: '100%',
          display: 'flex',
          placeItems: 'center',
        }}
      >
        <Logo />
        <Search style={{ margin: '0 2em', flex: 1 }} />
        <Dropdown overlay={overlay} className={styles.pointer}>
          <SettingOutlined className={styles.headerIcon} />
        </Dropdown>
        <Dropdown overlay={overlay} className={styles.pointer}>
          <BellOutlined className={styles.headerIcon} />
        </Dropdown>
        <Dropdown overlay={overlay} className={styles.pointer}>
          <MailOutlined className={styles.headerIcon} />
        </Dropdown>

        <div style={{ padding: '0 1rem' }}>
          <Dropdown overlay={overlay}>
            <Button
              style={{ borderRadius: 5 }}
              btnType={ButtonTypes.primary}
              // shape="round"
              // size="large"
              className={styles.createBtnStyle}
            >
              <PlusCircleFilled /> Create
            </Button>
          </Dropdown>
        </div>

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
    </AntHeader>
  )
}

export default Header
