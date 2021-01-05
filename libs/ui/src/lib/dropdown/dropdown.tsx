import React, { HTMLProps, useState } from 'react'
import { Menu, Button, Popover, Image } from 'antd'
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
} from '@ant-design/icons'
import { ReactComponent as PABAULOGO } from './company/pabaulogo.svg'
import { ReactComponent as JASVG } from './company/JA.svg'
import { ReactComponent as UPSVG } from './UP.svg'
import { ReactComponent as TaskSVG } from './Vector.svg'
import { languageMenu } from './language/lang-logos'

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
    <div style={{ margin: '15px' }}>
      <style jsx>{`
        .avatar-popover .ant-popover-inner-content {
          padding: 0px;
        }

        .avatar-popover .userinfo {
          border: none;
        }

        .avatar-popover .avatar-menu {
          user-select: none;
          width: 304px;
        }

        .avatar-popover .avatar-menu .ant-menu-item-selected {
          background-color: transparent;
        }

        .avatar-popover .avatar-menu .ant-menu-item {
          line-height: 0;
          margin-bottom: 0px;
          transition: none;
        }

        .avatar-popover .avatar-menu .userinfo {
          padding: 11px 17px;
          border-top: 1px solid #f1f1f1;
          border-bottom: 1px solid #f1f1f1;
          height: 84px;
        }

        .avatar-popover .avatar-menu .userinfo .user-name {
          font-family: Circular-Std-Bold;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 18px;
          color: #3d3d46;
        }

        .avatar-popover .avatar-menu .userinfo .user-balance p {
          font-family: Circular-Std-Book;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #9292a3;
          margin-bottom: 0;
          margin-top: 7px;
          opacity: 0.5;
        }

        .avatar-popover .avatar-menu .userinfo .user-balance span {
          font-family: Circular-Std-Book;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #9292a3;
        }

        .avatar-popover .avatar-menu .dropdown-icon {
          color: #9292a3;
        }

        .avatar-popover .avatar-menu .task-text {
          padding-left: 19px !important;
        }

        .avatar-popover .avatar-menu .dropdown-menu {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .avatar-popover .avatar-menu .dropdown-menu .dropdown-header {
          display: flex;
          align-items: center;
        }

        .avatar-popover .avatar-menu .dropdown-menu .dropdown-header .logo {
          color: #9292a3;
        }

        .avatar-popover .avatar-menu .dropdown-menu .dropdown-header .header-text {
          padding-left: 10px;
          font-family: Circular-Std-Book;
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 18px;
          color: #9292a3;
        }

        .avatar-popover .avatar-sub-menu {
          width: 304px;
          user-select: none;
        }

        .avatar-popover .avatar-sub-menu .ant-menu-item-selected {
          background-color: transparent;
        }

        .avatar-popover .avatar-sub-menu .sub-dropdown-list {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: auto;
        }

        .avatar-popover .avatar-sub-menu .sub-dropdown-list span {
          color: #9292a3;
        }

        .avatar-popover .avatar-sub-menu .sub-dropdown-list .sub-header-text {
          padding-left: 10px;
          font-family: 'Circular-Std-Bold';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #3d3d46;
        }

        .avatar-popover .avatar-sub-menu .sub-dropdown-list .sub-dropdown-list-header {
          display: flex;
          align-items: center;
        }

        .avatar-popover .avatar-sub-menu .sub-dropdown-list .sub-dropdown-list-header-text {
          width: 70%;
          white-space: normal;
          word-break: break-all;
          font-family: Circular-Std-Medium;
          padding-left: 8px;
          line-height: 18px;
          color: #9292a3;
        }

        .avatar-popover .avatar-help-menu {
          width: 304px;
          user-select: none;
        }

        .avatar-popover .avatar-help-menu .ant-menu-item-selected {
          background-color: transparent;
        }

        .avatar-popover .avatar-help-menu .ant-menu-item {
          line-height: 0;
          margin-bottom: 0px;
        }

        .avatar-popover .avatar-help-menu .avatar-help-sub-list {
          display: flex;
          align-items: center;
        }

        .avatar-popover .avatar-help-menu .avatar-help-sub-list .feedback-align-content {
          display: flex;
          align-items: center;
        }

        .avatar-popover .avatar-help-menu .avatar-help-sub-list .feedback-align-content p {
          margin-bottom: 0px;
          font-family: 'Circular-Std-Bold';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #3d3d46;
        }

        .avatar-popover .avatar-help-menu .avatar-help-sub-list .feedback-align-content span {
          font-size: 14px;
          padding-left: 5px;
          font-family: 'Circular-Std-Medium';
          font-style: normal;
          font-weight: normal;
          line-height: 18px;
          color: #9292a3;
        }

        .avatar-popover .avatar-help-menu .lang-sub-dropdown-menu {
          display: flex;
          align-items: center;
        }

        .avatar-popover .avatar-help-menu .lang-sub-dropdown-menu span {
          color: #9292a3;
        }

        .avatar-popover .avatar-help-menu .lang-sub-dropdown-menu .ant-menu-item-selected {
          background-color: transparent;
        }

        .avatar-popover .avatar-help-menu .lang-sub-dropdown-menu .lang-align-content {
          display: flex;
          align-items: center;
        }

        .avatar-popover .avatar-help-menu .lang-sub-dropdown-menu .lang-align-content p {
          margin-bottom: 0px;
          font-family: 'Circular-Std-Bold';
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          color: #3d3d46;
        }

        .avatar-popover .text-nowrap {
          white-space: nowrap !important;
        }

        .avatar-popover .ant-dropdown-menu-item {
          padding-top: 15px;
          padding-left: 18px;
          padding-right: 15px;
          padding-bottom: 15px;
        }

        .avatar-popover .active-menu {
          color: #54b2d3 !important;
        }

        .avatar-popover .check-icon {
          font-size: 16px;
        }

        .avatar-popover .language-text-align {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .avatar-popover .language-flag-center {
          display: flex;
          align-items: center;
        }

        .avatar-popover .language-flag-center span {
          padding-left: 10px;
          color: #9292a3;
          font-family: 'Circular-Std-Medium';
        }
      `}</style>
      <Popover
        content={avatarMenu}
        trigger="click"
        placement="bottomRight"
        overlayClassName="avatar-popover"
      >
        <Button>Avatar</Button>
      </Popover>
    </div>
  )
}

export default Dropdown
