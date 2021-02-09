import React, { FunctionComponent } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Button, Avatar } from '@pabau/ui'
import styles from './UserTile.module.less'
import Airplane from '../../assets/images/airplane.svg'
import { KeyOutlined } from '@ant-design/icons'

enum Status {
  default = 'default',
  active = 'active',
  inactive = 'inactive',
}

export interface UserProps {
  name: string
  surname: string
  title: string
  img?: string | undefined
  vacation?: boolean
  active?: boolean
  available?: boolean
  owner?: boolean
  admin?: boolean
}

interface AirplaneIconProps {
  size?: number
}

const AirplaneIcon: FunctionComponent<AirplaneIconProps> = ({
  size = 24,
}: AirplaneIconProps): JSX.Element => {
  return (
    <div
      className={styles.inner}
      style={{
        backgroundImage: `url(${Airplane})`,
        backgroundRepeat: 'no-repeat',
        width: size,
        height: size,
      }}
    />
  )
}

export const UserTile: FunctionComponent<UserProps> = ({
  name,
  surname,
  title,
  vacation,
  active = false,
  available,
  img,
  owner = false,
  admin = true,
}: UserProps): JSX.Element => {
  const online: Status = active ? Status.active : Status.default
  return (
    <div className={styles.tile}>
      <div className={styles.wrapper}>
        <Avatar
          className={styles.avatar}
          size={64}
          icon={<UserOutlined />}
          src={img}
          active={online}
        />
        {owner && (
          <Button className={styles.btnOwner} backgroundColor={'#EEF7FB'}>
            Owner
          </Button>
        )}
        <div>
          <p className={styles.name}>
            {name} {surname}
          </p>
          <div className={styles.titleWrapper}>
            {admin && <KeyOutlined className={styles.admin} />}
            <p className={styles.title}>{title}</p>
          </div>
        </div>
        <div className={styles.vacationWrapper}>
          {vacation && available && (
            <Button
              style={{ padding: 2 }}
              className={styles.btnVacationPending}
              disabled={true}
              type={'default'}
            >
              <span className={styles.btnVacationPendingInnerText}>
                Pending
              </span>
            </Button>
          )}
          {!available && <AirplaneIcon size={24} />}
        </div>
      </div>
    </div>
  )
}
