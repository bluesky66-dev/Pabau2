import React from 'react'
import Layout from '../../components/Layout/Layout'
import './vouchers.module.less'

/* eslint-disable-next-line */
export interface VouchersProps {}

export function Vouchers(props: VouchersProps) {
  return (
    <div>
      <Layout active={'marketing/vouchers'}>
        <h1>Welcome to vouchers!</h1>
      </Layout>
    </div>
  )
}

export default Vouchers
