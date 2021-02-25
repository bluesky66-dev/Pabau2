import React, { FC } from 'react'
import Layout from '../../../components/Layout/Layout'
import { TabMenu, Breadcrumb, Button } from '@pabau/ui'
import { Card, Input, Dropdown, Menu } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import styles from './index.module.less'

const Index: FC = () => {
  return (
    <Layout>
      <Card>
        <div className={styles.servicesMain}>
          <h1>Welcome to index!</h1>
        </div>
      </Card>
    </Layout>
  )
}

export default Index
