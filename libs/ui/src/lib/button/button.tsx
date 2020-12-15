import React, { PropsWithChildren } from 'react'
import './button.less'
import { Button as AntButton } from 'antd'

export interface P {
  disabled?: boolean
  onClick?: () => void
}

export function Button2({ disabled, children, onClick }: PropsWithChildren<P>): JSX.Element {
  return (
    <AntButton disabled={disabled} onClick={() => onClick?.()}>
      {children}
    </AntButton>
  )
}

export default Button2
