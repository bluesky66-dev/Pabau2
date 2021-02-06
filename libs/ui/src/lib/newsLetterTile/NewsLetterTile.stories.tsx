import React from 'react'
import NewsLetterTile from './NewsLetterTile'
import { ProgressProps } from 'antd/lib/progress'

interface P extends ProgressProps {
  totalSent: number
  opened: number
  clicked: number
}

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

export const NewsLetterTitleStory = (args: P): JSX.Element => {
  return <NewsLetterTile {...args} />
}
