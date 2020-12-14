import React from 'react'
import Button from './button'

export default {
  component: Button,
  title: 'Button',
  args: { disabled: false },
  argTypes: { disabled: { control: { type: 'boolean' } }, onClick: { action: 'clicked' } },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const primary = ({ disabled, onClick }) => <Button disabled={disabled} onClick={onClick}>wee</Button>
