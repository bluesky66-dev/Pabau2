import React, { FC, useState, useEffect } from 'react'
import { Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import styles from './SimpleDropdown.module.less'

/* eslint-disable-next-line */
export interface SimpleDropdownProps {
  label?: string
  menuItems: Array<string>
  onSelected(val): void
}

export const SimpleDropdown: FC<SimpleDropdownProps> = ({
  label,
  menuItems,
  onSelected,
}) => {
  const [selected, setSelected] = useState('')
  const handleMenuClick = (e) => {
    setSelected(e.key)
    onSelected(e.key)
  }
  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      {Array.isArray(menuItems) &&
        menuItems.length > 0 &&
        menuItems.map((item) => <Menu.Item key={item}>{item}</Menu.Item>)}
    </Menu>
  )
  useEffect(() => {
    if (menuItems.length > 0) {
      setSelected(menuItems[0])
    }
  }, [menuItems])
  return (
    <div className={styles.simpleDropdownContainer}>
      {label && <p>{label}</p>}
      <Dropdown overlay={menu}>
        <div className={styles.simpleDropdownDisplay}>
          <p>{selected}</p>
          <DownOutlined />
        </div>
      </Dropdown>
    </div>
  )
}

export default SimpleDropdown
