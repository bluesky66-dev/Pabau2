import React, { FC } from 'react'
import { useMedia } from 'react-use'
import { Rate, Popover } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'
import { Logo } from '@pabau/ui'
import { Carousel } from 'antd'
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

export interface ArrowProps {
  type: string
  onClick?: () => void
}

export const ReviewSlider: FC<ReviewSliderProps> = ({
  title,
  execellentData,
  reviewData,
  averageData,
  reviews,
}) => {
  const isLgScreen = useMedia('(min-width: 1200px)', false)
  const isMdScreen = useMedia(
    '(min-width: 768px) and (max-width: 1199px)',
    false
  )
  const Arrow = (props: ArrowProps) => {
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
      <Popover content={content} visible={true} placement="top">
        <div className={styles.sliderWrapper}>
          <Carousel
            nextArrow={<Arrow type="next" />}
            prevArrow={<Arrow type="prev" />}
            dots={false}
            slidesToShow={isLgScreen ? 3 : isMdScreen ? 2 : 1}
            slidesToScroll={isLgScreen ? 3 : isMdScreen ? 2 : 1}
            arrows={true}
          >
            {renderSlides()}
          </Carousel>
        </div>
      </Popover>
    </div>
  )
}

export default ReviewSlider
