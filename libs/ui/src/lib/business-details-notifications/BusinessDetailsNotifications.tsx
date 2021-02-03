import React, { FC, useEffect, useState } from 'react'
import { Divider, notification, Form } from 'antd'
import { Button, ButtonCheckbox } from '@pabau/ui'
import styles from './BusinessDetailsNotifications.module.less'

interface NotificationSetting {
  setting: string
  disabled: boolean
}

interface NotificationConfig {
  title: string
  tooltip?: string
  settings: NotificationSetting[]
}

export interface BusinessDetailsNotificationsProps {
  onSave?(val): void
  configurations?: NotificationConfig[]
}

const defaultConfigs: NotificationConfig[] = [
  {
    title: 'When receiving a new inbound lead.',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
  {
    title: 'When receiving a new review.',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
  {
    title: 'When a SMS campaign is delivered.',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
  {
    title: 'When a newsletter campaign is delivered.',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
  {
    title: 'When a scheduled report has been sent.',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
  {
    title: 'When a staff member requests a holiday.',
    tooltip: 'Only admins will receive this notification',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
  {
    title: 'When someone refers into the business.',
    settings: [
      {
        setting: 'Notification',
        disabled: false,
      },
      {
        setting: 'Email',
        disabled: false,
      },
    ],
  },
]

export const BusinessDetailsNotifications: FC<BusinessDetailsNotificationsProps> = ({
  onSave,
  configurations,
}) => {
  const [configs, setConfigs] = useState<NotificationConfig[]>([])
  const handleSaveChanges = () => {
    notification.open({ message: 'Saved Changes' })
    onSave && onSave(configs)
  }

  useEffect(() => {
    setConfigs(configurations || defaultConfigs)
  }, [configurations])
  return (
    <div className={styles.notificationsTabContainer}>
      <div className={styles.notificationsSubContainer}>
        <div className={styles.notificationsHeaderContainer}>
          <div>
            <p className={styles.tabTitle}>Notifications</p>
            <p className={styles.tabSubTitle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <Button type="primary" onClick={() => handleSaveChanges()}>
            Save Changes
          </Button>
        </div>
      </div>
      {configs.map((config) => (
        <>
          <Divider />
          <div className={styles.sectionContainer}>
            <Form layout="vertical">
              <Form.Item label={config.title} tooltip={config.tooltip}>
                {config.settings.map((setting) => (
                  <ButtonCheckbox
                    key={setting.setting}
                    label={setting.setting}
                    disabled={setting.disabled}
                  />
                ))}
              </Form.Item>
            </Form>
          </div>
        </>
      ))}
    </div>
  )
}

export default BusinessDetailsNotifications
