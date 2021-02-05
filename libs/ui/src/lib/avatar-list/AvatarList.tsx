import React, { FC } from 'react'
import { Avatar } from '@pabau/ui'
import { AvatarSize } from 'antd/lib/avatar/SizeContext'
import styles from './AvatarList.module.less'

interface User {
  id: number
  avatarUrl: string
  name: string
}
export interface AvatarListProps {
  users?: User[]
  isLoading?: boolean
  size?: AvatarSize
}

export const AvatarList: FC<AvatarListProps> = ({
  users = [],
  isLoading = false,
  size = 'default',
}) => {
  return (
    <div className={styles.avatarListContainer}>
      {isLoading ? (
        <div className={styles.avatarList}>
          {[...Array(3)].map((_, index) => {
            return (
              <Avatar
                key={index}
                isLoading={isLoading}
                size={size}
                zIndex={3 - index}
                marginLeft={`-6px`}
              />
            )
          })}
        </div>
      ) : (
        <>
          <div className={styles.avatarList}>
            {users &&
              Array.isArray(users) &&
              users.length > 0 &&
              users.length <= 3 &&
              users.map((user, index) => (
                <Avatar
                  key={user.id}
                  isLoading={isLoading}
                  size={size}
                  name={user.name}
                  src={user.avatarUrl}
                  zIndex={3 - index}
                  marginLeft={`-6px`}
                />
              ))}
            {users &&
              Array.isArray(users) &&
              users.length > 0 &&
              users.length > 3 &&
              users
                .slice(0, 3)
                .map((user, index) => (
                  <Avatar
                    key={user.id}
                    isLoading={isLoading}
                    size={size}
                    name={user.name}
                    src={user.avatarUrl}
                    zIndex={3 - index}
                    marginLeft={`-6px`}
                  />
                ))}
          </div>
          <p>{users.length > 3 ? `+ ${users.length - 3}` : ''}</p>
        </>
      )}
    </div>
  )
}

export default AvatarList
