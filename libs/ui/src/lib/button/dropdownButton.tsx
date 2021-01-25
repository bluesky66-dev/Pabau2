import React, { FC, HTMLProps } from 'react'
import { Button as AntButton, Dropdown } from 'antd'
import { NativeButtonProps } from 'antd/lib/button/button'
import { Menu } from 'antd'
import { PauseCircleOutlined, MessageOutlined } from '@ant-design/icons'
import styles from './button.module.less'

export enum ButtonTypes {
  default = 'default',
  primary = 'primary',
  ghost = 'ghost',
  dashed = 'dashed',
  link = 'link',
  text = 'text',
}
interface P extends NativeButtonProps {
  // type?: ButtonTypes
  disabled?: boolean
  color?: string
  backgroundColor?: string
  style?: HTMLProps<HTMLElement>['style']
  className?: string
}

const menu = (
  <Menu>
    <Menu.Item>
      <a
        className={styles.linkAction}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/"
      >
        <PauseCircleOutlined />
        Pause notifications
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        className={styles.linkAction}
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.google.com/"
      >
        <MessageOutlined />
        See message log
      </a>
    </Menu.Item>
  </Menu>
)

export const DropDownButton: FC<P> = ({
  className,
  disabled,
  color,
  backgroundColor,
  children,
  style,
  ...props
}) => {
  return (
    <Dropdown overlay={menu} className="dropdown-btn" placement="bottomLeft" arrow>
      <AntButton
        style={{ ...style, ...{ backgroundColor: backgroundColor } }}
        //size={ButtonSize.large}
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
