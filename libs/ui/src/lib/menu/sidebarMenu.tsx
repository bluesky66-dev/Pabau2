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
  path?: string
  children?: SidebarMenuItem[]
}

export const sidebarMenu: SidebarMenuItem[] = [
  {
    menuName: 'Dashboard',
    icon: <DashboardOutlined />,
    path: '/',
  },
  {
    menuName: 'Calendar',
    icon: <CalendarOutlined />,
    path: '/',
  },
  {
    menuName: 'Team',
    icon: <TeamOutlined />,
    children: [
      {
        menuName: 'Staff Manager',
        path: '/',
      },
      {
        menuName: 'Staff Targets',
        path: '/',
      },
      {
        menuName: 'Schedule',
        path: '/',
      },
    ],
  },
  {
    menuName: 'Leads',
    icon: <RiseOutlined />,
    path: '/leads',
  },
  {
    menuName: 'Reports',
    icon: <FundOutlined />,
    path: '/',
  },
  {
    menuName: 'Stock',
    icon: <ShoppingCartOutlined />,
    children: [
      {
        menuName: 'Products',
        path: '/',
      },
      {
        menuName: 'Inventory count',
        path: '/',
      },
      {
        menuName: 'Purchase order',
        path: '/',
      },
      {
        menuName: 'Suppliers',
        path: '/',
      },
    ],
  },
  {
    menuName: 'Marketing',
    icon: <NotificationOutlined />,
    children: [
      {
        menuName: 'Campaigns',
        path: '/',
      },
      {
        menuName: 'Reviews',
        path: '/',
      },
      {
        menuName: 'Gift Vouchers',
        path: '/',
      },
      {
        menuName: 'Referral tracker',
        path: '/',
      },
      {
        menuName: 'Loyalty',
        path: '/',
      },
    ],
  },
  {
    menuName: 'Financials',
    icon: <WalletOutlined />,
    children: [
      {
        menuName: 'Accounts',
        path: '/',
      },
      {
        menuName: 'Cashup',
        path: '/',
      },
    ],
  },
  {
    menuName: 'Contacts',
    icon: <ProfileOutlined />,
    children: [
      {
        menuName: 'Clients',
        path: '/',
      },
      {
        menuName: 'Case manager',
        path: '/',
      },
    ],
  },
]
