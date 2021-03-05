import React from 'react'
import { Layout } from '@pabau/ui'
import './referral.module.less'

/* eslint-disable-next-line */
export interface ReferralProps {}

export function Referral(props: ReferralProps) {
  return (
    <div>
      <Layout active={'marketing/referral'}>
        <h1>Welcome to referral!</h1>
      </Layout>
    </div>
  )
}

export default Referral
