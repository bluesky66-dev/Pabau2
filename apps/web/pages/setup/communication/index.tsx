import React, { FC } from 'react'
import { Typography, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import {
  TabMenu,
  Breadcrumb,
  NotificationBanner,
  MedicalFilter,
  Button,
} from '@pabau/ui'
import Layout from '../../../components/Layout/Layout'
import Custom from '../../../components/Setup/Communication/Custom'
import Library from '../../../components/Setup/Communication/Library'
import CommonHeader from '../common-header'
import notificationBannerImage from '../../../assets/images/notification-image.png'
import icon from '../../../assets/images/notification.png'
import styles from './index.module.less'

const { Title } = Typography

// interface IndexProps {}

export const Index: FC = () => {
  const [hideBanner, setHideBanner] = React.useState(false)
  const [currentTab, setCurrentTab] = React.useState('Custom')
  const [query, setQuery] = React.useState('')
  return (
    <>
      <CommonHeader />
      <Layout>
        <NotificationBanner
          title="Enable client notifications"
          desc="We recomment enabling enabling your confirmation email so that Pabau will automatically send out your questionnaire to a client at the point of booking an appointment."
          imgPath={icon}
          allowClose={true}
          setHide={[hideBanner, setHideBanner]}
          hrefPath="/setup/blank"
          hrefTitle="Enable Now"
        />
        <div className={styles.medicalFormsContainer}>
          <div className={styles.medicalFormsHeader}>
            <div>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '' },
                  { breadcrumbName: 'Communication Templates', path: '' },
                ]}
              />
              <Title>{'Communication Templates'}</Title>
            </div>
            <div className={styles.medicalFormsOps}>
              {currentTab === 'Custom' && (
                <>
                  <div>
                    <Input
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      addonAfter={<SearchOutlined />}
                      placeholder="Search in Custom"
                    />
                  </div>
                  <div>
                    <MedicalFilter />
                  </div>
                  <div>
                    <Button type="primary">{'Create Template'}</Button>
                  </div>
                </>
              )}
              {currentTab === 'Library' && (
                <Input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  addonAfter={<SearchOutlined />}
                  placeholder="Search in Library"
                />
              )}
            </div>
          </div>
          <TabMenu
            tabPosition="top"
            minHeight="100vh"
            menuItems={['Custom', 'Library']}
            onChange={(key) => setCurrentTab(key)}
          >
            <Custom />
            <Library />
            <div>Triggers Tab</div>
          </TabMenu>
        </div>
      </Layout>
    </>
  )
}

export default Index
