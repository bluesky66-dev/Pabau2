import { EyeOutlined } from '@ant-design/icons'
import {
  Avatar,
  BasicModal,
  Button,
  Stepper,
  StepperItem,
  TabMenu,
} from '@pabau/ui'
import { Divider, Tag } from 'antd'
import React, { FC, useEffect, useState } from 'react'
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
  visiblePreviewButton: boolean
  closePreviewDialog?: () => void
}

export const MedicalFormPreview: FC<MedicalFormPreviewProps> = ({
  user,
  desktopTemp,
  appTemp,
  step,
  stepData,
  visiblePreviewButton,
  closePreviewDialog,
}) => {
  const [visible, setVisible] = useState(!visiblePreviewButton)

  useEffect(() => {
    setVisible(!visiblePreviewButton)
  }, [visiblePreviewButton])

  const onCancel = () => {
    closePreviewDialog ? closePreviewDialog() : setVisible(false)
  }

  return (
    <>
      {visiblePreviewButton && (
        <Button icon={<EyeOutlined />} onClick={() => setVisible(true)}>
          Preview
        </Button>
      )}
      {visible && (
        <BasicModal
          wrapClassName={styles.tempPreviewContainer}
          title="Template Preview"
          visible={visible}
          newButtonText="Test As Client"
          width="50%"
          onCancel={onCancel}
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
