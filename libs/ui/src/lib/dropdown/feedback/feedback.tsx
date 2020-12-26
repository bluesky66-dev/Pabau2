import React from 'react'
import { Menu, Dropdown as AntDropDown, Button } from 'antd'
import { LeftOutlined, InfoCircleOutlined, ExclamationOutlined } from '@ant-design/icons'

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
        <LeftOutlined className="header" />
        <span className="select-company-style">Give us feedback</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <InfoCircleOutlined className="antdicon" />
        <span className="dropdown-item">Help us improve Pabau</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-setting">
        <ExclamationOutlined className="antdicon" />
        <span className="dropdown-item">Something went wrong</span>
      </div>
    </Menu.Item>
  </Menu>
)

export function FeedbackDropdown(): JSX.Element {
  return (
    <AntDropDown overlay={menu} placement="bottomRight" arrow>
      <Button>Feedback</Button>
    </AntDropDown>
  )
}

export default FeedbackDropdown
