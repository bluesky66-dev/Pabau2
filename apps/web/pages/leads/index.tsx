import React from 'react'
import { Layout } from '@pabau/ui'
import './leads.module.less'

/* eslint-disable-next-line */
export interface IndexProps {}

export function Index(props: IndexProps) {
  return (
    <div>
      <Layout active={'leads'}>
        <h1>Welcome to Leads!</h1>
      </Layout>
    </div>
  )
}

export default Index
