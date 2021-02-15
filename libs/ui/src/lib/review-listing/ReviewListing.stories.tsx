import React from 'react'
import ReviewListing from './ReviewListing'
import { ReactComponent as NormalClinicLogo } from '../../assets/images/normal-clinic-logo.svg'

export default {
  title: 'UI/ReviewListing',
  args: {
    image: <NormalClinicLogo />,
    review: 4.67,
    description: 'Things people are saying about us',
    totalReview: 5,
    totalReviewUser: 43,
    weScoreLabel: 'We score',
    fromLabel: 'from',
    reviewLabel: 'reviews',
  },
  argTypes: {
    review: { control: { type: 'number' } },
    description: { control: { type: 'text' } },
    weScoreLabel: { control: { type: 'text' } },
    fromLabel: { control: { type: 'text' } },
    reviewLabel: { control: { type: 'text' } },
    totalReviewUser: { control: { type: 'number' } },
    totalReview: { control: { type: 'number' } },
  },
}

const ReviewListingStory = ({ ...args }) => <ReviewListing {...args} />
export const ReviewListingDefault = ReviewListingStory.bind({})
