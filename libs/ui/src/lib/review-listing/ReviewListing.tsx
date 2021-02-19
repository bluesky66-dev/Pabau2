import React, { FC } from 'react'
import { Rate } from 'antd'
import styles from './ReviewListing.module.less'

const logoPos = {
  Left: 'flex-start',
  Right: 'flex-end',
  Middle: 'center',
}
export interface ReviewListingProps {
  description?: string
  review?: number
  image?: string
  totalReview?: number
  totalReviewUser?: number
  weScoreLabel?: string
  fromLabel?: string
  reviewLabel?: string
  color?: string
  logoPosition?: string
  logoSize?: number
}
export const ReviewListing: FC<ReviewListingProps> = ({
  description,
  review,
  image,
  totalReview,
  totalReviewUser,
  weScoreLabel,
  fromLabel,
  reviewLabel,
  color,
  logoPosition,
  logoSize,
}) => {
  return (
    <div className={styles.reviewListingCard}>
      <div
        className={styles.reviewImg}
        style={{ justifyContent: logoPos[logoPosition || 'Middle'] }}
      >
        <img src={image} alt="logotype" width={logoSize} />
      </div>
      <div className={styles.reviewContent}>
        <p>{description}</p>
      </div>
      <div className={styles.reviewResult}>
        <p>
          {weScoreLabel}
          <strong>
            {review}/{totalReview}
          </strong>
          {fromLabel}
          <strong>{totalReviewUser}</strong>
          {reviewLabel}
        </p>
        <Rate style={{ color: color || '#54B2D3' }} allowHalf value={review} />
      </div>
    </div>
  )
}

export default ReviewListing
