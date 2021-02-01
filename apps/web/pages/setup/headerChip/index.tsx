import React from 'react'
import { SetupChip } from '@pabau/ui'
import styles from '../Setup.module.less'

import {
  EditOutlined,
  PlaySquareOutlined,
  UsergroupAddOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'

const data = [
  {
    title: 'Blog',
    subTitle: '53 posts',
    image: <EditOutlined />,
  },
  {
    title: 'Community',
    subTitle: '18 topics',
    image: <UsergroupAddOutlined />,
  },
  {
    title: 'Video guides',
    subTitle: '18 videos',
    image: <PlaySquareOutlined />,
  },
  {
    title: 'Help guides',
    subTitle: '28 guides',
    image: <QuestionCircleOutlined />,
  },
]

const HeaderChip = () => {
  return (
    <div className={styles.headerChipWrapper}>
      {data && data.map((value, index) => <SetupChip key={index} {...value} />)}
    </div>
  )
}

export default HeaderChip
