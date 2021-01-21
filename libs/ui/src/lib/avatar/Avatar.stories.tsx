/* eslint-disable */

import React from 'react'
import AvatarBox from './Avatar'

export default {
  title: 'Avatar',
}

const AvatarStory = ({ ...args }) => <AvatarBox {...args}></AvatarBox>
export const Avatar = AvatarStory.bind({})
Avatar.args = {
  imgSrc: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
  avatarSize: 128,
  name: 'Zhen',
  background: '#f0f2f5'
}
