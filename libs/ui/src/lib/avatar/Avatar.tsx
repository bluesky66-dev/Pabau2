import { Avatar } from 'antd'
import React, { PropsWithChildren } from 'react'
import './Avatar.module.less'

// interface P {
//   imgsrc?: string
//   size?: string
//   name?: string
//   background?: string
// }

// const MyAvatar: FC<P> = ({ imgsrc, size, name, background }) => {
//   return (
//     <Avatar
//       src={imgsrc}
//       style={{ backgroundColor: background, verticalAlign: 'middle', border: '1px solid #ccc' }}
//       size={size}
//     >
//       {name}
//     </Avatar>
//   )
// }
// export default MyAvatar

export interface AvatarProps {
  imgSrc?: string
  avatarSize?: number
  name?: string
  background?: string
}

export function MyAvatar({
  imgSrc,
  avatarSize,
  name,
  background,
}: PropsWithChildren<AvatarProps>): JSX.Element {
  return (
    <Avatar
      src={imgSrc}
      style={{ backgroundColor: background, verticalAlign: 'middle', border: '1px solid #ccc' }}
      size={avatarSize}
    >
      {name}
    </Avatar>
  )
}

export default MyAvatar
