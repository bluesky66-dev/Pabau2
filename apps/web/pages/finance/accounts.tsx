import React from 'react'
import { Layout } from '@pabau/ui'
import './accounts.module.less'

/* eslint-disable-next-line */
export interface AccountsProps {}

export function Accounts(props: AccountsProps) {
  return (
    <div>
      <Layout active={'finance/accounts'}>
        <h1>Welcome to accounts!</h1>
      </Layout>
    </div>
  )
}

export default Accounts
