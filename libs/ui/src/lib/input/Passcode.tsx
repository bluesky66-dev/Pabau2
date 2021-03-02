import { EyeInvisibleOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React from 'react'

export function Passcode(): JSX.Element {
  return (
    <Input.Password
      maxLength={4}
      placeholder="Passcode"
      iconRender={(visible) => <EyeInvisibleOutlined />}
    />
  )
}
export default Passcode
