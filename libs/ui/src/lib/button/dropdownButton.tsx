import React, { FC, HTMLProps, ReactElement } from 'react'
import { Button as AntButton, Dropdown } from 'antd'
import { NativeButtonProps } from 'antd/lib/button/button'

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
  menu: ReactElement
}

export const DropDownButton: FC<P> = ({
  className,
  disabled,
  color,
  backgroundColor,
  children,
  style,
  menu,
  ...props
}) => {
  return (
    <Dropdown overlay={menu} placement="bottomLeft" arrow>
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
