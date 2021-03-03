import React, { FC } from 'react'
import { Button } from '@pabau/ui'
import './ShareReview.module.less'

/* eslint-disable-next-line */
export interface ShareReviewProps {
  text: string
  reviewScore: string
  logo: string
  companyName: string
  date: Date
}

export const ShareReview: FC<ShareReviewProps> = (props: ShareReviewProps) => {
  return (
    <div>
      <Button>Share</Button>
    </div>
  )
}

export default ShareReview
