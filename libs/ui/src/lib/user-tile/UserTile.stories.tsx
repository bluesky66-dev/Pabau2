import React from 'react'
import { UserTile, UserProps } from './UserTile'
import { mockUsers } from './mock'

export default {
  component: UserTile,
  title: 'UI/UserTile',
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const UserTileStory = (user: UserProps) => (
  <UserTile
    name={user.name}
    surname={user.surname}
    title={user.title}
    img={user.img}
    active={user.active}
    vacation={user.vacation}
    available={user.available}
    owner={user.owner}
  />
)

export const userTile = UserTileStory.bind({})
userTile.args = {
  name: mockUsers.name,
  surname: mockUsers.surname,
  title: mockUsers.title,
  img: mockUsers.img,
  active: mockUsers.active,
  vacation: mockUsers.vacation,
  available: mockUsers.available,
  owner: mockUsers.owner,
}
