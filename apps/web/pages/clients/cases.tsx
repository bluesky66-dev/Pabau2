import React from 'react'
import { Layout } from '@pabau/ui'
import './cases.module.less'

/* eslint-disable-next-line */
export interface CasesProps {}

export function Cases(props: CasesProps) {
  return (
    <div>
      <Layout active={'/clients/cases'}>
        <h1>Welcome to cases!</h1>
      </Layout>
    </div>
  )
}

export default Cases
