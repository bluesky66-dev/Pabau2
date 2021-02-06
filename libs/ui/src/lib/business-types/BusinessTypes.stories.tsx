import React from 'react'
import BusinessTypes from './BusinessTypes'

export default {
  component: BusinessTypes,
  title: 'Business Details/BusinessTypes',
  args: {},
  argTypes: {},
}

const BusinessTypesStory = ({ ...args }) => {
  return <BusinessTypes {...args} />
}

export const Basic = BusinessTypesStory.bind({})
Basic.args = {
  onSelected: (val) => {
    console.log(val)
  },
}
