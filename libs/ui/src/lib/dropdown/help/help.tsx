import React from 'react'
import { Menu, Dropdown as AntDropDown, Button } from 'antd'
import {
  LeftOutlined,
  ExclamationOutlined,
  QuestionCircleOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons'

const menu = (
  <Menu className="clinic-menu">
    <Menu.Item className="clinic-menu-header">
      <div className="logo">
        <LeftOutlined className="header" />
        <span className="select-company-style">Help & Support </span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <QuestionCircleOutlined className="antdicon" />
        <span className="dropdown-item">Help Centre</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <PlaySquareOutlined className="antdicon" />
        <span className="dropdown-item">Video Guides</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <ExclamationOutlined className="antdicon" />
        <span className="dropdown-item">Contact Support</span>
      </div>
    </Menu.Item>
  </Menu>
)

export function HelpDropdown(): JSX.Element {
  return (
    <AntDropDown overlay={menu} placement="bottomRight" arrow>
      <Button>Help & Support</Button>
    </AntDropDown>
  )
}

export default HelpDropdown
