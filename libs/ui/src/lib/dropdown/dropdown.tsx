import React from 'react'
import { Menu, Dropdown as AntDropDown, Button } from 'antd'
import './dropdown.less'
import Logo from '../pabaucliniclogo/Logo'
import LaunchSVG from './LaunchSVG'
import {
  RightOutlined,
  UserOutlined,
  OrderedListOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  GlobalOutlined,
  ExportOutlined,
} from '@ant-design/icons'

export interface DropDownInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleSubmit?: () => void
}

const menu = (
  <Menu className="clinic-menu">
    <Menu.Item className="clinic-menu-header">
      <div className="logo">
        <Logo />
        <span className="header">Pabau Clinic Software</span>
      </div>
      <RightOutlined className="header" />
    </Menu.Item>
    <Menu.Item className="userinfo">
      <div className="user-name">William Branham</div>
      <div className="user-balance">
        <p>Balance</p>
        <span>9445,00</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <UserOutlined className="dropdown-logo" />
        <span className="dropdown-item">Account Settings</span>
      </div>
      <LaunchSVG />
    </Menu.Item>
    <Menu.Item className="dropdown-menu dropdown">
      <div className="dropdown-setting">
        <OrderedListOutlined className="dropdown-logo" />
        <span className="dropdown-item">Tasks</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <NotificationOutlined className="dropdown-logo" />
        <span className="dropdown-item">Give feedback</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <QuestionCircleOutlined className="dropdown-logo" />
        <span className="dropdown-item">Help & Support</span>
      </div>
      <RightOutlined className="header" />
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <GlobalOutlined className="dropdown-logo" />
        <span className="dropdown-item">English</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <ExportOutlined className="dropdown-logo" />
        <span className="dropdown-item">Log out</span>
      </div>
    </Menu.Item>
  </Menu>
)

export function Dropdown(): JSX.Element {
  return (
    <AntDropDown overlay={menu} placement="bottomRight" arrow>
      <Button>Avatar</Button>
    </AntDropDown>
  )
}

export default Dropdown
