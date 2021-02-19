import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { version } from '../../../package.json'
import { useTranslation } from 'react-i18next'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'
import CommonHeader from './setup/CommonHeader'

const Index: FC = () => {
  const { t } = useTranslation('common')
  const [showGrid, setShowGrid] = useState(false)

  return (
    <>
      <CommonHeader />
      <Layout pageTitle={t('index.title')}>
        {!showGrid && <Button onClick={() => setShowGrid(true)}>Edit</Button>}
        <hr />
        {showGrid && <Grid />}v{version}
      </Layout>
    </>
  )
}

export default Index
