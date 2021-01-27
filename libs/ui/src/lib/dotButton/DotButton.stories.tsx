import React from 'react'
import {
  CopyOutlined,
  ShareAltOutlined,
  DeleteOutlined,
} from '@ant-design/icons'
import DotButton from './DotButton'

export default {
  component: DotButton,
  title: 'Basics/DotButton',
}

const menuList = [
  {
    key: 1,
    icon: <CopyOutlined />,
    label: 'Clone',
  },
  {
    key: 2,
    icon: <ShareAltOutlined />,
    label: 'Share',
  },
  {
    key: 3,
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
