import React from 'react'
import NewsletterTile from './NewsletterTile'
import { ProgressProps } from 'antd/lib/progress'

interface P extends ProgressProps {
  totalSent: number
  opened: number
  clicked: number
}

export default {
  component: NewsletterTile,
  title: 'UI/NewsletterTile',
  args: { totalSent: '100', opened: '50', clicked: '10' },
  argsTypes: {
    value: { control: { type: 'number' } },
    totalSent: { control: { type: 'number' } },
    opened: { control: { type: 'number' } },
    clicked: { control: { type: 'number' } },
  },
}

export const NewsletterTitleStory = (args: P): JSX.Element => {
  return <NewsletterTile {...args} />
}
