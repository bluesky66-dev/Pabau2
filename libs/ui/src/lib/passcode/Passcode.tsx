import { EyeInvisibleOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import React, { FC } from 'react'
import './Passcode.module.less'

const Passcode: FC = () => {
  return (
    <Input.Password
      maxLength={4}
      placeholder="Passcode"
      iconRender={(visible) => <EyeInvisibleOutlined />}
    />
  )
}
export default Passcode
