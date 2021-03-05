import React from 'react'
import { Layout } from '@pabau/ui'
import './dashboard.module.less'

/* eslint-disable-next-line */
export interface IndexProps {}

export function Index(props: IndexProps) {
  return (
    <div>
      <Layout active={'dashboard'}>
        <h1>Welcome to Dashboard!</h1>
      </Layout>
    </div>
  )
}

export default Index
