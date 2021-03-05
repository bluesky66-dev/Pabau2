import React from 'react'
import { Layout } from '@pabau/ui'
import './clients.module.less'

/* eslint-disable-next-line */
export interface ClientsProps {}

export function Clients(props: ClientsProps) {
  return (
    <div>
      <Layout active={'clients'}>
        <h1>Welcome to clients!</h1>
      </Layout>
    </div>
  )
}

export default Clients
