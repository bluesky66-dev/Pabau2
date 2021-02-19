import React, { FC, useState, useEffect } from 'react'
import { Rate } from 'antd'
import styles from './ReviewWrite.module.less'

export interface Question {
  key: number
  question: string
  rating: number
}

export interface QuestionProps {
  title: string
  subtitle: string
  reviews: Array<Question>
  onChange?: (reviews: Array<Question>) => void
}

export const ReviewWrite: FC<QuestionProps> = ({
  title,
  subtitle,
  reviews,
  onChange,
}) => {
  const [review, setReviews] = useState<Array<Question>>([])

  const handleRateChange = (value: number, key: number) => {
    const reviewData = review
    reviewData.map((review) => {
      if (review.key === key) review.rating = value
      return review
    })
    setReviews([...reviewData])
    onChange?.(reviewData)
  }

  useEffect(() => {
    setReviews(reviews)
  }, [reviews])

  return (
    <div className={styles.ratingBox}>
      <div className={styles.rateHeading}>
        <h3>{title}</h3>
        <small>{subtitle}</small>
      </div>

      <div className={styles.rateStarBox}>
        {review?.map(({ question, key, rating }) => (
          <div key={`review-write-question-${key}`}>
            <div className={styles.question}>{question}</div>
            <div className={styles.rating}>
              <Rate
                style={{ color: '#54B2D3' }}
                allowHalf
                value={rating}
                onChange={(value) => handleRateChange(value, key)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewWrite
