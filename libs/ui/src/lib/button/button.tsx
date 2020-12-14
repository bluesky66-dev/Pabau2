import React from 'react'
import './button.less'
import { Button as AntButton } from 'antd'

export interface ButtonProps {
  disabled: boolean
  onClick: () => void
}

export function Button2({ disabled, children, onClick }: ButtonProps) {
  return (
    <AntButton disabled={disabled} onClick={() => onClick?.()}>
      {children}
    </AntButton>
  )
}

export default Button2
