import React, { FC } from 'react'
import { Avatar as AntAvatar, Tooltip } from 'antd'
import { AvatarProps as NativeAvatarProps } from 'antd/lib/avatar/avatar'
import { UserOutlined } from '@ant-design/icons'
import styles from './Avatar.module.less'

/* eslint-disable-next-line */
export interface AvatarProps extends NativeAvatarProps {
  isLoading?: boolean
  zIndex?: number
  marginLeft?: string
  name?: string
}

const Avatar: FC<AvatarProps> = ({
  isLoading = false,
  zIndex = 1,
  marginLeft = '0',
  name = '',
  ...props
}) => {
  return (
    <div style={{ zIndex, marginLeft }}>
      {isLoading ? (
        <div className={styles.avatarLoading}>
          <AntAvatar {...props} icon={<UserOutlined />} src={''} shape="circle" />
        </div>
      ) : (
        <Tooltip title={name} placement="bottom" overlayClassName={styles.overlay}>
          <AntAvatar {...props} shape="circle" />
        </Tooltip>
      )}
    </div>
  )
}

export default Avatar
