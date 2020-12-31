import React from 'react'
import { Menu, Dropdown as AntDropDown, Button } from 'antd'
import './dropdown.less'
import Logo from '../pabaucliniclogo/Logo'
import LaunchSVG from './LaunchSVG'
import {
  UserOutlined,
  NotificationOutlined,
  QuestionCircleOutlined,
  GlobalOutlined,
  ExportOutlined,
  LeftOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
  ExclamationOutlined,
  PlaySquareOutlined,
} from '@ant-design/icons'
import { ReactComponent as JASVG } from './company/JA.svg'
import { ReactComponent as UPSVG } from './UP.svg'
import { ReactComponent as TaskSVG } from './Vector.svg'
import { languageMenu } from './language/lang-logos/index'

const { SubMenu } = Menu

export interface DropDownInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleSubmit?: () => void
}

const menu = (
  <Menu className="avatar-menu">
    <SubMenu
      key="clinicMenu"
      icon={<Logo />}
      title="Pabau Clinic Software"
      className="pabau-clinic-header"
      popupClassName="sub-clinic-menu"
    >
      <Menu.Item className="sub-dropdown-menu">
        <div className="sub-dropdown-header">
          <LeftOutlined className="sub-logo" />
          <span className="sub-header-text">Select company</span>
        </div>
      </Menu.Item>
      <Menu.Item className="sub-dropdown-list">
        <div className="sub-dropdown-list-header">
          <Logo />
          <span className="sub-dropdown-list-header-text text-nowrap active-menu">
            Pabau Clinic Software
          </span>
        </div>
        <CheckCircleFilled className="check-icon active-menu" />
      </Menu.Item>
      <Menu.Item className="sub-dropdown-list">
        <div className="sub-dropdown-list-header">
          <JASVG />
          <span className="sub-dropdown-list-header-text">
            Jason Austin Har Salon’s & Barbershops
          </span>
        </div>
      </Menu.Item>
      <Menu.Item className="sub-dropdown-list">
        <div className="sub-dropdown-list-header">
          <UPSVG />
          <span className="sub-dropdown-list-header-text">
            University of Portsmouth Essenntial Student Guide – Info, Offers, Nightlife
          </span>
        </div>
      </Menu.Item>
    </SubMenu>
    <Menu.Item className="userinfo">
      <div className="user-name">William Branham</div>
      <div className="user-balance">
        <p>Balance</p>
        <span>9445,00</span>
      </div>
    </Menu.Item>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-header">
        <UserOutlined className="logo" />
        <span className="header-text">Account Settings</span>
      </div>
      <LaunchSVG />
    </Menu.Item>
    <Menu.Item className="dropdown-menu" style={{ borderBottom: '1px solid #F1F1F1' }}>
      <div className="dropdown-header">
        <TaskSVG />
        <span className="header-text">Tasks</span>
      </div>
    </Menu.Item>
    <SubMenu
      key="feedbackMenu"
      icon={<NotificationOutlined className="submenu-header-icon" />}
      title="Give feedback"
      className="submenu-header"
      popupClassName="feedback-menu"
    >
      <Menu.Item className="">
        <div className="popup-heading-style">
          <LeftOutlined className="" />
          <span className="">Give us feedback</span>
        </div>
      </Menu.Item>
      <Menu.Item className="">
        <div className="feedback-text-style">
          <InfoCircleOutlined className="" />
          <span className="">Help us improve Pabau</span>
        </div>
      </Menu.Item>
      <Menu.Item className="">
        <div className="feedback-text-style">
          <ExclamationOutlined className="" />
          <span className="">Something went wrong</span>
        </div>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="helpMenu"
      icon={<QuestionCircleOutlined className="submenu-header-icon" />}
      title="Help & Support"
      className="submenu-header"
      popupClassName="help-menu"
    >
      <Menu.Item className="">
        <div className="popup-heading-style">
          <LeftOutlined className="" />
          <span className="">Help & Support </span>
        </div>
      </Menu.Item>
      <Menu.Item className="">
        <div className="feedback-text-style">
          <QuestionCircleOutlined className="" />
          <span className="">Help Centre</span>
        </div>
      </Menu.Item>
      <Menu.Item className="">
        <div className="feedback-text-style">
          <PlaySquareOutlined className="" />
          <span className="">Video Guides</span>
        </div>
      </Menu.Item>
      <Menu.Item className="">
        <div className="feedback-text-style">
          <ExclamationOutlined className="" />
          <span className="">Contact Support</span>
        </div>
      </Menu.Item>
    </SubMenu>
    <SubMenu
      key="langMenu"
      icon={<GlobalOutlined className="submenu-header-icon" />}
      title="English"
      className="submenu-header"
      popupClassName="lang-menu"
    >
      <Menu.Item className="">
        <div className="popup-heading-style">
          <LeftOutlined className="" />
          <span className="">Select language </span>
        </div>
      </Menu.Item>
      {languageMenu.map((lang, index) => {
        return (
          <Menu.Item key={index} className="language-text-align">
            <div className="language-flag-center">
              {lang.logo}
              <span className={`${lang.selected && 'active-menu'}`}>{lang.label}</span>
            </div>
            {lang.selected && <CheckCircleFilled className="check-icon active-menu" />}
          </Menu.Item>
        )
      })}
    </SubMenu>
    <Menu.Item className="dropdown-menu">
      <div className="dropdown-header">
        <ExportOutlined className="logo" />
        <span className="header-text">Log out</span>
      </div>
    </Menu.Item>
  </Menu>
)

export function Dropdown(): JSX.Element {
  return (
    <AntDropDown overlay={menu} placement="bottomRight" arrow trigger={['click']}>
      <Button>Avatar</Button>
    </AntDropDown>
  )
}

export default Dropdown
