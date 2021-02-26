import React from 'react'
import Layout from '../../components/Layout/Layout'
import './reviews.module.less'

/* eslint-disable-next-line */
export interface ReviewsProps {}

export function Reviews(props: ReviewsProps) {
  return (
    <div>
      <Layout active={'marketing/reviews'}>
        <h1>Welcome to reviews!</h1>
      </Layout>
    </div>
  )
}

export default Reviews
