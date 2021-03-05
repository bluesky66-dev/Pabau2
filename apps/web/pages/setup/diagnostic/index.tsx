import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { Button, Breadcrumb, TabMenu } from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import styles from './index.module.less'
import CommonHeader from '../../setup/common-header'
import { SearchOutlined } from '@ant-design/icons'
import CodeSet from '../../../components/Diagnostic/codeset'
import Code from '../../../components/Diagnostic/codes'
import Library from '../../../components/Diagnostic/library'
const { Title } = Typography

const Index: FC = () => {
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.diagnosticWrapper}>
          <span className={styles.hideSection}>
            <Breadcrumb
              breadcrumbItems={[
                { path: '', breadcrumbName: 'Setup' },
                {
                  path: '/diagnostic',
                  breadcrumbName: 'Diagnostics Codes',
                },
              ]}
            />
          </span>
          <Title>Diagnostics Codes</Title>
        </div>
        <div className={styles.rightSection}>
          <Input
            size="large"
            placeholder="Search by name, barcode, SKU"
            prefix={<SearchOutlined />}
          />
          <Button
            className={styles.newCodeSetButton}
            style={{ margin: '1em 8px', height: '40px', fontSize: '14px' }}
            type="primary"
          >
            New Codeset
          </Button>
        </div>
        <div className={styles.tabSection}>
          <TabMenu
            tabPosition="top"
            menuItems={['Your Codesets', 'Codes', 'Library']}
            minHeight="592px"
          >
            <CodeSet />
            <Code />
            <Library />
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
