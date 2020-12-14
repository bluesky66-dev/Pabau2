import React from 'react'

import './button.less'
import { Button as AntButton } from 'antd'

export interface ButtonProps {
  bool: boolean
}

export function Button2({ bool }: ButtonProps) {
  return <AntButton disabled={bool}>tt</AntButton>
}

export default Button2
