import React, { FC } from 'react'
import { Rate } from 'antd'
import styles from './ReviewWrite.module.less'

export interface Question {
  key: number
  question: string
  rating: number
}

export interface P {
  questions: Array<Question>
}

export const ReviewWrite: FC<P> = ({ questions }) => {
  return (
    <div className={styles.ratingBox}>
      <div className={styles.rateHeading}>
        <h3>Consultation survey</h3>
        <small>Please, rate your consultation to provide better service</small>
      </div>

      <div className={styles.rateStarBox}>
        {questions?.map(({ question, key, rating }) => (
          <div key={`review-write-question-${key}`}>
            <div className={styles.question}>{question}</div>
            <div className={styles.rating}>
              <Rate style={{ color: '#54B2D3' }} allowHalf value={rating} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewWrite
