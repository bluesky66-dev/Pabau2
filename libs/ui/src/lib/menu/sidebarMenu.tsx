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
        path: '/team/staffmanager',
      },
      {
        menuName: 'Staff Targets',
        path: '/team/stafftargets',
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
        path: '/stock/products',
      },
      {
        menuName: 'Inventory count',
        path: '/stock/inventorycount',
      },
      {
        menuName: 'Purchase order',
        path: '/stock/purchaseorder',
      },
      {
        menuName: 'Suppliers',
        path: '/stock/suppliers',
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
        path: '/marketing/giftvouchers',
      },
      {
        menuName: 'Referral tracker',
        path: '/marketing/referraltracker',
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
        path: '/financials/accounts',
      },
      {
        menuName: 'Cashup',
        path: '/financials/cashup',
      },
    ],
  },
  {
    menuName: 'Contacts',
    icon: <ProfileOutlined />,
    children: [
      {
        menuName: 'Clients',
        path: '/contacts/clients',
      },
      {
        menuName: 'Case manager',
        path: '/contacts/casemanager',
      },
    ],
  },
]
