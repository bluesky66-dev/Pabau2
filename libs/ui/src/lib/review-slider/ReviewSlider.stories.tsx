import React, { FC } from 'react'
import ReviewSlider, { ReviewSliderProps } from './ReviewSlider'
import { reviews, execellentData, averageData, reviewData, title } from './mock'

export default {
  title: 'UI/ReviewSlider',
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    title,
    execellentData,
    averageData,
    reviewData,
    reviews,
  },
  argTypes: {
    title: { control: { type: 'string' } },
    execellentData: { control: { type: 'object' } },
    averageData: { control: { type: 'object' } },
    reviewData: { control: { type: 'object' } },
    reviews: { control: { type: 'object' } },
  },
}

export const ReviewSliderStory: FC<ReviewSliderProps> = ({
  title,
  execellentData,
  averageData,
  reviewData,
  reviews,
}) => {
  return (
    <ReviewSlider
      title={title}
      execellentData={execellentData}
      averageData={averageData}
      reviewData={reviewData}
      reviews={reviews}
    />
  )
}
