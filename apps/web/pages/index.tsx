import React, { FC } from 'react'
import './index.module.less'
import { Layout } from '@pabau/ui'
import useTranslation from 'next-translate/useTranslation'

const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Welcome">
      dashboard/buzzfeed to go here. BUT FOR NOW, CLICK MARKETING TAB. Translate:{' '}
      {t('common:marketingsource.header.edit')}
    </Layout>
  )
}

export default Index
