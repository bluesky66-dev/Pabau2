import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import { version } from '../../../package.json'
import useTranslation from '../hooks/useTranslation'

const Index: FC = () => {
  const { t } = useTranslation()

  return <Layout pageTitle={t('common', 'index.title')}>Version {version}</Layout>
}

export default Index
