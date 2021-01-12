/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FC, useState } from 'react'
import { Layout, Menu } from 'antd'
import {
  NotificationOutlined,
  DashboardOutlined,
  TeamOutlined,
  CalendarOutlined,
  FundOutlined,
  RiseOutlined,
  ShoppingCartOutlined,
  WalletOutlined,
  ProfileOutlined,
  SettingOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons'
import { Button } from '@pabau/ui'
import styles from './Sidebar.module.less'
import classNames from 'classnames'
const { SubMenu } = Menu
const { Sider } = Layout

export const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)
  const [openKeys, setOpenKeys] = useState<string[]>([])

  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1)
    setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
  }
  const sidebarMenu: any = [
    {
      menuName: 'Dashboard',
      icon: <DashboardOutlined className={styles.sidebarIcon} />,
    },
    {
      menuName: 'Calendar',
      icon: <CalendarOutlined className={styles.sidebarIcon} />,
    },
    {
      menuName: 'Team',
      icon: <TeamOutlined className={styles.sidebarIcon} />,
      children: [
        {
          menuName: 'Staff manager',
        },
        {
          menuName: 'Staff targets',
        },
        {
          menuName: 'Staff rota',
        },
      ],
    },
    {
      menuName: 'Leads',
      icon: <RiseOutlined className={styles.sidebarIcon} />,
      children: [
        {
          menuName: 'Leads Manager',
        },
        {
          menuName: 'Lead groups',
        },
        {
          menuName: 'Lead views',
        },
        {
          menuName: 'Summary',
        },
        {
          menuName: 'New leads',
        },
      ],
    },
    {
      menuName: 'Reports',
      icon: <FundOutlined className={styles.sidebarIcon} />,
    },
    {
      menuName: 'Stock',
      icon: <ShoppingCartOutlined className={styles.sidebarIcon} />,
      children: [
        {
          menuName: 'Products',
        },
        {
          menuName: 'Inventory count',
        },
        {
          menuName: 'Purchase order',
        },
        {
          menuName: 'Suppliers',
        },
      ],
    },
    {
      menuName: 'Marketing',
      icon: <NotificationOutlined className={styles.sidebarIcon} />,
      children: [
        {
          menuName: 'SMS campaign',
        },
        {
          menuName: 'Birthday mailer',
        },
        {
          menuName: 'Newsletter manager',
        },
        {
          menuName: 'Social survey',
        },
        {
          menuName: 'Gift vouchers',
        },
        {
          menuName: 'Referral tracker',
        },
        {
          menuName: 'Loyalty',
        },
      ],
    },
    {
      menuName: 'Financials',
      icon: <WalletOutlined className={styles.sidebarIcon} />,
      children: [
        {
          menuName: 'Accounts',
        },
        {
          menuName: 'Cashups',
        },
      ],
    },
    {
      menuName: 'Contacts',
      icon: <ProfileOutlined className={styles.sidebarIcon} />,
      children: [
        {
          menuName: 'Contact manager',
        },
        {
          menuName: 'Case manager',
        },
      ],
    },
  ]

  const renderMenu = (index, menuName, icon) => {
    return (
      <Menu.Item key={index} icon={icon} className={styles.sidebarMenu}>
        {menuName}
      </Menu.Item>
    )
  }
  const onCollapse = () => {
    setCollapsed((e) => !e)
  }
  return (
    <Sider className={styles.pabauSidebar} collapsed={collapsed} onCollapse={onCollapse}>
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        {sidebarMenu.map((menuData, index) => {
          return !menuData.children ? (
            renderMenu(menuData.menuName + index, menuData.menuName, menuData.icon)
          ) : (
            <SubMenu
              key={menuData.menuName + index}
              icon={menuData.icon}
              title={menuData.menuName}
              className={styles.sidebarMenu}
            >
              {menuData.children.map((subMenu, subIndex) => {
                return renderMenu(subMenu.menuName + subIndex, subMenu.menuName, subMenu?.icon)
              })}
            </SubMenu>
          )
        })}
        <div className={styles.sidebarBtnAlign}>
          {collapsed ? (
            <SettingOutlined className={styles.sidebarMenu} />
          ) : (
            <Button
              icon={<SettingOutlined className={styles.sidebarMenu} />}
              className={styles.setupBtn}
            >
              Setup
            </Button>
          )}
        </div>
        <div>
          <MenuFoldOutlined
            className={classNames(
              styles.sidebarCollapseIcon,
              styles.sidebarMenu,
              collapsed && styles.sidebarCollapsed
            )}
            onClick={onCollapse}
          />
        </div>
      </Menu>
    </Sider>
  )
}

export default Sidebar
