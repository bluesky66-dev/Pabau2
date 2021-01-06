import React from 'react'
import Button from './button'

export default {
  component: Button,
  title: 'Button',
  args: { label: 'Pabau', disabled: false, btnType: '', size: 'medium' },
  argTypes: {
    label: { control: { type: 'text' } },
    disabled: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
    size: {
      control: { type: 'select', selected: 'medium', options: ['small', 'medium', 'large'] },
    },
    btnType: {
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
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const ButtonStory = ({ ...args }) => <Button {...args}>{args.label}</Button>

export const defaultBtn = ButtonStory.bind({})
defaultBtn.args = {
  btnType: 'default',
}

export const primary = ButtonStory.bind({})
primary.args = {
  btnType: 'primary',
}
export const ghost = ButtonStory.bind({})
ghost.args = {
  btnType: 'ghost',
}
export const dashed = ButtonStory.bind({})
dashed.args = {
  btnType: 'dashed',
}
export const link = ButtonStory.bind({})
link.args = {
  btnType: 'link',
}
export const text = ButtonStory.bind({})
text.args = {
  btnType: 'text',
}
export const danger = ButtonStory.bind({})
danger.args = {
  btnType: 'danger',
}

export const diabled = ButtonStory.bind({})
danger.args = {
  btnType: 'primary',
  disabled: true,
}

export const CustomButton = ButtonStory.bind({})
CustomButton.args = {
  label: 'Hello World',
  size: 'large',
  color: '#000',
  backgroundColor: '#54B2D3',
}
