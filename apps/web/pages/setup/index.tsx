import React, { FC } from 'react'
import { Layout } from '@pabau/ui'
import { Card } from 'antd'
import CommonHeader from './CommonHeader'
import HeaderChip from './headerChip'
import Grid from './grid'
import WebinarCard from './webinar'
import styles from './Setup.module.less'

const Index: FC = () => {
  return (
    <>
      <CommonHeader />
      <Layout>
        <Card title="Setup">
          <HeaderChip />
          <div className={styles.mainWrap}>
            <Grid />
            <WebinarCard />
          </div>
        </Card>
      </Layout>
    </>
  )
}

export default Index
