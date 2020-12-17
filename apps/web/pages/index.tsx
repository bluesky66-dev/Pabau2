import React, { FC } from 'react'
import './index.module.less'
import useTranslation from 'next-translate/useTranslation'
import { Layout, Steps } from '@pabau/ui'

const Index: FC = () => {
  const { t } = useTranslation()

  return (
    <Layout pageTitle="Welcome">
      dashboard/buzzfeed to go here. BUT FOR NOW, CLICK MARKETING TAB. Translate:{' '}
      {t('common:marketingsource.header.edit')}
      <Steps></Steps>
    </Layout>
  )
}

export default Index
