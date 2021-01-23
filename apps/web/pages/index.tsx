import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'
import CommonHeader from './setup/CommonHeader'

const Index: FC = () => {
  const { t } = useTranslation()
  const [showGrid, setShowGrid] = useState(false)

  return (
    <>
      <CommonHeader />
      <Layout pageTitle={t('common', 'index.title')}>
        {!showGrid && <Button onClick={() => setShowGrid(true)}>Edit</Button>}
        {showGrid && <Grid />}
        BB: Version {version}
      </Layout>
    </>
  )
}

export default Index
