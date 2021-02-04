import React from 'react'
import NewsLetterTile from './NewsLetterTile'

export default {
  component: NewsLetterTile,
  title: 'UI/NewsLetterTile',
  args: { totalSent: '100', opened: '50', clicked: '10' },
  argsTypes: {
    value: { control: { type: 'number' } },
    totalSent: { control: { type: 'number' } },
    opened: { control: { type: 'number' } },
    clicked: { control: { type: 'number' } },
  },
}

export const NewsLetterTitleStory = (args) => {
  return <NewsLetterTile {...args} />
}
