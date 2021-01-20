import React, { FC, useState } from 'react'
import { Layout, MobileHeader, MobileSidebar, PabauNotification, PabauMessages } from '@pabau/ui'
import useTranslation from '../../hooks/useTranslation'
import { Card } from 'antd'
import { isMobile, isTablet } from 'react-device-detect'
import { MenuOutlined } from '@ant-design/icons'
import Search from '../../components/Search'
import styles from './Setup.module.less'

const Index: FC = () => {
  const { t } = useTranslation()

  const [openMenuDrawer, setMenuDrawer] = useState<boolean>(false)
  const [openNotificationDrawer, setNotificationDrawer] = useState<boolean>(false)
  const [openMessageDrawer, setMessageDrawer] = useState<boolean>(false)

  return (
    <>
      {!isTablet && isMobile ? (
        <div className={styles.setupPage}>
          <MobileHeader className={styles.pabauMobileHeader}>
            <div className={styles.mobileViewAlign}>
              <div className={styles.mobileViewHeaderHeading}>
                <MenuOutlined
                  className="menuHeaderIconColor"
                  onClick={() => {
                    setMenuDrawer((e) => !openMenuDrawer)
                  }}
                />
                <p>Setup</p>
              </div>
            </div>
          </MobileHeader>
          {openMenuDrawer && (
            <MobileSidebar
              searchRender={() => <Search />}
              onSideBarClosed={() => setMenuDrawer((e) => !openMenuDrawer)}
              onClickNotificationDrawer={() => setNotificationDrawer((e) => !e)}
              onClickChatDrawer={() => setMessageDrawer((e) => !e)}
            />
          )}
          {openNotificationDrawer && (
            <PabauNotification
              openDrawer={openNotificationDrawer}
              closeDrawer={() => setNotificationDrawer((e) => !e)}
            />
          )}
          {openMessageDrawer && (
            <PabauMessages
              openDrawer={openMessageDrawer}
              closeDrawer={() => setMessageDrawer((e) => !e)}
            />
          )}
        </div>
      ) : null}

      <Layout pageTitle={t('common', 'setup.title')}>
        <Card title="Calender">Blah one, blah two</Card>
      </Layout>
    </>
  )
}

export default Index
