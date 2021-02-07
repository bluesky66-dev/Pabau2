import React, { FC, useState } from 'react'
import { EyeOutlined } from '@ant-design/icons'
import { Divider, Tag } from 'antd'
import {
  Button,
  TabMenu,
  BasicModal,
  Stepper,
  StepperItem,
  Avatar,
} from '@pabau/ui'
import styles from './MedicalFormPreview.module.less'

interface MedicalPreviewUserProps {
  name: string
  src: string
  date: string
  tags: Array<string>
}

export interface MedicalFormPreviewProps {
  user: MedicalPreviewUserProps
  desktopTemp: string
  appTemp: string
  step: number
  stepData: StepperItem[]
}

export const MedicalFormPreview: FC<MedicalFormPreviewProps> = ({
  user,
  desktopTemp,
  appTemp,
  step,
  stepData,
}) => {
  const [visible, setVisible] = useState(false)
  return (
    <>
      <Button icon={<EyeOutlined />} onClick={() => setVisible(true)}>
        Preview
      </Button>
      {visible && (
        <BasicModal
          title="Template Preview"
          visible={visible}
          newButtonText="Test As Client"
          width="100%"
          onCancel={() => setVisible(false)}
        >
          <div className={styles.tempPreviewTabMenuContainer}>
            <TabMenu tabPosition="top" menuItems={['Desktop', 'App']}>
              <div className={styles.tempPreviewTabContainer}>
                <iframe title="Desktop" src={desktopTemp} />
              </div>
              <div className={styles.tempPreviewTabContainer}>
                <div className={styles.tempAppPreviewHeader}>
                  <div>
                    <Avatar src={user.src} name={user.name} size={50} />
                    <div className={styles.userInfo}>
                      <p className={styles.previewUserName}>{user.name}</p>
                      <p className={styles.previewUserDate}>{user.date}</p>
                    </div>
                  </div>
                  <div>
                    {user?.tags?.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </div>
                </div>
                <Divider style={{ margin: 0 }} />
                <Stepper datasource={stepData} step={step} />
                <Divider style={{ margin: 0 }} />
                <iframe title="App" src={appTemp} />
              </div>
            </TabMenu>
          </div>
        </BasicModal>
      )}
    </>
  )
}

export default MedicalFormPreview
