import React, { FC, useCallback, useEffect, useRef } from 'react'

import './Header.less'
import Logo from '../logo/Logo'
import screenfull from 'screenfull'
import { Button, Dropdown, Input, Layout, Menu } from 'antd'
import {
  CalendarOutlined,
  ExpandOutlined,
  PoundOutlined,
  SearchOutlined,
  SmileOutlined,
  UserOutlined,
} from '@ant-design/icons'

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

export const Header2: FC = () => {
  const searchRef = useRef<Input>(null)
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
      style={{
        backgroundColor: 'white',
        padding: '1rem',
        position: 'sticky',
        top: 0,
        zIndex: 2,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        {/*{screenfull.isEnabled && (*/}
        {/*  <Button*/}
        {/*    type="ghost"*/}
        {/*    style={{ borderRadius: 5 }}*/}
        {/*    shape="round"*/}
        {/*    icon={<ExpandOutlined />}*/}
        {/*    className="button"*/}
        {/*    size="large"*/}
        {/*    onClick={() => {*/}
        {/*      if (screenfull.isEnabled) screenfull.toggle()*/}
        {/*    }}*/}
        {/*  />*/}
        {/*)}*/}

        <Logo />
        <div className="searchBox">
          <label>
            <SearchOutlined className="searchBoxIcon" />
            <Input allowClear className="searchBoxInner" ref={} />
          </label>
        </div>

        <div style={{ textAlign: 'right', float: 'right', width: 'min-content' }}>
          <Dropdown overlay={overlay}>
            <Button
              style={{ borderRadius: 5 }}
              type="primary"
              shape="round"
              size="large"
              className="button"
            >
              + Create
              {/*Create <DownOutlined/>*/}
            </Button>
          </Dropdown>
        </div>
      </div>
    </Header>
  )
}

export default Header2
