import React from 'react'
import { InventoryLabel, LabelType } from './InventoryLabel'

export default {
  component: InventoryLabel,
  title: 'Basics/InventoryLabel',
  args: {
    labelType: LabelType.good,
  },
  argTypes: {},
}

const InventoryLabelStory = ({ ...args }) => <InventoryLabel {...args} />
export const Good = InventoryLabelStory.bind({})
Good.args = {}

export const Low = InventoryLabelStory.bind({})
Low.args = {
  labelType: LabelType.low,
}

export const Empty = InventoryLabelStory.bind({})
Empty.args = {
  labelType: LabelType.empty,
}
