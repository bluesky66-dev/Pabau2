import { Avatar } from 'antd'
import { FC, useState } from 'react'

const ColorList = ['#f0f2f5']

const MyAvatar: FC = () => {
  const [color] = useState(ColorList[0])
  return (
    <Avatar
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      style={{ backgroundColor: color, verticalAlign: 'middle', border: '1px solid #ccc' }}
      size={128}
    ></Avatar>
  )
}
export default MyAvatar
