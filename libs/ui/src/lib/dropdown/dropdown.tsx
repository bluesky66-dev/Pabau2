import React, { HTMLProps, useState } from 'react'
import { Menu, Badge, Avatar, Popover, Image } from 'antd'
import LaunchSVG from './LaunchSVG'
import {
  RightOutlined,
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
  CaretDownOutlined,
} from '@ant-design/icons'
import { ReactComponent as PABAULOGO } from './company/pabaulogo.svg'
import { ReactComponent as JASVG } from './company/JA.svg'
import { ReactComponent as UPSVG } from './UP.svg'
import { ReactComponent as TaskSVG } from './Vector.svg'
import { languageMenu } from './language/lang-logos'
import './dropdown.less'

export interface DropDownInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleSubmit?: () => void
}

export function Dropdown(props: HTMLProps<HTMLDivElement>): JSX.Element {
  const [activeMenu, setActiveMenu] = useState('Menu')

  const menu = (
    <Menu className="avatar-menu">
      <Menu.Item className="dropdown-menu" onClick={() => onClickAvatarMenu('ClinicMenu')}>
        <div className="dropdown-header">
          <PABAULOGO />
          <span className="header-text">Pabau Clinic Software</span>
        </div>
        <RightOutlined className="dropdown-icon" />
      </Menu.Item>
      <Menu.Item className="userinfo">
        <div className="user-name">William Brandham</div>
        <div className="user-balance">
          <p>Balance</p>
          <span>9445,00</span>
        </div>
      </Menu.Item>
      <Menu.Item className="dropdown-menu">
        <div className="dropdown-header">
          <UserOutlined style={{ color: '#9292A3' }} />
          <span className="header-text">Account Settings</span>
        </div>
        <LaunchSVG />
      </Menu.Item>
      <Menu.Item className="dropdown-menu" style={{ borderBottom: '1px solid #F1F1F1' }}>
        <div className="dropdown-header">
          <TaskSVG />
          <span className="header-text task-text">Tasks</span>
        </div>
      </Menu.Item>
      <Menu.Item className="dropdown-menu" onClick={() => onClickAvatarMenu('FeedbackMenu')}>
        <div className="dropdown-header">
          <NotificationOutlined className="dropdown-icon" />
          <span className="header-text">Give feedback</span>
        </div>
        <RightOutlined className="dropdown-icon" />
      </Menu.Item>
      <Menu.Item className="dropdown-menu" onClick={() => onClickAvatarMenu('HelpMenu')}>
        <div className="dropdown-header">
          <QuestionCircleOutlined className="dropdown-icon" />
          <span className="header-text">Help & Support</span>
        </div>
        <RightOutlined className="dropdown-icon" />
      </Menu.Item>
      <Menu.Item className="dropdown-menu" onClick={() => onClickAvatarMenu('LangMenu')}>
        <div className="dropdown-header">
          <GlobalOutlined className="dropdown-icon" />
          <span className="header-text">English</span>
        </div>
        <RightOutlined className="dropdown-icon" />
      </Menu.Item>
      <Menu.Item className="dropdown-menu">
        <div className="dropdown-header">
          <ExportOutlined className="dropdown-icon" />
          <span className="header-text">Log out</span>
        </div>
      </Menu.Item>
    </Menu>
  )

  const ClinicSubMenu = (
    <Menu className="avatar-sub-menu">
      <Menu.Item className="sub-dropdown-list" onClick={() => onClickAvatarMenu('Menu')}>
        <div className="sub-dropdown-list-header">
          <LeftOutlined className="sub-logo" />
          <span className="sub-header-text">Select company</span>
        </div>
      </Menu.Item>
      <Menu.Item className="sub-dropdown-list">
        <div className="sub-dropdown-list-header">
          <PABAULOGO />
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
    </Menu>
  )

  const FeedbackMenu = (
    <Menu className="avatar-help-menu">
      <Menu.Item className="avatar-help-sub-list" onClick={() => setActiveMenu('Menu')}>
        <div className="feedback-align-content">
          <LeftOutlined className="sub-logo" />
          <p className="sub-header-text">Give us feedback</p>
        </div>
      </Menu.Item>
      <Menu.Item className="avatar-help-sub-list">
        <div className="feedback-align-content">
          <InfoCircleOutlined className="" />
          <span className="">Help us improve Pabau</span>
        </div>
      </Menu.Item>
      <Menu.Item className="avatar-help-sub-list">
        <div className="feedback-align-content">
          <ExclamationOutlined className="" />
          <span className="">Something went wrong</span>
        </div>
      </Menu.Item>
    </Menu>
  )

  const HelpMenu = (
    <Menu className="avatar-help-menu">
      <Menu.Item className="avatar-help-sub-list" onClick={() => onClickAvatarMenu('Menu')}>
        <div className="feedback-align-content">
          <LeftOutlined className="sub-logo" />
          <p className="sub-header-text">Help & Support </p>
        </div>
      </Menu.Item>
      <Menu.Item className="avatar-help-sub-list">
        <div className="feedback-align-content">
          <QuestionCircleOutlined className="" />
          <span className="">Help Centre</span>
        </div>
      </Menu.Item>
      <Menu.Item className="avatar-help-sub-list">
        <div className="feedback-align-content">
          <PlaySquareOutlined className="" />
          <span className="">Video Guides</span>
        </div>
      </Menu.Item>
      <Menu.Item className="avatar-help-sub-list">
        <div className="feedback-align-content">
          <ExclamationOutlined className="" />
          <span className="">Contact Support</span>
        </div>
      </Menu.Item>
    </Menu>
  )

  const LangMenu = (
    <Menu className="avatar-help-menu">
      <Menu.Item className="lang-sub-dropdown-menu" onClick={() => onClickAvatarMenu('Menu')}>
        <div className="lang-align-content">
          <LeftOutlined className="" />
          <p className="">Select language </p>
        </div>
      </Menu.Item>
      {languageMenu.map((lang, index) => {
        return (
          <Menu.Item key={index} className="language-text-align">
            <div className="language-flag-center">
              <Image src={lang.logo} alt={lang.label} />
              <span className={`${lang.selected ? 'active-menu' : ''}`}>{lang.label}</span>
            </div>
            {lang.selected && <CheckCircleFilled className="check-icon active-menu" />}
          </Menu.Item>
        )
      })}
    </Menu>
  )

  const onClickAvatarMenu = (menuName: string) => {
    setActiveMenu(menuName)
  }

  const avatarMenu = () => {
    if (activeMenu === 'Menu') {
      return menu
    } else if (activeMenu === 'ClinicMenu') {
      return ClinicSubMenu
    } else if (activeMenu === 'FeedbackMenu') {
      return FeedbackMenu
    } else if (activeMenu === 'HelpMenu') {
      return HelpMenu
    } else if (activeMenu === 'LangMenu') {
      return LangMenu
    }
  }

  return (
    <Popover
      content={avatarMenu}
      trigger="click"
      placement="bottomRight"
      overlayClassName="avatar-popover"
    >
      <div style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px' }}>
        <Badge
          dot
          color="#65CD98"
          offset={[-2, 30]}
          size="default"
          style={{ height: '8px', width: '8px' }}
        >
          <Avatar size={40} icon={<UserOutlined />} />
        </Badge>

        <CaretDownOutlined style={{ paddingLeft: '5px', color: '#9292A3' }} />
      </div>
    </Popover>
  )
}

export default Dropdown
