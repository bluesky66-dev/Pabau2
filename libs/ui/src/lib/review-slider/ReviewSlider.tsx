import React, { FC } from 'react'
import { Rate, Popover } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { Logo } from '@pabau/ui'
import Slider from 'react-slick'
import styles from './ReviewSlider.module.less'

interface TitleType {
  name: string
  value: number
}
interface ReviewType {
  name: string
  description: string
  key: number
  rating: number
  reviewTime: string
}

export interface ReviewSliderProps {
  title: string
  execellentData: TitleType
  reviewData: TitleType
  averageData: TitleType
  reviews: ReviewType[]
}

export const ReviewSlider: FC<ReviewSliderProps> = ({
  title,
  execellentData,
  reviewData,
  averageData,
  reviews,
}) => {
  const Arrow = (props) => {
    const className = props.type === 'next' ? 'nextArrow' : 'prevArrow'
    return (
      <span className={className} onClick={props.onClick}>
        {props.type === 'next' ? <RightOutlined /> : <LeftOutlined />}
      </span>
    )
  }
  const renderSlides = () =>
    reviews.map((review) => (
      <div key={review.key} style={{ width: '100px' }}>
        <div className={styles.reviewName}>
          <div>{review.name}</div>
          <Rate allowHalf value={review.rating} />
        </div>
        <div className={styles.rateWrap}>{review.description}</div>
        <div className={styles.reviewTime}>{review.reviewTime}</div>
      </div>
    ))

  const content = (
    <div className={styles.contentWrapper}>
      <div className={styles.contentWrap}>
        <h5>{execellentData.name}</h5>
        <Rate allowHalf value={execellentData.value} />
      </div>
      <div className={styles.avgWrapper}>
        <div className={styles.avgData}>
          <div>
            <b>{averageData.value}</b>
          </div>
          <div>{averageData.name}</div>
        </div>
        <div className={styles.avgData}>
          <div>
            <b>{reviewData.value}</b>
          </div>
          <div>{reviewData.name}</div>
        </div>
      </div>
      <Logo />
    </div>
  )

  return (
    <div className={styles.reviewSlider}>
      <h1 className={styles.title}>{title}</h1>
      {/* <div className={styles.contentWrapper}>
      <div className={styles.contentWrap}>
          <h5>{execellentData.name}</h5>
          <Rate allowHalf value={execellentData.value} />
      </div>
      <div className={styles.avgWrapper}>
        <div className={styles.avgData}>
           <div><b>{averageData.value}</b></div>
           <div>{averageData.name}</div></div>
        <div className={styles.avgData}>
          <div><b>{reviewData.value}</b></div>
          <div>{reviewData.name}</div></div>
        </div>
        <Logo />
      </div> */}

      <Popover content={content} visible={true} placement="top">
        <div className={styles.sliderWrapper}>
          <Slider
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            dots={false}
            slidesToShow={3}
            slidesToScroll={3}
            arrows={true}
          >
            {renderSlides()}
          </Slider>
        </div>
      </Popover>
    </div>
  )
}

export default ReviewSlider
