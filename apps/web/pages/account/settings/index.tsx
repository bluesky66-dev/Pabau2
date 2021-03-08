import {
  BellOutlined,
  LeftOutlined,
  LockOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Layout } from '@pabau/ui'
import { Button, Col, Row, Tabs } from 'antd'
import React, { FC } from 'react'
import styles from './index.module.less'
import Notification from '../../../components/Account/Settings/Notifications'
import Profile from '../../../components/Account/Settings/Profile'
import Security from '../../../components/Account/Settings/Security'

const { TabPane } = Tabs
const Index: FC = () => {
  return (
    <Layout>
      <Row className={styles.container}>
        <Col span={5}>
          <Button icon={<LeftOutlined />} className="Btn Back">
            Back
          </Button>
        </Col>
        <Col span={14}>
          <h1>Account Settings</h1>
          <Tabs tabPosition={'left'} className={styles.mainBody}>
            <TabPane
              tab={
                <span>
                  <UserOutlined />
                  Profile
                </span>
              }
              key="1"
            >
              <Profile />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <LockOutlined />
                  Security
                </span>
              }
              key="2"
            >
              <Security />
            </TabPane>
            <TabPane
              tab={
                <span>
                  <BellOutlined />
                  Notifications
                </span>
              }
              key="3"
            >
              <Notification />
            </TabPane>
          </Tabs>
        </Col>
        <Col span={5}>
          <Button className="Btn Save">Save Changes</Button>
        </Col>
      </Row>
    </Layout>
  )
}

export default Index
