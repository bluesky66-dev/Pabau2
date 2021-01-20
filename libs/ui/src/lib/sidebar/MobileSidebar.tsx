import React, { FC, useState } from 'react'
import { Drawer, Menu } from 'antd'
import { Button, Search } from '@pabau/ui'
import styles from './MobileSidebar.module.less'
import classNames from 'classnames'
import { sidebarMenu, SidebarMenuItem } from './sidebarMenu'
import {
  BellOutlined,
  CloseOutlined,
  MailOutlined,
  PlusCircleFilled,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons'
import Avatar from 'antd/lib/avatar/avatar'
import Link from 'next/link'

const { SubMenu } = Menu

interface SidebarProps {
  searchRender?: (innerComponent: JSX.Element) => JSX.Element
  onSideBarClosed: () => void
  onClickNotificationDrawer: () => void
  onClickChatDrawer: () => void
}

export const Sidebar: FC<SidebarProps> = ({
  searchRender,
  onSideBarClosed,
  onClickNotificationDrawer,
  onClickChatDrawer,
}) => {
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const mobileSidebar: SidebarMenuItem[] = [
    {
      menuName: 'Setup',
      icon: <SettingOutlined />,
    },
    {
      menuName: 'Notifications',
      icon: <BellOutlined />,
    },
    {
      menuName: 'Chat',
      icon: <MailOutlined />,
    },
  ]

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  const renderMenu = (index, menuName, icon) => {
    return (
      <Menu.Item key={index} icon={icon} className={styles.sidebarMenu}>
        {menuName}
      </Menu.Item>
    )
  }

  const onClickMenu = (e) => {
    setSelectedKeys([e.key])
    if (e.key.includes('Notifications')) {
      onClickNotificationDrawer()
    } else if (e.key.includes('Chat')) {
      onClickChatDrawer()
    }
  }

  return (
    <Drawer visible={true} placement="left" closable={false} className={styles.mobileSidebar}>
      <div className={styles.mobileViewAlign}>
        <div className={styles.menuHeaderHeading}>
          <CloseOutlined className="menuHeaderIconColor" onClick={onSideBarClosed} />
          <p>Menu</p>
        </div>
      </div>
      <div className={styles.searchBox}>{searchRender ? searchRender(<Search />) : <Search />}</div>
      <Menu
        className={styles.sidebar}
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        multiple={false}
        selectedKeys={selectedKeys}
        onClick={onClickMenu}
      >
        {sidebarMenu.map((menuData, index) => {
          return !menuData.children ? (
            renderMenu(menuData.menuName + index, menuData.menuName, menuData.icon)
          ) : (
            <SubMenu
              key={menuData.menuName + index}
              icon={menuData.icon}
              title={menuData.menuName}
              onTitleClick={onClickMenu}
              className={classNames(
                styles.sidebarSubMenu,
                selectedKeys.includes(menuData.menuName + index) && styles.subMenuActive
              )}
            >
              {menuData.children.map((subMenu, subIndex) => {
                return renderMenu(subMenu.menuName + subIndex, subMenu.menuName, subMenu?.icon)
              })}
            </SubMenu>
          )
        })}
        <div className={styles.divborder}></div>
        {mobileSidebar.map((menuData, index) => {
          return renderMenu(menuData.menuName + index, menuData.menuName, menuData.icon)
        })}
        <Menu.Item
          className={styles.sidebarMenu}
          icon={<Avatar size={24} icon={<UserOutlined />} />}
        >
          Profile
        </Menu.Item>
        <div className={styles.buttonMenu}>
          <Button
            className={classNames(styles.buttonStyles, styles.createBtn)}
            icon={<PlusCircleFilled />}
          >
            Create
          </Button>
        </div>
        <div className={styles.buttonMenu}>
          <Link href="/setup">
            <Button
              className={classNames(styles.buttonStyles, styles.setUpBtn)}
              icon={<SettingOutlined />}
            >
              Setup
            </Button>
          </Link>
        </div>
      </Menu>
    </Drawer>
  )
}

export default Sidebar
