import React from 'react'
import { Layout } from '@pabau/ui'
import './targets.module.less'

/* eslint-disable-next-line */
export interface TargetsProps {}

export function Targets(props: TargetsProps) {
  return (
    <div>
      <Layout active={'team/targets'}>
        <h1>Welcome to targets!</h1>
      </Layout>
    </div>
  )
}

export default Targets
