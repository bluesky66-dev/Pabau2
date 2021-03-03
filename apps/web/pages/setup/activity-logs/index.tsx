import React, { FC } from 'react'
import CommonHeader from '../common-header'
import Layout from '../../../components/Layout/Layout'
import { Typography, Row, Popover, List } from 'antd'
import { Breadcrumb, SetupSearchInput } from '@pabau/ui'
import styles from './index.module.less'
import dynamic from 'next/dynamic'
import { UserOutlined, FileFilled } from '@ant-design/icons'
import Logo from '../../../assets/images/logo.svg'

const ActivityChart = dynamic(
  () => import('../../../components/activity-logs/ActivityChart'),
  {
    ssr: false,
  }
)

const Data = [
  {
    key: 1,
    time: '10:21',
    updated_time: 'about 5 hour ago',
    upload_file_title: 'Updated page',
    file_name: 'Care plus',
    file_size: '12 Mb',
    file_attachment: false,
  },
  {
    key: 2,
    time: '10:21',
    updated_time: 'about 5 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '20 Mb',
  },
  {
    key: 3,
    time: '9:25',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '2 Mb',
  },
  {
    key: 4,
    time: '9:20',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '657 Kb',
  },
  {
    key: 5,
    time: '9:20',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Edited file',
    file_name: 'Go Paperless Health Records',
    file_attachment: false,
    file_size: '657 Kb',
  },
  {
    key: 4,
    time: '9:20',
    updated_time: 'about 6 hour ago',
    upload_file_title: 'Uploaded attachment',
    file_name: 'fgtjd43_1 (1)',
    file_attachment: true,
    file_size: '657 Kb',
  },
]

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
        <div className={styles.activityMainWrapper}>
          <div className={styles.activityHead}>
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
            <div className={styles.activitySerach}>
              <SetupSearchInput />
            </div>
          </div>
          <div className={styles.activityShowingInfo}>
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
          </div>

          <div className={styles.chartBlock}>
            <div className={styles.chartCard}>
              <ActivityChart />
            </div>
          </div>

          <div className={styles.activityListBlock}>
            <div className={styles.activityListCard}>
              <div className={styles.anonymousList}>
                <div className={styles.box}>
                  <div className={styles.icon}>
                    <UserOutlined />
                  </div>
                  <div className={styles.content}>
                    <div className={styles.userTime}>
                      Anonymous user from{' '}
                      <span>5.9.113.0 &middot; 3:59 (20 minutes ago)</span>
                    </div>
                    <div className={styles.userContent}>
                      Failed to login with username “Pabau” (incorrect password
                      entered)
                    </div>
                  </div>
                </div>
              </div>
              <List
                itemLayout="horizontal"
                className={styles.list}
                dataSource={Data}
                renderItem={(item) => (
                  <List.Item>
                    <div className={styles.box}>
                      <List.Item.Meta
                        className={styles.icon}
                        avatar={<img src={Logo} alt="" />}
                      />
                      <div className={styles.content}>
                        <div className={styles.userTime}>
                          You &middot; <span>{item.time}</span>&nbsp;
                          <span>({item.updated_time})</span>
                        </div>
                        <div className={styles.userContent}>
                          <span>{item.upload_file_title}</span>&nbsp;
                          <span className={styles.label}>
                            <q>{item.file_name}</q>
                          </span>
                        </div>
                        {item.file_attachment === true ? (
                          <div className={styles.userFile}>
                            <FileFilled />
                            <span className={styles.fileSize}>
                              {item.file_size}
                            </span>
                          </div>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </List.Item>
                )}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
