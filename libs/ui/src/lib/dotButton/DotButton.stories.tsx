import React from 'react'
import { CopyOutlined, ShareAltOutlined, DeleteOutlined } from '@ant-design/icons'
import DotButton from './DotButton'

export default {
  component: DotButton,
  title: 'Basics/DotButton',
}

const menuList = [
  {
    icon: <CopyOutlined />,
    label: 'Clone',
  },
  {
    icon: <ShareAltOutlined />,
    label: 'Share',
  },
  {
    icon: <DeleteOutlined />,
    label: 'Delete',
  },
]

export function DotMenuButton(): JSX.Element {
  return (
    <div>
      <DotButton menuList={menuList} />
    </div>
  )
}
