import React, { FC } from 'react'
import { Switch as AntSwitch } from 'antd'
import { SwitchProps } from 'antd/lib/switch/index'
import './Switch.module.less'

export const Switch: FC<SwitchProps> = ({ ...props }) => {
  return <AntSwitch {...props} />
}

export default Switch
