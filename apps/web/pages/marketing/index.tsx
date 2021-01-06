import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import Link from 'next/link'
import { useKeyPressEvent } from 'react-use'
import { useRouter } from 'next/router'

const Index: FC = () => {
  const router = useRouter()
  useKeyPressEvent('q', () => router.push('/marketing/sources'))
  useKeyPressEvent('w', () => router.push('/marketing/campaigns'))
  return (
    <Layout pageTitle="Marketing">
      <div>
        <Link href="/marketing/sources">
          <a>Sources</a>
        </Link>
        <Link href="/marketing/campaigns">
          <a>Campaigns</a>
        </Link>
      </div>
    </Layout>
  )
}

export default Index
