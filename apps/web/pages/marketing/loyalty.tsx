import React from 'react'
import Layout from '../../components/Layout/Layout'
import './loyalty.module.less'

/* eslint-disable-next-line */
export interface LoyaltyProps {}

export function Loyalty(props: LoyaltyProps) {
  return (
    <div>
      <Layout active={'marketing/loyalty'}>
        <h1>Welcome to loyalty!</h1>
      </Layout>
    </div>
  )
}

export default Loyalty
