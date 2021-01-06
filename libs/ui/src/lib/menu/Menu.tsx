import React, { FC } from 'react'
import { CalendarOutlined, PoundOutlined, SmileOutlined, UserOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import Link from 'next/link'
import { useKeyPressEvent } from 'react-use'
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

export const Menu: FC = () => {
  const router = useRouter()
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  useKeyPressEvent(['1', '2', '3', '4', '5', '6', '7', '8', '9'], (e) => {
    console.log('key pressed', e)
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      router.push(items[parseInt(e.key) - 1].url)
      // eslint-disable-next-line no-empty
    } catch {}
  })
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
