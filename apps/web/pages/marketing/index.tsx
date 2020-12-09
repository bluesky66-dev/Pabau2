import React, { FC } from 'react'
import './styles.less'
import { Layout } from '@pabau/ui'
import Link from 'next/link'

const Index: FC = () => (
  <Layout pageTitle="Marketing">
    <div>
      <a href="/marketing/sources">Sources (hard link)</a>
    </div>
    <div>
      <Link href="/marketing/sources">
        <a>Sources (fast link)</a>
      </Link>
    </div>
  </Layout>
)

export default Index
