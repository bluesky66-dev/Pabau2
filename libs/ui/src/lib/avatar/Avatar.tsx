import { Avatar } from 'antd'
import React, { PropsWithChildren } from 'react'
import './Avatar.module.less'

interface AvatarProps {
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
