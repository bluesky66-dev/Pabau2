import React from 'react'
import Button from './button'
import { boolean } from '@storybook/addon-knobs'

export default {
  component: Button,
  title: 'Button',
}

export const primary = () => {
  return <Button />
}

// Knobs for React props
export const withAButton = () => (
  <Button bool={boolean('Disabled', false)}>wee</Button>
);
