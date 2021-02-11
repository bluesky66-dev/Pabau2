import React from 'react'
import { VoucherCard } from './VoucherCard'

export default {
  title: 'UI/VoucherCard',
  component: VoucherCard,
  args: {
    gradientType: 'linear-gradient'
  },
  argTypes: {
    cardWidth: {
      control: {
        type: 'number',
      },
    },
    backgroundColor1: {
      control: {
        type: 'color',
      },
    },
    backgroundColor2: {
      control: {
        type: 'color',
      },
    },
    borderColor: {
      control: {
        type: 'color',
      },
    },
    gradientType: {
      control: {
        type: 'select',
        options: ['linear-gradient', 'radial-gradient'],
      },
    },
    backgroundImg: {
      control: {
        type: 'text',
      },
    },
  },
}

const VoucherCardStory = ({ ...args }) => <VoucherCard {...args} />
export const BasicVoucherCard = VoucherCardStory.bind({})
BasicVoucherCard.args = {
  cardWidth: 800,
  backgroundColor1: '#fff',
  backgroundColor2: '#fff',
  gradientType: 'linear-gradient',
  backgroundImg: '',
  borderColor: 'red',
}
