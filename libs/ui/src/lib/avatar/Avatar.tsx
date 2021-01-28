import React, { FC, useEffect, useState } from 'react'
import stc from 'string-to-color'
import ClassNames from 'classnames'
import { Avatar as AntAvatar, Tooltip } from 'antd'
import { AvatarProps as NativeAvatarProps } from 'antd/lib/avatar/avatar'
import { UserOutlined } from '@ant-design/icons'
import styles from './Avatar.module.less'

enum Status {
  default = 'default',
  active = 'active',
  inactive = 'inactive',
}

/* eslint-disable-next-line */
export interface AvatarProps extends NativeAvatarProps {
  isLoading?: boolean
  zIndex?: number
  marginLeft?: string
  name?: string
  src?: string
  active?: Status
}

export const Avatar: FC<AvatarProps> = ({
  isLoading = false,
  zIndex = 1,
  marginLeft = '0',
  name = '',
  src = '',
  active = 'default',
  ...props
}) => {
  const [load, setLoad] = useState(true)
  const [shortName, setShortName] = useState('')
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      setLoad(true)
    }
    img.onerror = () => {
      setLoad(false)
    }
    img.src = src
    setShortName(
      name
        .toUpperCase()
        .split(' ')
        .map((item) => item.charAt(0))
        .join('')
    )
  }, [name, src])

  return (
    <div className={styles.avatarContainer} style={{ zIndex, marginLeft }}>
      {isLoading ? (
        <div className={styles.avatarLoading}>
          <AntAvatar
            {...props}
            icon={<UserOutlined />}
            src={''}
            shape="circle"
          />
        </div>
      ) : (
        <Tooltip
          title={name}
          placement="bottom"
          overlayClassName={styles.overlay}
        >
          <div className={styles.avatarDisplay}>
            {load ? (
              <AntAvatar {...props} src={src} shape="circle" />
            ) : (
              <AntAvatar
                {...props}
                shape="circle"
                src=""
                style={{ backgroundColor: stc(name) }}
              >
                {shortName}
              </AntAvatar>
            )}
            {active !== Status.default && (
              <div
                className={
                  active === Status.active
                    ? styles.avatarStatus
                    : ClassNames(styles.avatarStatus, styles.avatarInactive)
                }
              />
            )}
          </div>
        </Tooltip>
      )}
    </div>
  )
}

export default Avatar
