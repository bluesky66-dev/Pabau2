import React from 'react'
import AvatarList from './AvatarList'

export default {
  component: AvatarList,
  title: 'Basics/AvatarList',
  args: { isLoading: false, size: 'medium', users: [{ id: 1, name: 'Dominic Nguyen' }] },
  argTypes: {
    isLoading: { control: { type: 'boolean' } },
    size: {
      control: { type: 'select', selected: 'medium', options: ['small', 'medium', 'large'] },
    },
  },
}

const AvatarListStory = ({ ...args }) => <AvatarList {...args} />

export const Basic = AvatarListStory.bind({})
Basic.args = {
  isLoading: false,
  users: [
    {
      id: 1,
      name: 'Dominic Nguyen',
    },
    { id: 2, name: 'Tom Coleman', avatarUrl: 'https://avatars2.githubusercontent.com/u/132554' },
    { id: 3, name: 'Zoltan Olah', avatarUrl: 'https://avatars0.githubusercontent.com/u/81672' },
    {
      id: 4,
      name: 'Tim Hingston',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
    },
  ],
  size: 'medium',
}

export const Short = AvatarListStory.bind({})
Short.args = {
  isLoading: false,
  users: [
    {
      id: '1',
      name: 'Dominic Nguyen',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
    },
    { id: '2', name: 'Tom Coleman', avatarUrl: 'https://avatars2.githubusercontent.com/u/132554' },
  ],
  size: 'medium',
}

export const Big = AvatarListStory.bind({})
Big.args = {
  isLoading: false,
  users: [
    {
      id: '1',
      name: 'Dominic Nguyen',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
    },
    { id: '2', name: 'Tom Coleman', avatarUrl: 'https://avatars2.githubusercontent.com/u/132554' },
    { id: '3', name: 'Zoltan Olah', avatarUrl: 'https://avatars0.githubusercontent.com/u/81672' },
    {
      id: '4',
      name: 'Tim Hingston',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
    },
  ],
  size: 'medium',
}

export const Small = AvatarListStory.bind({})
Small.args = {
  isLoading: false,
  users: [
    {
      id: '1',
      name: 'Dominic Nguyen',
      avatarUrl: 'https://avatars2.githubusercontent.com/u/263385',
    },
    { id: '2', name: 'Tom Coleman', avatarUrl: 'https://avatars2.githubusercontent.com/u/132554' },
    { id: '3', name: 'Zoltan Olah', avatarUrl: 'https://avatars0.githubusercontent.com/u/81672' },
    {
      id: '4',
      name: 'Tim Hingston',
      avatarUrl: 'https://avatars3.githubusercontent.com/u/1831709',
    },
  ],
  size: 'small',
}

export const Loading = AvatarListStory.bind({})
Loading.args = {
  isLoading: true,
}

export const Empty = AvatarListStory.bind({})
Empty.args = {
  isLoading: false,
  users: [],
  size: 'medium',
}
