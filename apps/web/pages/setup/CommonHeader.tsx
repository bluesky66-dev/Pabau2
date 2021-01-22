import React, { FC, useState } from 'react'
import { MobileHeader, MobileSidebar, PabauNotification, PabauMessages } from '@pabau/ui'
import { MenuOutlined } from '@ant-design/icons'
import Search from '../../components/Search'
import styles from './Setup.module.less'
import classNames from 'classnames'

const CommonHeader: FC = () => {
  const [openMenuDrawer, setMenuDrawer] = useState<boolean>(false)
  const [openNotificationDrawer, setNotificationDrawer] = useState<boolean>(false)
  const [openMessageDrawer, setMessageDrawer] = useState<boolean>(false)

  return (
    <div className={classNames(styles.setupPage, styles.desktopViewNone)}>
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
  )
}

export default CommonHeader
