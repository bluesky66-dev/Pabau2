import React, { FC } from 'react'
import CommonHeader from '../common-header'
import Layout from '../../../components/Layout/Layout'
import { Typography, Input, Row } from 'antd'
import { Breadcrumb } from '@pabau/ui'
import { SearchOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import dynamic from 'next/dynamic'

const ActivityChart = dynamic(
  () => import('../../../components/activity-logs/ActivityChart'),
  {
    ssr: false,
  }
)

/* eslint-disable-next-line */
export interface IndexProps { }

export const Index: FC = () => {
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.appointmentWrapper}>
          <div style={{ display: 'flex' }}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '' },
                  {
                    breadcrumbName: 'Activity Logs',
                    path: '/setup/activity-logs',
                  },
                ]}
              />
              <Typography.Title>Activity Logs</Typography.Title>
            </div>
            <div>
              <Input
                className={styles.searchInputStyle}
                placeholder={'Search'}
                suffix={<SearchOutlined style={{ color: '#BFBFBF' }} />}
              />
            </div>
          </div>
        </div>
        <Row className={styles.appointmentWrapper}>
          <div>
            <span className={styles.text}>Showing</span>
            <span className={styles.highlightText}> All Employees</span>
            <span className={styles.text}>By</span>
            <span className={styles.highlightText}> All Actions</span>
            <span className={styles.text}>For the</span>
            <span className={styles.highlightText}> Last 30 days</span>
          </div>
          <div>
            <ActivityChart />
          </div>
        </Row>
      </Layout>
    </>
  )
}

export default Index
