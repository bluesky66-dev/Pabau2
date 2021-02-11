import React from 'react'
import InventoryLabel from './InventoryLabel'

export default {
  component: InventoryLabel,
  title: 'Basics/InventoryLabel',
  args: {
    labelType: 'good',
  },
  argTypes: {},
}

const InventoryLabelStory = ({ ...args }) => <InventoryLabel {...args} />
export const Good = InventoryLabelStory.bind({})
Good.args = {}

export const Low = InventoryLabelStory.bind({})
Low.args = {
  labelType: 'low',
}

export const Empty = InventoryLabelStory.bind({})
Empty.args = {
  labelType: 'empty',
}
