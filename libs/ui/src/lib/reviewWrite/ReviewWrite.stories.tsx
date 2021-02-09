import React from 'react'
import ReviewWrite from './ReviewWrite'
import { Question } from './ReviewWrite'

import { data, title, subtitle } from './mock'

export default {
  component: ReviewWrite,
  title: 'UI/ReviewWrite',
  args: {
    title,
    subtitle,
    reviews: data,
  },
  argTypes: {
    title: { control: { type: 'text' } },
    subtitle: { control: { type: 'text' } },
    reviews: { control: { type: 'object' } },
  },
}

interface P {
  title: string
  subtitle: string
  reviews: Question[]
  onChange: (reviews: Question[]) => void
}

export const ReviewWriteStory = ({
  title,
  subtitle,
  reviews,
  onChange,
}: P): JSX.Element => {
  return (
    <ReviewWrite
      reviews={reviews}
      title={title}
      subtitle={subtitle}
      onChange={onChange}
    />
  )
}
