import React from 'react'
import BusinessLocation from './BusinessLocation'

export default {
  component: BusinessLocation,
  title: 'Business Details/BusinessLocation',
  args: {},
  argTypes: {},
}

const BusinessLocationStory = ({ ...args }) => {
  return <BusinessLocation {...args} />
}

export const Basic = BusinessLocationStory.bind({})
Basic.args = {}
