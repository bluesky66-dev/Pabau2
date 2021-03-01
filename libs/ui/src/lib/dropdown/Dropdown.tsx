import {
  CaretDownOutlined,
  CheckCircleFilled,
  ExclamationOutlined,
  ExportOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
  LeftOutlined,
  NotificationOutlined,
  PlaySquareOutlined,
  QuestionCircleOutlined,
  RightOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Avatar, Badge, Drawer, Image, Menu, Popover } from 'antd'
import classNames from 'classnames'
import Link from 'next/link'
import QueueAnim from 'rc-queue-anim'
import React, { FC, useEffect, useState } from 'react'
import { ReactComponent as JASVG } from '../../assets/images/JA.svg'
import { languageMenu } from '../../assets/images/lang-logos'
import { ReactComponent as LaunchSVG } from '../../assets/images/launch.svg'
import { ReactComponent as PABAULOGO } from '../../assets/images/pabaulogo.svg'
import { ReactComponent as UPSVG } from '../../assets/images/UP.svg'
import { ReactComponent as TaskSVG } from '../../assets/images/Vector.svg'
import styles from './Dropdown.module.less'
import useLogin from '../../hooks/useLogin'
import { useLiveQuery } from '../../hooks/useLiveQuery'
import { gql } from '@apollo/client'

// import { isMobile, isTablet } from 'react-device-detect'
export interface DropDownInterface {
  isOpen?: boolean
  onCloseDrawer?: () => void
  user?: any
}

const ACTIVE_USER = gql`
  query currentUser($user: Int!) {
    users(where: { id: { equals: $user } }) {
      full_name
      company
    }
  }
`

interface CurrentUserProps {
  full_name: string
  company: number
}

export const Dropdown: FC<DropDownInterface> = ({
  isOpen,
  onCloseDrawer,
}): JSX.Element => {
  const [activeMenu, setActiveMenu] = useState('Menu')

  // used for mobile device
  const [openProfileDrawer, setProfileDrawer] = useState(isOpen)
  const [activeMenuTitle, setActiveMenuTitle] = useState('Profile')
  const [authenticated, user] = useLogin(false)
  const [currentUserId, setCurrentUserId] = useState<null | number>(null)
  const [currentUser, setCurrentUser] = useState<CurrentUserProps>({
    full_name: 'William Branham',
    company: 8254,
  })

  useEffect(() => {
    if (user) {
      setCurrentUserId(user.user)
    }
  }, [authenticated, user])

  const { data } = useLiveQuery(ACTIVE_USER, {
    variables: { user: currentUserId },
  })

  useEffect(() => {
    if (data) {
      console.log(data[0])
      setCurrentUser(data[0])
    }
  }, [data])
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
        <div className={styles.userName}>{currentUser.full_name}</div>
        <div className={styles.userBalance}>
          <p>Balance</p>
          <span>9445,00</span>
        </div>
      </Menu.Item>
      <Menu.Item
        className={classNames(styles.dropdownMenu, styles.avatarSpaceTop)}
      >
        <div className={styles.dropdownHeader}>
          <UserOutlined style={{ color: '#9292A3' }} />
          <Link href="/account/settings">
            <span className={styles.headerText}>Account Settings</span>
          </Link>
        </div>
        <LaunchSVG className={styles.launchLogo} />
      </Menu.Item>
      <Menu.Item
        className={styles.dropdownMenu}
        style={{ borderBottom: '1px solid #F1F1F1' }}
      >
        <div className={styles.dropdownHeader}>
          <TaskSVG />
          <span className={classNames(styles.headerText, styles.taskText)}>
            Tasks
          </span>
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
      <Menu.Item
        className={styles.dropdownMenu}
        onClick={() => onClickAvatarMenu('HelpMenu')}
      >
        <div className={styles.dropdownHeader}>
          <QuestionCircleOutlined className={styles.dropdownIcon} />
          <span className={styles.headerText}>Help & Support</span>
        </div>
        <RightOutlined className={styles.dropdownIcon} />
      </Menu.Item>
      <Menu.Item
        className={styles.dropdownMenu}
        onClick={() => onClickAvatarMenu('LangMenu')}
      >
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
      <div style={{ marginTop: '8px' }} />
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
          <CheckCircleFilled
            className={classNames(styles.checkIcon, styles.activeMenu)}
          />
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
              University of Portsmouth Essenntial Student Guide – Info, Offers,
              Nightlife
            </span>
          </div>
        </Menu.Item>
        <div style={{ marginTop: '8px' }} />
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
        <div style={{ marginTop: '8px' }} />
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
        <div style={{ marginTop: '8px' }} />
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
                <span className={lang.selected ? styles.activeMenu : undefined}>
                  {lang.label}
                </span>
              </div>
              {lang.selected && (
                <CheckCircleFilled
                  className={classNames(styles.checkIcon, styles.activeMenu)}
                />
              )}
            </Menu.Item>
          )
        })}
        <div style={{ marginTop: '8px' }} />
      </Menu>
    </QueueAnim>
  )

  const onClickAvatarMenu = (menuName: string) => {
    if (menuName === 'Menu') {
      setActiveMenuTitle('Profile')
    } else if (menuName === 'ClinicMenu') {
      setActiveMenuTitle('Select company')
    } else if (menuName === 'FeedbackMenu') {
      setActiveMenuTitle('Give us feedback')
    } else if (menuName === 'HelpMenu') {
      setActiveMenuTitle('Help & Support')
    } else if (menuName === 'LangMenu') {
      setActiveMenuTitle('Select language')
    }
    setActiveMenu(menuName)
  }

  const getActiveAvatarMenu = () => {
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

  const onClickMobileBackToMenu = () => {
    if (activeMenu !== 'Menu') {
      setActiveMenuTitle('Profile')
      setActiveMenu('Menu')
    } else {
      setProfileDrawer(false)
      onCloseDrawer?.()
    }
  }

  return (
    <div>
      <div className={styles.mobileViewNone}>
        <Popover
          content={getActiveAvatarMenu}
          trigger="click"
          placement="bottomRight"
          overlayClassName={styles.avatarPopover}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              paddingLeft: '20px',
              cursor: 'pointer',
            }}
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

            <CaretDownOutlined
              style={{ paddingLeft: '5px', color: '#9292A3' }}
            />
          </div>
        </Popover>
      </div>

      <Drawer
        visible={openProfileDrawer}
        placement="left"
        closable={false}
        className={classNames(styles.mobileAvatarDrawar)}
      >
        <div className={styles.mobileViewAlign}>
          <div className={styles.mobileViewHeaderHeading}>
            <LeftOutlined onClick={onClickMobileBackToMenu} />
            <p>{activeMenuTitle}</p>
          </div>
        </div>
        <div className={styles.avatarPopover}>{getActiveAvatarMenu()}</div>
      </Drawer>
    </div>
  )
}

export default Dropdown
