import React from 'react'
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
} from '@ant-design/icons'

export interface SidebarMenuItem {
  menuName: string
  icon?: JSX.Element
  children?: SidebarMenuItem[]
}

export const sidebarMenu: SidebarMenuItem[] = [
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
        menuName: 'Staff Manager',
      },
      {
        menuName: 'Staff Targets',
      },
      {
        menuName: 'Schedule',
      },
    ],
  },
  {
    menuName: 'Leads',
    icon: <RiseOutlined />,
    children: [
      {
        menuName: 'Leads',
      },
      {
        menuName: 'Lead groups',
      },
      {
        menuName: 'Lead views',
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
        menuName: 'Newsletter',
      },
      {
        menuName: 'Feedback Survey',
      },
      {
        menuName: 'Gift Vouchers',
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
        menuName: 'Cashup',
      },
    ],
  },
  {
    menuName: 'Contacts',
    icon: <ProfileOutlined />,
    children: [
      {
        menuName: 'Clients',
      },
      {
        menuName: 'Case manager',
      },
    ],
  },
]
