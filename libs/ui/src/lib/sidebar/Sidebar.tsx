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
  MenuUnfoldOutlined,
} from '@ant-design/icons'
import { Button } from '@pabau/ui'
import styles from './Sidebar.module.less'
import classNames from 'classnames'

const { SubMenu } = Menu
const { Sider } = Layout

interface SidebarMenuItem {
  menuName: string
  icon?: JSX.Element
  children?: SidebarMenuItem[]
}

interface SidebarProps {
  onSideBarCollapsed?: (collapsed: boolean) => void
}

export const Sidebar: FC<SidebarProps> = ({ onSideBarCollapsed }) => {
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

  const sidebarMenu: SidebarMenuItem[] = [
    {
      menuName: 'Dashboard',
      icon: <DashboardOutlined />,
    },
    {
      menuName: 'Calendar',
      icon: <CalendarOutlined />,
    },
    {
      menuName: 'Team',
      icon: <TeamOutlined />,
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
      icon: <RiseOutlined />,
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
      icon: <FundOutlined />,
    },
    {
      menuName: 'Stock',
      icon: <ShoppingCartOutlined />,
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
      icon: <NotificationOutlined />,
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
      icon: <WalletOutlined />,
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
      icon: <ProfileOutlined />,
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

  const onClickMenu = (e) => {
    setSelectedKeys([e.key])
  }

  return (
    <Sider
      trigger={null}
      className={styles.pabauSidebar}
      collapsed={collapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <Menu
        mode="inline"
        style={{ height: '100%', borderRight: 0 }}
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
                styles.sidebarMenu,
                selectedKeys.includes(menuData.menuName + index) && styles.subMenuActive
              )}
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
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: classNames(
              styles.sidebarCollapseIcon,
              styles.sidebarMenu,
              collapsed && styles.sidebarCollapsed
            ),
            onClick: handleSidebarCollapse,
          })}
        </div>
      </Menu>
    </Sider>
  )
}

export default Sidebar
