// teest edit, remove this line
import React, { HTMLProps, useState } from 'react'
import { Menu, Badge, Avatar, Popover, Image } from 'antd'
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
import { ReactComponent as PABAULOGO } from '../../assets/images/pabaulogo.svg'
import { ReactComponent as LaunchSVG } from '../../assets/images/launch.svg'
import { ReactComponent as JASVG } from '../../assets/images/JA.svg'
import { ReactComponent as UPSVG } from '../../assets/images/UP.svg'
import { ReactComponent as TaskSVG } from '../../assets/images/Vector.svg'
import { languageMenu } from '../../assets/images/lang-logos'
import styles from './dropdown.module.less'
import classNames from 'classnames'
import QueueAnim from 'rc-queue-anim'
export interface DropDownInterface {
  loading?: boolean
  visible?: boolean
  onClick?: () => void
  handleSubmit?: () => void
}

export function Dropdown(props: HTMLProps<HTMLDivElement>): JSX.Element {
  const [activeMenu, setActiveMenu] = useState('Menu')

  const menu = (
    <Menu className={styles.avatarMenu}>
      <Menu.Item
        className={classNames(styles.dropdownMenu, styles.clinicHeader)}
        onClick={() => onClickAvatarMenu('ClinicMenu')}
      >
        <div className={styles.dropdownHeader}>
          <PABAULOGO />
          <span className={styles.headerText}>Pabau Clinic Software</span>
        </div>
        <RightOutlined className={styles.dropdownIcon} />
      </Menu.Item>
      <Menu.Item className={styles.userinfo}>
        <div className={styles.userName}>William Branham</div>
        <div className={styles.userBalance}>
          <p>Balance</p>
          <span>9445,00</span>
        </div>
      </Menu.Item>
      <Menu.Item className={classNames(styles.dropdownMenu, styles.avatarSpaceTop)}>
        <div className={styles.dropdownHeader}>
          <UserOutlined style={{ color: '#9292A3' }} />
          <span className={styles.headerText}>Account Settings</span>
        </div>
        <LaunchSVG className={styles.launchLogo} />
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenu} style={{ borderBottom: '1px solid #F1F1F1' }}>
        <div className={styles.dropdownHeader}>
          <TaskSVG />
          <span className={classNames(styles.headerText, styles.taskText)}>Tasks</span>
        </div>
      </Menu.Item>
      <Menu.Item
        className={classNames(styles.dropdownMenu, styles.avatarSpaceTop)}
        onClick={() => onClickAvatarMenu('FeedbackMenu')}
      >
        <div className={styles.dropdownHeader}>
          <NotificationOutlined className={styles.dropdownIcon} />
          <span className={styles.headerText}>Give feedback</span>
        </div>
        <RightOutlined className={styles.dropdownIcon} />
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenu} onClick={() => onClickAvatarMenu('HelpMenu')}>
        <div className={styles.dropdownHeader}>
          <QuestionCircleOutlined className={styles.dropdownIcon} />
          <span className={styles.headerText}>Help & Support</span>
        </div>
        <RightOutlined className={styles.dropdownIcon} />
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenu} onClick={() => onClickAvatarMenu('LangMenu')}>
        <div className={styles.dropdownHeader}>
          <GlobalOutlined className={styles.dropdownIcon} />
          <span className={styles.headerText}>English</span>
        </div>
        <RightOutlined className={styles.dropdownIcon} />
      </Menu.Item>
      <Menu.Item className={styles.dropdownMenu}>
        <div className={styles.dropdownHeader}>
          <ExportOutlined className={styles.dropdownIcon} />
          <span className={styles.headerText}>Log out</span>
        </div>
      </Menu.Item>
      <div style={{ marginTop: '8px' }}></div>
    </Menu>
  )

  const ClinicSubMenu = (
    <QueueAnim interval={300}>
      <Menu key="2" className={styles.avatarSubMenu}>
        <Menu.Item
          className={styles.subDropdownList}
          onClick={() => onClickAvatarMenu('Menu')}
          style={{ height: '56px' }}
        >
          <div className={styles.subDropdownListHeader}>
            <LeftOutlined className={styles.subLogo} />
            <span className={styles.subHeaderText}>Select company</span>
          </div>
        </Menu.Item>
        <Menu.Item className={styles.subDropdownList}>
          <div className={styles.subDropdownListHeader}>
            <PABAULOGO />
            <span
              className={classNames(
                styles.subDropdownListHeaderText,
                styles.textNowrap,
                styles.activeMenu
              )}
            >
              Pabau Clinic Software
            </span>
          </div>
          <CheckCircleFilled className={classNames(styles.checkIcon, styles.activeMenu)} />
        </Menu.Item>
        <Menu.Item className={styles.subDropdownList}>
          <div className={styles.subDropdownListHeader}>
            <JASVG />
            <span className={classNames(styles.subDropdownListHeaderText)}>
              Jason Austin Har Salon’s & Barbershops
            </span>
          </div>
        </Menu.Item>
        <Menu.Item
          className={styles.subDropdownList}
          style={{ paddingTop: '12px', paddingBottom: '16px' }}
        >
          <div className={styles.subDropdownListHeader}>
            <UPSVG />
            <span className={classNames(styles.subDropdownListHeaderText)}>
              University of Portsmouth Essenntial Student Guide – Info, Offers, Nightlife
            </span>
          </div>
        </Menu.Item>
        <div style={{ marginTop: '8px' }}></div>
      </Menu>
    </QueueAnim>
  )

  const FeedbackMenu = (
    <QueueAnim interval={600}>
      <Menu key="3" className={styles.avatarHelpMenu}>
        <Menu.Item
          className={classNames(styles.avatarHelpSubList)}
          onClick={() => setActiveMenu('Menu')}
          style={{ height: '56px' }}
        >
          <div className={styles.feedbackAlignContent}>
            <LeftOutlined className={styles.subLogo} />
            <p className={styles.subHeaderText}>Give us feedback</p>
          </div>
        </Menu.Item>
        <Menu.Item className={styles.avatarHelpSubList}>
          <div className={styles.feedbackAlignContent}>
            <InfoCircleOutlined className="" />
            <span className="">Help us improve Pabau</span>
          </div>
        </Menu.Item>
        <Menu.Item className={styles.avatarHelpSubList}>
          <div className={styles.feedbackAlignContent}>
            <ExclamationOutlined className="" />
            <span className="">Something went wrong</span>
          </div>
        </Menu.Item>
        <div style={{ marginTop: '8px' }}></div>
      </Menu>
    </QueueAnim>
  )

  const HelpMenu = (
    <QueueAnim interval={600}>
      <Menu key="4" className={styles.avatarHelpMenu}>
        <Menu.Item
          className={classNames(styles.avatarHelpSubList)}
          onClick={() => onClickAvatarMenu('Menu')}
          style={{ height: '56px' }}
        >
          <div className={styles.feedbackAlignContent}>
            <LeftOutlined className={styles.subLogo} />
            <p className={styles.subHeaderText}>Help & Support </p>
          </div>
        </Menu.Item>
        <Menu.Item className={styles.avatarHelpSubList}>
          <div className={styles.feedbackAlignContent}>
            <QuestionCircleOutlined className="" />
            <span className="">Help Centre</span>
          </div>
        </Menu.Item>
        <Menu.Item className={styles.avatarHelpSubList}>
          <div className={styles.feedbackAlignContent}>
            <PlaySquareOutlined className="" />
            <span className="">Video Guides</span>
          </div>
        </Menu.Item>
        <Menu.Item className={styles.avatarHelpSubList}>
          <div className={styles.feedbackAlignContent}>
            <ExclamationOutlined className="" />
            <span className="">Contact Support</span>
          </div>
        </Menu.Item>
        <div style={{ marginTop: '8px' }}></div>
      </Menu>
    </QueueAnim>
  )

  const LangMenu = (
    <QueueAnim interval={600}>
      <Menu key="5" className={styles.avatarHelpMenu}>
        <Menu.Item
          className={styles.langSubDropdownMenu}
          onClick={() => onClickAvatarMenu('Menu')}
          style={{ height: '56px' }}
        >
          <div className={styles.langAlignContent}>
            <LeftOutlined className="" />
            <p className="">Select language </p>
          </div>
        </Menu.Item>
        {languageMenu.map((lang, index) => {
          return (
            <Menu.Item key={index} className={styles.languageTextAlign}>
              <div className={styles.languageFlagCenter}>
                <Image src={lang.logo} alt={lang.label} />
                <span className={lang.selected && styles.activeMenu}>{lang.label}</span>
              </div>
              {lang.selected && (
                <CheckCircleFilled className={classNames(styles.checkIcon, styles.activeMenu)} />
              )}
            </Menu.Item>
          )
        })}
        <div style={{ marginTop: '8px' }}></div>
      </Menu>
    </QueueAnim>
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
      overlayClassName={styles.avatarPopover}
    >
      <div
        style={{ display: 'flex', alignItems: 'center', paddingLeft: '20px', cursor: 'pointer' }}
      >
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
