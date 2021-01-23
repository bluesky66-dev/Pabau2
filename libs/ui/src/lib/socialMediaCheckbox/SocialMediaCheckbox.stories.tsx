import React from 'react'
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import SocialMediaCheckbox from './SocialMediaCheckbox'

export default {
  component: SocialMediaCheckbox,
  title: 'Forms/SocialMediaCheckBox',
  args: {
    selected: [],
    mediaIcon: [{ label: 'facebook', link: null, icon: <FacebookOutlined /> }],
  },
  argTypes: {
    label: { control: { type: 'text' } },
  },
  onChange: { action: 'onChange' },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const SocialMediaCheckboxStory = ({ ...args }) => (
  <SocialMediaCheckbox {...args}></SocialMediaCheckbox>
)
export const SocialCheckBox = SocialMediaCheckboxStory.bind({})
SocialCheckBox.args = {
  mediaIcon: [
    { label: 'facebook', link: 'www.facebook.com', icon: <FacebookOutlined /> },
    { label: 'linksIn', link: 'www.linkin.com', icon: <LinkedinOutlined /> },
    { label: 'instagram', link: 'www.instagram.com', icon: <InstagramOutlined /> },
    { label: 'twitter', link: null, icon: <TwitterOutlined /> },
  ],
}
