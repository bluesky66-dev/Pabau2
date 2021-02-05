import React from 'react'
import { OrderDiscrepancy } from './OrderDiscrepancy'

export default {
  component: OrderDiscrepancy,
  title: 'UI/OrderDiscrepancy',
  args: {
    number: 8,
    word: 0,
  },
  argTypes: {
    word: {
      control: {
        type: 'select',
        options: [1, 0],
      },
    },
    number: {
      control: { type: 'number' },
    },
  },
}

const OrderDiscrepancyStory = ({ ...args }) => (
  <OrderDiscrepancy {...args} />
)

export const BasicOrderDiscrepancy = OrderDiscrepancyStory.bind({})
BasicOrderDiscrepancy.args = {
  word: 1,
  number: 12
}