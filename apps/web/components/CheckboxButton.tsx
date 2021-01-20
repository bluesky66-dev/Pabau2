import { CheckOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { FC } from 'react'

interface P {
  chked: string
  label: string
}
const CheckboxButton: FC<P> = ({ chked, label }) => {
  return (
    <Button
      shape="round"
      icon={chked === 'chkActive' ? <CheckOutlined /> : ''}
      className={chked}
      style={{ marginRight: '10px' }}
    >
      {label}
    </Button>
  )
}
export default CheckboxButton
