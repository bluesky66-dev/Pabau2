import React, { FunctionComponent, VoidFunctionComponent } from 'react'
import { UserOutlined } from '@ant-design/icons'
import { Button, Avatar, Status as AvatarStatusProps } from '@pabau/ui'
import styles from './UserTile.module.less'
import Airplane from '../../assets/images/airplane.svg'
import { KeyOutlined } from '@ant-design/icons'
import { Tooltip } from 'antd'

interface Vacation {
  scheduled: boolean
  startDate?: string
  endDate?: string
}

export interface UserProps {
  id?: number
  name: string
  surname: string
  title: string
  img?: string | undefined
  active?: boolean
  available?: boolean
  owner?: boolean
  admin?: boolean
  vacation?: Vacation
}

interface UnavailableProps {
  size?: number
  vacation?: Vacation
}

const UnavailableStatus: FunctionComponent<UnavailableProps> = ({
  size = 24,
  vacation,
}: UnavailableProps): JSX.Element => {
  return (
    <Tooltip
      title={'On Vacation:' + vacation?.startDate + '-' + vacation?.endDate}
      placement="bottom"
    >
      <div
        className={styles.inner}
        style={{
          backgroundImage: `url(${Airplane})`,
          backgroundRepeat: 'no-repeat',
          width: size,
          height: size,
        }}
      />
    </Tooltip>
  )
}

const UserIsAdmin: VoidFunctionComponent = (): JSX.Element => {
  return (
    <Tooltip title={'Administrator'} placement="bottom">
      <KeyOutlined className={styles.admin} />
    </Tooltip>
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
  const online: AvatarStatusProps = active
    ? AvatarStatusProps.active
    : AvatarStatusProps.default
  const userStatus: string = active ? 'Online' : ''
  return (
    <div className={styles.tile}>
      <div className={styles.wrapper}>
        <Avatar
          className={styles.avatar}
          size={64}
          icon={<UserOutlined />}
          src={img}
          active={online}
          name={userStatus}
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
            {admin && <UserIsAdmin />}
            <p className={styles.title}>{title}</p>
          </div>
        </div>
        <div className={styles.vacationWrapper}>
          {vacation?.scheduled && available && (
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
          {!available && <UnavailableStatus vacation={vacation} size={24} />}
        </div>
      </div>
    </div>
  )
}
