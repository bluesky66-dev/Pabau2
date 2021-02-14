import React, { FC } from 'react'
import { Notification, NotificationType } from '@pabau/ui'
import { Drawer, Divider, Menu, Dropdown } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import styles from './VersionHistory.module.less'

export interface VersionItem {
  version: string
  updatedBy: string
  date: string
}

export interface VersionHistoryProps {
  currentVersion: string
  history: {
    [key: string]: VersionItem[]
  }
  visible: boolean
  onVisibleChange: (val: boolean) => void
}

export const VersionHistory: FC<VersionHistoryProps> = ({
  currentVersion,
  history,
  visible,
  onVisibleChange,
}) => {
  const handleRestoreVersion = (e) => {
    Notification(
      NotificationType.success,
      `You successfully restored this version as Aesthetics Form v${e.key} (Restored)`
    )
    onVisibleChange(false)
  }
  const restoreVersion = (item) => (
    <Menu onClick={(e) => handleRestoreVersion(e)}>
      <Menu.Item key={item.version}>Restore Version</Menu.Item>
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
              <React.Fragment key={item.version}>
                <div className={styles.historyItem}>
                  <div>
                    <p className={styles.historyUpdatedDate}>{item.date}</p>
                    <p className={styles.historyUpdatedVersion}>
                      {item.version === currentVersion
                        ? 'Current Version'
                        : `Version ${item.version}`}
                    </p>
                    <p
                      className={styles.historyUpdatedBy}
                    >{`by ${item.updatedBy}`}</p>
                  </div>
                  <div>
                    <Dropdown
                      overlay={restoreVersion(item)}
                      trigger={['click']}
                    >
                      <p className={styles.historyMore}>
                        <MoreOutlined />
                      </p>
                    </Dropdown>
                  </div>
                </div>
                <Divider style={{ margin: 0 }} />
              </React.Fragment>
            ))}
          </div>
        ))}
      </Drawer>
    </div>
  )
}

export default VersionHistory
