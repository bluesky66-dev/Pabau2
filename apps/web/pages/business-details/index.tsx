import React, { FC } from 'react'
import Layout from '../../components/Layout/Layout'
import CommonHeader from '../setup/CommonHeader'
// import styles from './index.module.less'

export const Index: FC = () => {
  return (
    <>
      <CommonHeader />
      <Layout>
        <div>Business details page</div>
      </Layout>
    </>
  )
}

export default Index
