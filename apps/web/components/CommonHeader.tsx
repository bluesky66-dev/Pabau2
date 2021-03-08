import React, { FC, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import { SetupSearchInput } from '@pabau/ui'
import {
  MobileHeader,
  MobileSidebar,
  NotificationDrawer,
  PabauMessages,
} from '@pabau/ui'
import { MenuOutlined } from '@ant-design/icons'
import Search from './Search'
import styles from '../pages/setup/Setup.module.less'
import classNames from 'classnames'

interface P {
  handleSearch?: (searchTerm: string) => void
}

const CommonHeader: FC<P> = ({ handleSearch }) => {
  const [openMenuDrawer, setMenuDrawer] = useState<boolean>(false)
  const [openNotificationDrawer, setNotificationDrawer] = useState<boolean>(
    false
  )
  const [openMessageDrawer, setMessageDrawer] = useState<boolean>(false)
  const [showSearch, setShowSearch] = useState(false)

  return (
    <div className={classNames(styles.setupPage, styles.desktopViewNone)}>
      <MobileHeader className={styles.pabauMobileHeader}>
        <div className={styles.mobileViewAlign}>
          <div className={styles.mobileViewHeaderHeading}>
            <MenuOutlined
              className="menuHeaderIconColor"
              onClick={() => {
                setMenuDrawer(() => !openMenuDrawer)
              }}
            />
            <p>Setup</p>
          </div>
          <div className={styles.searchInput}>
            {!showSearch ? (
              <SearchOutlined
                onClick={() => {
                  setShowSearch(true)
                }}
              />
            ) : (
              <div className={styles.search}>
                <SetupSearchInput onChange={handleSearch} />
              </div>
            )}
          </div>
        </div>
      </MobileHeader>
      {openMenuDrawer && (
        <MobileSidebar
          searchRender={() => <Search />}
          onSideBarClosed={() => setMenuDrawer(() => !openMenuDrawer)}
          onClickNotificationDrawer={() => setNotificationDrawer((e) => !e)}
          onClickChatDrawer={() => setMessageDrawer((e) => !e)}
        />
      )}
      {openNotificationDrawer && (
        <NotificationDrawer
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
