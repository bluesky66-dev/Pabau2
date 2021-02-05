import React, { FC, useState } from 'react'
import { CloseOutlined } from '@ant-design/icons'
import styles from './NotificationDrawer.module.less'
import { Drawer, Image } from 'antd'
import { ReactComponent as EmptySVG } from '../../assets/images/notification-empty.svg'
import { ReactComponent as Lead1SVG } from '../../assets/images/lead.svg'
import { ReactComponent as Lead2SVG } from '../../assets/images/lead1.svg'
import classNames from 'classnames'

interface Notification {
  notificationTime: string
  notificationType: string
  notificationTypeIcon: string
  title: string
  desc: string
}

interface NotificationData {
  [key: string]: Notification[]
}

interface P {
  openDrawer?: boolean
  closeDrawer?: () => void
  notifications?: NotificationData[]
}

export const NotificationDrawer: FC<P> = ({
  openDrawer = true,
  closeDrawer,
  notifications = [],
}) => {
  const [notificationDrawer, setNotificationDrawer] = useState(openDrawer)
  const [notifyTab, setNotifyTab] = useState('Activity')
  const [notificationData, setNotificationData] = useState<NotificationData[]>(
    notifications
  )

  const notificationLeadsData = [
    {
      Today: [
        {
          leadDate: new Date(),
          title: 'New features to sell vouchers with blase messages',
          desc:
            'Encourage clients and loved ones to treat themselves right in the time for the festive season!',
        },
      ],
    },
    {
      '14 December': [
        {
          leadDate: new Date(),
          title: 'Are you ready for reopening soon?',
          desc:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean malesuada lobortis ex eget viverra. Ut viverra non nisi eget viverra.',
        },
      ],
    },
  ]

  const closeDrawerMenu = () => {
    setNotificationDrawer(false)
    closeDrawer?.()
  }

  const removeNotification = (index, objectKey) => {
    const selectedObject = notificationData[index]
    delete selectedObject[objectKey]
    if (Object.keys(selectedObject).length === 0) {
      notificationData.splice(index, 1)
      setNotificationData([...notificationData])
    } else {
      const newNotificationData = notificationData.map((item, i) => {
        if (i !== index) {
          return item
        }
        return { ...selectedObject }
      })
      setNotificationData([...newNotificationData])
    }
  }

  return (
    <Drawer
      width={392}
      placement="right"
      closable={false}
      onClose={closeDrawerMenu}
      visible={notificationDrawer}
      className={styles.notificationDrawer}
    >
      <div className={styles.notificationHeader}>
        <div className={styles.notificationAlign}>
          <h1> Notifications</h1>
          <CloseOutlined
            onClick={closeDrawerMenu}
            className={styles.searchIconSize}
          />
        </div>
        <div
          className={classNames(styles.notifyTabs, styles.topSpaceNotification)}
        >
          <button
            className={classNames(
              styles.notifyTabDesign,
              notifyTab === 'Activity' && styles.activeTabs
            )}
            onClick={() => setNotifyTab('Activity')}
          >
            Activity
          </button>
          <button
            className={classNames(
              styles.notifyTabDesign,
              notifyTab === 'News' && styles.activeTabs
            )}
            onClick={() => setNotifyTab('News')}
          >
            News
          </button>
        </div>
      </div>

      {notifyTab === 'Activity' &&
        notificationData.map((notify, index) => {
          return Object.keys(notify).map((notification) => {
            return (
              <div key={notification}>
                <div
                  className={classNames(
                    styles.notificationAlign,
                    styles.todayTextTopSpace
                  )}
                >
                  <h2>{notification}</h2>
                  <CloseOutlined
                    className={styles.searchIconSize}
                    onClick={(e) => removeNotification(index, notification)}
                  />
                </div>
                {notify[notification].map((dayNotify, dayIndex) => {
                  return (
                    <div key={dayIndex}>
                      <div className={styles.notificationCard}>
                        <div className={styles.notifyAlign}>
                          <div className={classNames(styles.logo, styles.flex)}>
                            <Image src={dayNotify.notificationTypeIcon} />
                            <p className={styles.textSm}>
                              {dayNotify.notificationType}
                            </p>
                          </div>
                          <div className={styles.time}>
                            <p
                              className={classNames(
                                styles.textMd,
                                styles.grayTextColor
                              )}
                            >
                              {dayNotify.notificationTime}
                            </p>
                          </div>
                        </div>
                        <div className={styles.notifyTitleDesc}>
                          <h1>{dayNotify.title}</h1>
                          <p>{dayNotify.desc}</p>
                        </div>
                      </div>
                      <div className={styles.cardBorder} />
                    </div>
                  )
                })}
              </div>
            )
          })
        })}

      {Array.isArray(notificationData) &&
        notificationData.length === 0 &&
        notifyTab === 'Activity' && (
          <div className={styles.notificationEmpty}>
            <EmptySVG />
            <p className={styles.emptyMessage}>No notifications yet</p>
            <p className={styles.emptyHint}>
              Stay tuned! Notifications about your activity will show up here.
            </p>
            <a href="#test" className={styles.emptyAnchor}>
              Notification settings {'>'}
            </a>
          </div>
        )}

      {notifyTab === 'News' &&
        notificationLeadsData.map((notify, index) => {
          return Object.keys(notify).map((notification) => {
            return (
              <>
                <div
                  className={classNames(
                    styles.notificationAlign,
                    styles.todayTextTopSpace
                  )}
                >
                  <h2>{notification}</h2>
                </div>
                {notify[notification].map((dayNotify, index) => {
                  return (
                    <>
                      <div
                        key={dayNotify.title}
                        className={styles.notificationCard}
                      >
                        <div className={styles.notifyAlign}>
                          <div className={classNames(styles.logo, styles.flex)}>
                            {notification === 'Today' ? (
                              <Lead1SVG />
                            ) : (
                              <Lead2SVG />
                            )}
                            <p className={styles.textSm}>
                              {dayNotify.notificationType}
                            </p>
                          </div>
                        </div>
                        <div className={styles.leadTitleDesc}>
                          <h1>{dayNotify.title}</h1>
                          <p>{dayNotify.desc}</p>
                        </div>
                        <span
                          className={classNames(
                            styles.textMd,
                            styles.learnMore
                          )}
                        >
                          Learn more
                        </span>
                      </div>
                      <div className={styles.cardBorder} />
                    </>
                  )
                })}
              </>
            )
          })
        })}
    </Drawer>
  )
}

export default NotificationDrawer
