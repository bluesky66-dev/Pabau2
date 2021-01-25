import * as Icons from '@ant-design/icons'
import React from 'react'
import Button from './button'
import IconButton from './iconbutton'

const iConLists = Object.keys(Icons)
  .filter(
    (iconName) =>
      iconName !== 'IconProvider' &&
      iconName !== 'setTwoToneColor' &&
      iconName !== 'getTwoToneColor' &&
      iconName !== 'createFromIconfontCN' &&
      iconName !== 'default'
  )
  .map((iconName) => {
    return iconName
  })

export default {
  component: Button,
  title: 'Basics/Button',
  args: { label: 'Pabau', disabled: false, type: '', size: 'medium' },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'select', selected: 'medium', options: ['small', 'medium', 'large'] },
    },
    type: {
      control: {
        type: 'select',
        selected: 'primary',
        options: ['default', 'primary', 'ghost', 'dashed', 'link', 'text', 'danger'],
      },
    },
    color: {
      control: { type: 'color' },
    },
    backgroundColor: {
      control: { type: 'color' },
    },
    icons: {
      control: {
        type: 'select',
        selected: 'primary',
        options: iConLists,
      },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ButtonStory = ({ ...args }) => <Button {...args}>{args.label}</Button>

export const defaultBtn = ButtonStory.bind({})
defaultBtn.args = {
  type: 'default',
}

export const primary = ButtonStory.bind({})
primary.args = {
  type: 'primary',
}
export const ghost = ButtonStory.bind({})
ghost.args = {
  type: 'ghost',
}
export const dashed = ButtonStory.bind({})
dashed.args = {
  type: 'dashed',
}
export const link = ButtonStory.bind({})
link.args = {
  type: 'link',
}
export const text = ButtonStory.bind({})
text.args = {
  type: 'text',
}
export const danger = ButtonStory.bind({})
danger.args = {
  type: 'danger',
}

export const diabled = ButtonStory.bind({})
diabled.args = {
  type: 'primary',
  disabled: true,
}

export const CustomButton = ButtonStory.bind({})
CustomButton.args = {
  label: 'Hello World',
  size: 'large',
  color: '#000',
  backgroundColor: '#54B2D3',
}

const IconButtonStory = ({ ...args }) => <IconButton {...args}>{args.label}</IconButton>

export const IconButtonControl = IconButtonStory.bind({})
IconButtonControl.args = {
  type: 'primary',
  disabled: false,
  icons: 'AccountBookFilled',
}
