import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import Iframe from '../../components/Iframe'

const Index: FC = () => {
  return (
    <Layout pageTitle="Cal">
      <Iframe title="Pabau Cal (default version)" urlPath="/pages/cal/" />
    </Layout>
  )
}

export default Index
