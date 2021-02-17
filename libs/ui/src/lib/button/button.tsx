import React, { FC, HTMLProps } from 'react'
import { Button as AntButton } from 'antd'
import { NativeButtonProps } from 'antd/lib/button/button'

export enum ButtonTypes {
  default = 'default',
  primary = 'primary',
  ghost = 'ghost',
  dashed = 'dashed',
  link = 'link',
  text = 'text',
}

export interface ButtonProps extends NativeButtonProps {
  // type?: ButtonTypes
  disabled?: boolean
  color?: string
  backgroundColor?: string
  style?: HTMLProps<HTMLElement>['style']
  className?: string
}

export const Button: FC<ButtonProps> = ({
  className,
  disabled,
  color,
  backgroundColor,
  children,
  style,
  ...props
}) => (
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
)

export default Button
