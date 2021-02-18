import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { Input, Rate } from 'antd'
import styles from '../index.module.less'
import classNames from 'classnames'

const { TextArea } = Input

/* eslint-disable-next-line */
export interface P {
  reviewType: string
  reviewDescription: string
  questionNo?: number
  onNext: (e: any) => void
  onClose: () => void
}

export const ReviewQuestionScreen: FC<P> = ({
  reviewType,
  reviewDescription,
  questionNo,
  onNext,
  onClose,
}) => {
  const [textAreaErr, setTextAreaErr] = useState(false)
  const [spanErr, setSpanError] = useState(false)
  const [answer, setAnswer] = useState(null)
  const [rating, setRating] = useState(0)

  const beforeNextQuestion = () => {
    if (!answer) {
      setTextAreaErr(true)
      setSpanError(true)
    } else if (!rating) {
      setSpanError(true)
    } else {
      setTextAreaErr(false)
      const data = {
        answer,
        rating,
      }
      onNext(data)
    }
  }

  return (
    <div className={styles.section}>
      <div className={styles.centeralFlexBox}>
        <div className={classNames(styles.title, styles.reviewType)}>
          {reviewType}
        </div>
        <div className={classNames(styles.subTitle, styles.reviewDesc)}>
          {reviewDescription}
        </div>
        <div className={styles.questionNum}>Question {questionNo}</div>
        <div className={classNames(styles.rating, styles.textCenter)}>
          <Rate
            value={rating}
            onChange={(value: number) => {
              setSpanError(false)
              setRating(value)
            }}
          />
        </div>
        <div
          className={classNames(
            styles.commentLabel,
            styles.textLeft,
            styles.w100
          )}
        >
          Your comment
        </div>
        <div className={classNames(styles.commentInput, styles.w100)}>
          <TextArea
            className={textAreaErr && 'redBordered'}
            rows={4}
            placeholder="Paste your comment here"
            value={answer}
            onChange={(e) => {
              setTextAreaErr(false)
              setSpanError(false)
              setAnswer(e.target.value)
            }}
          />
          {spanErr && (
            <span className={styles.spanError}>
              Please fill out every field to proceed.
            </span>
          )}
        </div>
        <div
          className={classNames(styles.btn, styles.textRight, styles.w100)}
          style={{ marginTop: '10px' }}
        >
          <Button
            type="default"
            size="large"
            onClick={onClose}
            className={classNames(styles.autoMargin)}
          >
            Close
          </Button>
          <Button type="primary" size="large" onClick={beforeNextQuestion}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReviewQuestionScreen
