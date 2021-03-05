import React from 'react'
import ButtonLabel from './ButtonLabel'

export default {
  component: ButtonLabel,
  title: 'Basics/ButtonLabel',
  args: {
    type: 'success',
    text: 'Label',
  },
  argTypes: {
    type: {
      control: {
        type: 'select',
        selected: 'primary',
        options: ['success', 'info', 'warning', 'danger'],
      },
    },
  },
}

const InventoryLabelStory = ({ ...args }) => (
  <ButtonLabel {...args} text={args.text} />
)

export const Success = InventoryLabelStory.bind({})
Success.args = {
  text: 'Good',
}

export const Info = InventoryLabelStory.bind({})
Info.args = {
  type: 'info',
  text: 'Info',
}

export const Warning = InventoryLabelStory.bind({})
Warning.args = {
  type: 'warning',
  text: 'Low',
}

export const Error = InventoryLabelStory.bind({})
Error.args = {
  type: 'danger',
  text: 'Empty',
}
