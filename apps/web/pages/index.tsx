import React, { FC, useState } from 'react'
import { Button, Layout } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'
import Grid from '../components/Grid'

const Index: FC = () => {
  const { t } = useTranslation()
  const [showGrid, setShowGrid] = useState(false)

  return (
    <Layout pageTitle={t('common', 'index.title')}>
      {!showGrid && <Button onClick={() => setShowGrid(true)}>Edit</Button>}
      {showGrid && <Grid />}
      Version {version}
    </Layout>
  )
}

export default Index
