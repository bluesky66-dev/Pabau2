import React from 'react'
import { CommissionRange } from './CommissionRange'
import { servicesData, packagesData, productsData } from './mock'

export default {
  component: CommissionRange,
  title: 'UI/CommissionRange',
  args: servicesData,
  argTypes: {
    rangeItems: {
      control: {
        type: 'object',
      },
    },
    userRevenue: {
      control: {
        type: 'object',
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
