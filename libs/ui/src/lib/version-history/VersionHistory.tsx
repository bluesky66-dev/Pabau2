import React, { FC } from 'react'
import { Notification, NotificationType } from '@pabau/ui'
import { Drawer, Divider, Menu, Dropdown } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import styles from './VersionHistory.module.less'

console.log(styles.versionHistoryContainer)

export interface VersionItem {
  version: string
  updatedBy: string
  date: string
}

export interface VersionHistoryProps {
  history: {
    [key: string]: VersionItem[]
  }
  visible: boolean
  onVisibleChange: (val: boolean) => void
}

export const VersionHistory: FC<VersionHistoryProps> = ({
  history,
  visible,
  onVisibleChange,
}) => {
  const handleRestoreVersion = (e) => {
    console.log(e)
    if (e.key === 'restore-version') {
      Notification(
        NotificationType.success,
        'You successfully restored this version as Aesthetics Form v2 (Restored)'
      )
      onVisibleChange(false)
    }
  }
  const restoreVersion = () => (
    <Menu onClick={(e) => handleRestoreVersion(e)}>
      <Menu.Item key="restore-version">Restore Version</Menu.Item>
    </Menu>
  )
  return (
    <div className={styles.versionHistoryContainer}>
      <Drawer
        title="Version History"
        closable={true}
        visible={visible}
        onClose={() => {
          onVisibleChange(false)
        }}
        width={320}
        bodyStyle={{ padding: 0 }}
      >
        {Object.keys(history)?.map((key) => (
          <div className={styles.historyItems} key={key}>
            <p className={styles.historyItemTitle}>
              {key.replace('_', ' ').toUpperCase()}
            </p>
            <Divider style={{ margin: 0 }} />
            {history[key]?.map((item) => (
              <>
                <div className={styles.historyItem}>
                  <div>
                    <p className={styles.historyUpdatedDate}>{item.date}</p>
                    <p className={styles.historyUpdatedVersion}>
                      {item.version}
                    </p>
                    <p
                      className={styles.historyUpdatedBy}
                    >{`by ${item.updatedBy}`}</p>
                  </div>
                  <div>
                    <Dropdown overlay={restoreVersion}>
                      <p className={styles.historyMore}>
                        <MoreOutlined />
                      </p>
                    </Dropdown>
                  </div>
                </div>
                <Divider style={{ margin: 0 }} />
              </>
            ))}
          </div>
        ))}
      </Drawer>
    </div>
  )
}

export default VersionHistory
