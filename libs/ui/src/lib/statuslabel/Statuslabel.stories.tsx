/* eslint-disable */
import React from 'react'
import Statuslabel from './Statuslabel'

export default {
  component: Statuslabel,
  title: 'StatusLabel',
  args: { label: 'Enabled', disabled: false },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const StatuslabelStory = ({ ...args }) => <Statuslabel {...args}></Statuslabel>

export const defaultStatusLabel = StatuslabelStory.bind({})
defaultStatusLabel.args = {
  label: 'Enabled',
  disabled: false,
}


// export const CustomButton = ButtonStory.bind({})
// CustomButton.args = {
//   label: 'Hello World',
//   size: 'large',
//   color: '#000',
//   backgroundColor: '#54B2D3',
// }
