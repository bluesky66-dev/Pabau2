import React from 'react'
import Avatar from './Avatar'
import userImage from '../../assets/images/user.png'

export default {
  component: Avatar,
  title: 'Basics/Avatar',
  args: { isLoading: false, size: 'medium', name: 'user' },
  argTypes: {
    isLoading: { control: { type: 'boolean' } },
    name: { control: { type: 'text' } },
    size: {
      control: { type: 'select', selected: 'medium', options: ['small', 'medium', 'large'] },
    },
  },
}

const AvatarStory = ({ ...args }) => <Avatar {...args} />

export const Basic = AvatarStory.bind({})
Basic.args = {
  src: userImage,
  name: 'user',
}

export const Loading = AvatarStory.bind({})
Loading.args = {
  isLoading: true,
}

export const Small = AvatarStory.bind({})
Small.args = {
  src: userImage,
  name: 'user',
  size: 'small',
}

export const Medium = AvatarStory.bind({})
Medium.args = {
  src: userImage,
  name: 'user',
  size: 'Medium',
}

export const Large = AvatarStory.bind({})
Large.args = {
  src: userImage,
  name: 'user',
  size: 'large',
}
