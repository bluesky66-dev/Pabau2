import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import { version } from '../../../package.json'

// test..

const Index: FC = () => {
  return <Layout pageTitle="Welcome">Version {version}</Layout>
}

export default Index
