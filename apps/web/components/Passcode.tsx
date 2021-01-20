import { EyeInvisibleOutlined } from '@ant-design/icons'
import { Input } from 'antd'
import { FC } from 'react'

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
