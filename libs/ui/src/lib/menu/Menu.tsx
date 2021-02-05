import React, { FC, useState } from 'react'
import { Layout, Menu as AntMenu, Tooltip } from 'antd'
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
  active?: string
}

export const Menu: FC<P> = ({ onSideBarCollapsed, active }) => {
  const [collapsed, setCollapsed] = useState(true)
  const [openKeys, setOpenKeys] = useState<string[]>([])
  const [selectedKeys, setSelectedKeys] = useState<string[]>([])
  const [activeMenu, setActive] = useState<string>(active ? active : '')

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

  const renderMenu = (index, menuName, icon, path) => {
    return (
      <AntMenu.Item
        key={index}
        icon={icon}
        className={classNames(
          styles.sidebarMenu,
          activeMenu && styles.removeSelected
        )}
        onClick={() => setActive('')}
      >
        <Link href={path}>{menuName}</Link>
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
        overflowY: 'auto',
        height: 'calc(100vh - 80px)',
        position: 'fixed',
        left: 0,
        overflowX: 'hidden',
      }}
    >
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
              menuData.icon,
              menuData?.path
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
                  !activeMenu &&
                  styles.subMenuActive
              )}
            >
              {menuData.children.map((subMenu, subIndex) => {
                return renderMenu(
                  subMenu.menuName + subIndex,
                  subMenu.menuName,
                  subMenu?.icon,
                  subMenu?.path
                )
              })}
            </SubMenu>
          )
        })}
        <span>
          <Tooltip title={collapsed ? 'Setup' : ''} placement="left">
            <div
              className={styles.sidebarBtnAlign}
              onClick={() => setActive('setup')}
            >
              <Link href="/setup">
                {collapsed ? (
                  <SettingOutlined
                    className={`${
                      activeMenu === 'setup'
                        ? styles.activeSidebarMenu
                        : styles.sidebarMenu
                    }`}
                  />
                ) : (
                  <Button
                    icon={
                      <SettingOutlined
                        className={`${
                          activeMenu === 'setup'
                            ? styles.activeSidebarMenu
                            : styles.sidebarMenu
                        }`}
                      />
                    }
                    className={styles.setupBtn}
                  >
                    Setup
                  </Button>
                )}
              </Link>
            </div>
          </Tooltip>
        </span>
      </AntMenu>
    </Sider>
  )
}

export default Menu
