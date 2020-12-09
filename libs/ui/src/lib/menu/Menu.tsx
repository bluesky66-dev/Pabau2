import React, { FC } from 'react'

import './Menu.less'
import { CalendarOutlined, PoundOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { useRouter } from 'next/router'

const items = [
  {
    name: 'Dashboard',
    icon: <UserOutlined />,
    url: '/',
  },
  {
    name: 'Calendar',
    icon: <SmileOutlined />,
  },
  {
    name: 'Clients',
    icon: <CalendarOutlined />,
  },
  {
    name: 'Leads',
    icon: <PoundOutlined />,
  },
  {
    name: 'Reports',
    icon: <PoundOutlined />,
  },
  {
    name: 'Stock',
    icon: <PoundOutlined />,
  },
  {
    name: 'Marketing',
    icon: <PoundOutlined />,
    url: '/marketing',
  },
  {
    name: 'Financials',
    icon: <PoundOutlined />,
  },
]

const Menu: FC = () => {
  const router = useRouter()
  return (
    <div className="main">
      {items.map(({ name, icon = <PoundOutlined />, url }) => (
        <a key={name} href={url}>
          <Button style={{ height: '100%' }} type="text" onClick={() => url && router.replace(url)}>
            {icon}
            <span style={{ fontWeight: 600 }}>{name}</span>
          </Button>
        </a>
      ))}
    </div>
  )
}

export default Menu
