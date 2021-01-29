import React, { FC, useState } from 'react'
import { Layout, Menu as AntMenu } from 'antd'
import {
  SettingOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button } from '@pabau/ui'
import styles from './Menu.module.less'
import classNames from 'classnames'
import Link from 'next/link'
import { sidebarMenu } from './sidebarMenu'
const { SubMenu } = AntMenu
const { Sider } = Layout

interface P {
  onSideBarCollapsed?: (collapsed: boolean) => void
}

export const Menu: FC<P> = ({ onSideBarCollapsed }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])

  const handleSidebarCollapse = () => {
    setCollapsed((e) => {
      onSideBarCollapsed && onSideBarCollapsed(!e)
      return !e
    })
  }

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }

  const renderMenu = (index, menuName, icon) => {
    return (
      <AntMenu.Item key={index} icon={icon} className={styles.sidebarMenu}>
        {menuName}
      </AntMenu.Item>
    )
  }

  const onClickMenu = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <Sider
      trigger={null}
      className={classNames(styles.pabauSidebar, styles.mobileViewNone)}
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <AntMenu
        mode="inline"
        className={styles.sidebar}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        multiple={false}
        selectedKeys={selectedKeys}
        onClick={onClickMenu}
      >
        {sidebarMenu.map((menuData, index) => {
          return !menuData.children ? (
            renderMenu(
              menuData.menuName + index,
              menuData.menuName,
              menuData.icon
            )
          ) : (
            <SubMenu
              key={menuData.menuName + index}
              icon={menuData.icon}
              title={menuData.menuName}
              onTitleClick={onClickMenu}
              className={classNames(
                styles.sidebarMenu,
                selectedKeys.includes(menuData.menuName + index) &&
                  styles.subMenuActive
              )}
            >
              {menuData.children.map((subMenu, subIndex) => {
                return renderMenu(
                  subMenu.menuName + subIndex,
                  subMenu.menuName,
                  subMenu?.icon
                )
              })}
            </SubMenu>
          )
        })}
        <div className={styles.sidebarBtnAlign}>
          {collapsed ? (
            <SettingOutlined className={styles.sidebarMenu} />
          ) : (
            <Link href="/setup">
              <Button
                icon={<SettingOutlined className={styles.sidebarMenu} />}
                className={styles.setupBtn}
              >
                Setup
              </Button>
            </Link>
          )}
        </div>
        <div>
          {React.createElement(
            collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
            {
              className: classNames(
                styles.sidebarCollapseIcon,
                styles.sidebarMenu,
                collapsed && styles.sidebarCollapsed
              ),
              onClick: handleSidebarCollapse,
            }
          )}
        </div>
      </AntMenu>
    </Sider>
  )
}

export default Menu
