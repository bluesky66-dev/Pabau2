import React from 'react'
import { ShowMore } from './ShowMore'

export default {
  component: ShowMore,
  title: 'ShowMore',
  args: {
    length: 15,
    showAll: false,
  },
  argTypes: {
    length: {
      control: {
        type: 'number',
      },
      showAll: {
        control: {
          type: 'boolean',
        },
      },
    },
  },
}

const ShowMoreStory = ({ ...args }) => <ShowMore {...args} />

export const Basic = ShowMoreStory.bind({})
