import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import useTranslation from '../../hooks/useTranslation'
import { Card } from 'antd'

const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle={t('common', 'setup.title')}>
      <Card title=""></Card>
    </Layout>
  )
}

export default Index
