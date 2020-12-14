import React from 'react'
import './button.less'
import { Button as AntButton } from 'antd'

export interface ButtonProps extends JSX.Element {
  disabled: boolean
  onClick: () => void
}

export function Button2({ disabled, children, onClick }: ButtonProps) {
  return (
    <AntButton disabled={disabled} onClick={() => onClick?.()}>
      {children}swu
    </AntButton>
  )
}

export default Button2
