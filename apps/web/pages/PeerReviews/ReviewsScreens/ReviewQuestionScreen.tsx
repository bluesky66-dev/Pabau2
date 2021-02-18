import React, { FC } from 'react'
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
  onNext: () => void
  onClose: () => void
}

export const ReviewQuestionScreen: FC<P> = ({
  reviewType,
  reviewDescription,
  questionNo,
  onNext,
  onClose,
}) => {
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
          <Rate />
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
          <TextArea rows={4} placeholder="Paste your comment here" />
        </div>
        <div className={classNames(styles.btn, styles.textRight, styles.w100)}>
          <Button
            type="default"
            size="large"
            onClick={onClose}
            className={classNames(styles.autoMargin)}
          >
            Close
          </Button>
          <Button type="primary" size="large" onClick={onNext}>
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ReviewQuestionScreen
