import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import ShowcaseLayout from '../components/Gridd'
import { toast, Toaster } from 'react-hot-toast'
// import GridLayout from 'react-grid-layout'

const notify = () =>
  toast('Here is your toast.', {
    role: 'status',
  })

const Index: FC = () => {
  return (
    <Layout pageTitle="Welcome">
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
      <ShowcaseLayout />
    </Layout>
  )
}

export default Index
