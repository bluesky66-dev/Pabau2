import React from 'react'
import { Layout } from '@pabau/ui'
import './reports.module.less'

/* eslint-disable-next-line */
export interface IndexProps {}

export function Index(props: IndexProps) {
  return (
    <div>
      <Layout active={'reports'}>
        <h1>Welcome to Reporst!</h1>
      </Layout>
    </div>
  )
}

export default Index
