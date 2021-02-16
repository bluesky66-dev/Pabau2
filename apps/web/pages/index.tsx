import React, { FC, useState } from 'react'
import { Button } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'
import Grid from '../components/Grid'
import Layout from '../components/Layout/Layout'
import CommonHeader from './setup/CommonHeader'
import {Offline as OfflineProvider} from 'react-detect-offline';
import Offline from '../components/Offline/Offline';
const Index: FC = () => {
  const { t } = useTranslation()
  const [showGrid, setShowGrid] = useState(false)

  return (
    <>
      <CommonHeader />
      <OfflineProvider>
        <Offline />
      </OfflineProvider>
      <Layout pageTitle={t('common', 'index.title')}>
        {!showGrid && <Button onClick={() => setShowGrid(true)}>Edit</Button>}
        <hr />
        {showGrid && <Grid />}v{version}
      </Layout>
    </>
  )
}

export default Index
