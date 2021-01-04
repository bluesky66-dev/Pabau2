import React, { FC } from 'react'
import { CalendarOutlined, PoundOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'

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

export const Menu: FC = () => {
  return (
    <div className="main">
      <style jsx>{`
        .main {
          background-color: #dbf7ff;
          height: 56px;
          line-height: 56px;
          padding: 0 1em;
          overflow: hidden;
        }
      `}</style>
      {items.map(({ name, icon = <PoundOutlined />, url = '/' }) => (
        <Link key={name} href={url}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a style={{ height: '100%' }}>
            <Button
              style={{ height: '100%' }}
              type="text"
              // onClick={() => url && router.replace(url)}
            >
              {icon}
              <span style={{ fontWeight: 600 }}>{name}</span>
            </Button>
          </a>
        </Link>
      ))}
    </div>
  )
}

export default Menu
