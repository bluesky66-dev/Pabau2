import React from 'react'
import { CommissionRange } from './CommissionRange'
import { servicesData, packagesData, productsData } from './mock'

export default {
  component: CommissionRange,
  title: 'UI/CommissionRange',
  args: servicesData,
  argTypes: {
    rangeItems: {
      range: {
        control: {
          type: 'array',
        },
      },
      percent: {
        control: {
          type: 'number',
        },
      },
    },
    users: {
      control: {
        type: 'array',
      },
    },
    type: {
      control: {
        type: 'text',
      },
    },
  },
}

/* eslint-disable-next-line */
// @ts-ignore
const CommissionRangeStory = ({ ...args }) => <CommissionRange {...args} />

export const ServicesCommissionRange = CommissionRangeStory.bind({})
export const ProductsCommissionRange = CommissionRangeStory.bind({})
export const PackagesCommissionRange = CommissionRangeStory.bind({})
ServicesCommissionRange.args = servicesData
ProductsCommissionRange.args = productsData
PackagesCommissionRange.args = packagesData
