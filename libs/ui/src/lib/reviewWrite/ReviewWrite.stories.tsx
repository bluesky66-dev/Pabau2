import React from 'react'
import ReviewWrite from './ReviewWrite'
import { Question } from './ReviewWrite'

import { data } from './mock'

export default {
  component: ReviewWrite,
  title: 'UI/ReviewWrite',
  args: { reviews: data },
  argTypes: {
    reviews: { control: { type: 'object' } },
  },
}

interface P {
  reviews: Question[]
}

export const ReviewWriteStory = ({ reviews }: P): JSX.Element => {
  return <ReviewWrite questions={reviews} />
}
