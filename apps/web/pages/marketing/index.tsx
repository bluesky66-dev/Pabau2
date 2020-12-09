import React, { FC } from 'react'
import './styles.less'
import { Layout } from '@pabau/ui'
import Link from 'next/link'

const Index: FC = () => (
  <Layout pageTitle="Marketing">
    <div>
      <Link href="/marketing/sources">
        <a>Sources</a>
      </Link>
    </div>
  </Layout>
)

export default Index
