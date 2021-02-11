import React, { FC } from 'react'
import { Rate } from 'antd'
import { Logo } from '@pabau/ui'
import Slider from 'react-slick'

export interface ReviewSliderProps {
  title: TitleType[]
  reviews: ReviewType[]
}

interface TitleType {
  name: string
  key: number
}

interface ReviewType {
  name: string
  description: string
  key: number
  rating: number
  reviewfrom: string
  reviewto: string
  reviewdays: number
}

export const ReviewSlider: FC<ReviewSliderProps> = ({ title, reviews }) => {
  const renderSlides = () =>
    reviews.map((review) => (
      <div key={review.key} style={{ width: '100px' }}>
        <div>{review.name}</div>
        <Rate allowHalf value={review.rating} />
        <div>{review.description}</div>
        <div>
          {review.reviewfrom}
          <strong>{review.reviewdays}</strong>
          {review.reviewto}
        </div>
      </div>
    ))

  return (
    <div style={{ backgroundColor: 'red' }}>
      <p>{title[0].name}</p>
      <Rate allowHalf value={title[0].key} />
      <p>{title[1].key}</p>
      <p>{title[1].name}</p>
      <p>{title[2].key}</p>
      <p>{title[2].name}</p>
      <Logo />
      <Slider dots={false} slidesToShow={3} slidesToScroll={3} arrows={true}>
        {renderSlides()}
      </Slider>
    </div>
  )
}

export default ReviewSlider
