import React from 'react'

import { UserTile, UserProps } from './UserTile'

import austin from '../../assets/images/users/austin.png'

export default {
  component: UserTile,
  title: 'Misc/UserTile',
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const UserTileStory = (user: UserProps) => (
  <UserTile
    name={user.name}
    surname={user.surname}
    title={user.title}
    vacation={user.vacation}
    available={user.available}
    active={user.active}
    img={user.img}
  />
)

export const User = UserTileStory.bind({})
User.args = {
  name: 'Joseph',
  surname: 'Howard',
  title: 'Managing Director',
  user: austin,
  active: true,
  vacation: false,
  img: austin,
  available: true,
}
