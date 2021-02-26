import React from 'react'
import Layout from '../../components/Layout/Layout'
import './cashup.module.less'

/* eslint-disable-next-line */
export interface CashupProps {}

export function Cashup(props: CashupProps) {
  return (
    <div>
      <Layout active={'finance/cashup'}>
        <h1>Welcome to cashup!</h1>
      </Layout>
    </div>
  )
}

export default Cashup
