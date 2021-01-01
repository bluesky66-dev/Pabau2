import React from 'react'
import { Menu, Dropdown as AntDropDown, Button } from 'antd'
import { LeftOutlined, CheckCircleFilled } from '@ant-design/icons'
import { languageMenu } from './lang-logos'

const menu = (
  <Menu className="clinic-menu">
    <Menu.Item className="clinic-menu-header">
      <div className="logo">
        <LeftOutlined className="header" />
        <span className="select-company-style">Select language </span>
      </div>
    </Menu.Item>
    {languageMenu.map((lang, index) => {
      return (
        <Menu.Item key={index} className="dropdown-menu">
          <div className={`dropdown-setting ${lang.selected && 'active'}`}>
            {lang.logo}
            <span className="dropdown-item">{lang.label}</span>
          </div>
          {lang.selected && <CheckCircleFilled className="check-icon" />}
        </Menu.Item>
      )
    })}
  </Menu>
)

export function LanguageDropdown(): JSX.Element {
  return (
    <AntDropDown overlay={menu} placement="bottomRight" arrow>
      <Button>Language</Button>
    </AntDropDown>
  )
}

export default LanguageDropdown
