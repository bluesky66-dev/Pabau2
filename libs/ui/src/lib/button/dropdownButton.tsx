import React, { FC, HTMLProps, ReactNode } from 'react'
import { Button as AntButton, Dropdown } from 'antd'
import { NativeButtonProps } from 'antd/lib/button/button'
import { Menu } from 'antd'

interface MenuItem {
  icon: ReactNode
  title: string
}

interface P extends NativeButtonProps {
  disabled?: boolean
  color?: string
  backgroundColor?: string
  style?: HTMLProps<HTMLElement>['style']
  className?: string
  menuItems?: MenuItem[]
  onMenuClick?(val): void
}

export const DropDownButton: FC<P> = ({
  className,
  disabled,
  color,
  backgroundColor,
  children,
  style,
  menuItems,
  onMenuClick,
  ...props
}) => {
  const handleMenuClick = (e) => {
    if (onMenuClick) onMenuClick(e.key)
  }
  const menu = (
    <Menu onClick={(e) => handleMenuClick(e)}>
      {Array.isArray(menuItems) &&
        menuItems.length > 0 &&
        menuItems.map((item) => (
          <Menu.Item key={item.title}>
            {item.icon}
            {item.title}
          </Menu.Item>
        ))}
    </Menu>
  )
  return (
    <Dropdown
      overlay={menu}
      className="dropdown-btn"
      placement="bottomLeft"
      arrow
    >
      <AntButton
        style={{ ...style, ...{ backgroundColor: backgroundColor } }}
        disabled={disabled}
        color={color}
        className={className}
        {...props}
      >
        {children}
      </AntButton>
    </Dropdown>
  )
}

export default DropDownButton
