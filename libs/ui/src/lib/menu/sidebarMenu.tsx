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
    path: '/dashboard',
  },
  {
    menuName: 'Calendar',
    icon: <CalendarOutlined />,
    path: '/calendar',
  },
  {
    menuName: 'Team',
    icon: <TeamOutlined />,
    children: [
      {
        menuName: 'Staff Manager',
        path: '/team/users',
      },
      {
        menuName: 'Staff Targets',
        path: '/team/targets',
      },
      {
        menuName: 'Schedule',
        path: '/team/schedule',
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
    path: '/reports',
  },
  {
    menuName: 'Stock',
    icon: <ShoppingCartOutlined />,
    children: [
      {
        menuName: 'Products',
        path: '/products/list',
      },
      {
        menuName: 'Inventory count',
        path: '/products/inventory-count',
      },
      {
        menuName: 'Purchase order',
        path: '/products/purchase-order',
      },
      {
        menuName: 'Suppliers',
        path: '/products/suppliers',
      },
    ],
  },
  {
    menuName: 'Marketing',
    icon: <NotificationOutlined />,
    children: [
      {
        menuName: 'Campaigns',
        path: '/marketing/campaigns',
      },
      {
        menuName: 'Reviews',
        path: '/marketing/reviews',
      },
      {
        menuName: 'Gift Vouchers',
        path: '/marketing/vouchers',
      },
      {
        menuName: 'Referral tracker',
        path: '/marketing/referral',
      },
      {
        menuName: 'Loyalty',
        path: '/marketing/loyalty',
      },
    ],
  },
  {
    menuName: 'Financials',
    icon: <WalletOutlined />,
    children: [
      {
        menuName: 'Accounts',
        path: '/finance/accounts',
      },
      {
        menuName: 'Cashup',
        path: '/finance/cashup',
      },
    ],
  },
  {
    menuName: 'Contacts',
    icon: <ProfileOutlined />,
    children: [
      {
        menuName: 'Clients',
        path: '/clients',
      },
      {
        menuName: 'Case manager',
        path: '/clients/cases',
      },
    ],
  },
]
