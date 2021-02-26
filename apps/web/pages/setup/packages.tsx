import { NextPage } from 'next'
import React from 'react'
import Iframe from '../../components/Iframe'
import Layout from '../../components/Layout/Layout'

const PackagesPage: NextPage = () => (
  <Layout pageTitle="Packages">
    <Iframe urlPath="/index.php?p=packages&noheader&pab2" />
  </Layout>
)

export default PackagesPage
