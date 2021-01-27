import React, { FC, ReactNode } from 'react'
import { Popover, Button } from 'antd'
import { MoreOutlined } from '@ant-design/icons'

import styles from './DotButton.module.less'

interface IOption {
  icon: ReactNode
  label: string
  onClick?(): void
}

/* eslint-disable-next-line */
export interface DotButtonProps {
  menuList: IOption[]
}

export const DotButton: FC<DotButtonProps> = (props) => {
  const { menuList } = props

  const prepareContent = () => {
    return (
      <div className={styles.dotWrapper}>
        {menuList &&
          menuList.map((i, index) => (
            <div
              className={styles.dotList}
              key={`three-dot-menu-content-${index}`}
            >
              {i.icon}
              <p>{i.label}</p>
            </div>
          ))}
      </div>
    )
  }

  return (
    <Popover content={prepareContent()} placement="leftTop" trigger="click">
      <Button
        className={styles.btnCircle}
        shape="circle"
        icon={<MoreOutlined />}
      />
    </Popover>
  )
}

export default DotButton
