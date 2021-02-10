import React, { FC } from 'react'
import { Layout } from '@pabau/ui'

const Index: FC = () => {
  return (
    <Layout pageTitle="Cal">
      <iframe
        title="Pabau"
        src="https://crm.pabau.com/cal"
        width="100%"
        height="70vh"
      />
    </Layout>
  )
}

export default Index
