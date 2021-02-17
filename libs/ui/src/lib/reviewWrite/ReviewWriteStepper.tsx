import React, { FC, useState } from 'react'
import { Rate } from 'antd'
import { RightOutlined, LeftOutlined } from '@ant-design/icons'

import { Button } from '@pabau/ui'
import styles from './ReviewWrite.module.less'

export interface ReviewStepperProp {
  key: number
  question: string
  rating: number
}

export interface ReviewWriteStepperProps {
  title: string
  subtitle: string
  reviews: Array<ReviewStepperProp>
  onChange?: (reviews: Array<ReviewStepperProp>) => void
}

export const ReviewWriteStepper: FC<ReviewWriteStepperProps> = ({
  title,
  subtitle,
  reviews,
  onChange,
}) => {
  const [review, setReviews] = useState<Array<ReviewStepperProp>>(reviews)
  const [questionPage, setQuestionPage] = useState<number>(0)

  const handleRateChange = (value: number, key: number) => {
    const reviewData = review
    reviewData.map((review) => {
      if (review.key === key) review.rating = value
      return review
    })
    setReviews([...reviewData])
    onChange?.(reviewData)
  }

  return (
    <div className={styles.ratingBoxStepper}>
      <div className={styles.rateHeadingStepper}>
        <h3>{title}</h3>
        <small>{subtitle}</small>
      </div>
      <div className={styles.rateStarBoxStepper}>
        <div className={styles.reviewNumber}>
          {questionPage + 1}/{reviews.length}
        </div>
        <div className={styles.question}>{review[questionPage].question}</div>
        <div className={styles.rating}>
          <Rate
            style={{ color: '#54B2D3' }}
            allowHalf
            value={review[questionPage].rating}
            onChange={(value) =>
              handleRateChange(value, review[questionPage].key)
            }
          />
        </div>
      </div>
      <div className={styles.reviewFooterStepper}>
        <Button
          type={'default'}
          onClick={() => {
            questionPage !== 0 && setQuestionPage(questionPage - 1)
          }}
          disabled={questionPage === 0}
        >
          <LeftOutlined /> Previous
        </Button>
        <Button
          type={'default'}
          onClick={() => {
            questionPage !== reviews.length - 1 &&
              setQuestionPage(questionPage + 1)
          }}
          disabled={questionPage === reviews.length - 1}
        >
          Next <RightOutlined />
        </Button>
      </div>
    </div>
  )
}

export default ReviewWriteStepper
