import React from 'react'
import { VoucherCard } from './VoucherCard'

export default {
  title: 'UI/VoucherCard',
  component: VoucherCard,
  args: {
    gradientType: 'linear-gradient',
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
    bookNowButton: {
      control: {
        type: 'boolean',
      },
    },
  },
}

const VoucherCardStory = ({ ...args }) => <VoucherCard {...args} />
export const BasicVoucherCard = VoucherCardStory.bind({})
export const ImageVoucherCard = VoucherCardStory.bind({})
export const BookingVoucherCard = VoucherCardStory.bind({})

BasicVoucherCard.args = {
  cardWidth: 500,
  backgroundColor1: '#9013FE',
  backgroundColor2: '#BD10E0',
  gradientType: 'linear-gradient',
  borderColor: '#000',
  bookNowButton: false,
  buttonLabel: 'Book Now',
  backgroundImg: '',
}

ImageVoucherCard.args = {
  cardWidth: 500,
  backgroundColor1: '#9013FE',
  backgroundColor2: '#BD10E0',
  gradientType: 'linear-gradient',
  borderColor: '#000',
  bookNowButton: false,
  buttonLabel: 'Book Now',
  backgroundImg:
    'https://wonderfulengineering.com/wp-content/uploads/2014/10/wallpaper-photos-31.jpg',
}

BookingVoucherCard.args = {
  cardWidth: 500,
  backgroundColor1: '#9013FE',
  backgroundColor2: '#BD10E0',
  gradientType: 'linear-gradient',
  borderColor: '#000',
  bookNowButton: false,
  backgroundImg: '',
}
