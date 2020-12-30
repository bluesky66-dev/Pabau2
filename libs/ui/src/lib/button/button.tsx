import React, { PropsWithChildren } from 'react'
import './button.less'
import { Button as AntButton } from 'antd'

enum ButtonTypes {
  default = 'default',
  primary = 'primary',
  ghost = 'ghost',
  dashed = 'dashed',
  link = 'link',
  text = 'text',
}
enum ButtonSize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}
export interface P {
  size?: ButtonSize
  btnType?: ButtonTypes
  disabled?: boolean
  color?: string
  backgroundColor?: string
  onClick?: () => void
}

export function Button({
  size,
  btnType,
  disabled,
  color,
  backgroundColor,
  children,
  onClick,
}: PropsWithChildren<P>): JSX.Element {
  return (
    <AntButton
      type={btnType}
      size={size}
      disabled={disabled}
      onClick={() => onClick?.()}
      color={color}
      style={{ backgroundColor: backgroundColor }}
    >
      {children}
    </AntButton>
  )
}

export default Button
