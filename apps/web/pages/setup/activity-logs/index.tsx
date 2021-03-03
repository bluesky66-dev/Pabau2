import React, { FC } from 'react'
import CommonHeader from '../common-header'
import Layout from '../../../components/Layout/Layout'
import { Typography, Row, Popover } from 'antd'
import { Breadcrumb, SetupSearchInput } from '@pabau/ui'
import styles from './index.module.less'
import dynamic from 'next/dynamic'

const ActivityChart = dynamic(
  () => import('../../../components/activity-logs/ActivityChart'),
  {
    ssr: false,
  }
)

// const marketingSourceFilterData = [
//   {
//     key: 0,
//     title: 'All marketing source activity',
//     value: false,
//   },
//   {
//     key: 1,
//     title: 'Created marketing sources',
//     value: false,
//   },
//   {
//     key: 2,
//     title: 'Updated marketing sources',
//     value: false,
//   },
//   {
//     key: 3,
//     title: 'Deleted marketing sources',
//     value: false,
//   },
// ]

/* eslint-disable-next-line */
export interface IndexProps { }

export const Index: FC = () => {
  const content = (
    <div>
      <SetupSearchInput />
      <p>Marketing Sources</p>
      <p>Media</p>
      <p>security</p>
    </div>
  )

  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.appointmentWrapper}>
          <div style={{ display: 'flex' }}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: 'setup' },
                  {
                    breadcrumbName: 'Activity Logs',
                    path: '',
                  },
                ]}
              />
              <Typography.Title>Activity Logs</Typography.Title>
            </div>
            <div>
              <SetupSearchInput />
            </div>
          </div>
          <Row>
            <div>
              <span className={styles.text}>Showing</span>
              <span className={styles.highlightText}> All Employees</span>
              <span className={styles.text}>By</span>
              <Popover
                content={content}
                title="Select actions"
                placement="bottomRight"
              >
                <span className={styles.highlightText}> All Actions</span>
              </Popover>
              <span className={styles.text}>For the</span>
              <span className={styles.highlightText}> Last 30 days</span>
            </div>
          </Row>
          <div>
            <ActivityChart />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
