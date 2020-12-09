import React, { FC } from 'react'
import './styles.less'
import { Layout } from '@pabau/ui'
import { useRouter } from 'next/router'

const Page: FC = () => {
  const router = useRouter()
  return (
    <Layout pageTitle="Add new Marketing Source" onCancelClicked={() => router.back()}>
      Name: <input />
    </Layout>
  )
}

export default Page
