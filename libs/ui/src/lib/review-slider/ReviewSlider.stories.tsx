import React, { useEffect, useState, FC, ReactElement } from 'react'
import ReviewSlider, { ReviewSliderProps } from './ReviewSlider'

const title=[
    {
        name:'EXCELLENT',
        key:5,
    },
    {
        name:'Average',
        key:4.95
    },
    {
        name:'Reviews',
        key:539
    },
]
const reviews=[
    {
        name:'Emily',
        description:'highly recommend! treatment was complected at the same appoinment, no complections very impressed',
        rating:5,
        key:1,
        reviewfrom: 'Posted',
        reviewto: 'weeks ago',
        reviewdays: 3
    },
    {
        name:'Julia',
        description:'Lovely clinic, producer was explained to me and i definitely will be recommending Dr Perry',
        rating:5,
        key:2,
        reviewfrom: 'Posted',
        reviewto: 'weeks ago',
        reviewdays: 3
    },
    {
        name:'Susan',
        description:'very happy with the result of my treatment, thank you to the Cosmedics team',
        rating:5,
        key:3,
        reviewfrom: 'Posted',
        reviewto: 'weeks ago',
        reviewdays: 3
    },
    {
        name:'Susan',
        description:'very happy with the result of my treatment, thank you to the Cosmedics team',
        rating:5,
        key:4,
        reviewfrom: 'Posted',
        reviewto: 'weeks ago',
        reviewdays: 3
    },
    {
        name:'Susan',
        description:'very happy with the result of my treatment, thank you to the Cosmedics team',
        rating:5,
        key:5,
        reviewfrom: 'Posted',
        reviewto: 'weeks ago',
        reviewdays: 3
    },
]

export default {
  title: 'UI/ReviewSlider',
  args: {
   title,
   reviews
  },
  argTypes: {
    title: { control: { type: 'object' } },
    reviews: { control: { type: 'object' } },
    
  },
}

export const ReviewListingStory: FC<ReviewSliderProps> = ({
 title,
 reviews
}) => {
  return (
    <ReviewSlider
      title={title}
      reviews={reviews}
    />
  )
}
