import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { FC, useState } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormEdit from './MedicalFormEdit'
import MedicalFormInfo from './MedicalFormInfo'
import { PreviewData } from './MedicalFormInterface'
import MedicalFormPreview from './MedicalFormPreview'
import MedicalFormSetting from './MedicalFormSetting'

const { TabPane } = Tabs

const MedicalFormBuilder: FC<PreviewData> = ({ previewData }) => {
  const [formName, setFormName] = useState('IPL Treatment Record (Clone)')
  const [refreshPreview, setRefreshPreview] = useState(false)
  const [activatePanel, setActivatePanel] = useState('1')
  const changeFormName = (formName) => {
    setFormName(formName)
  }

  const changeTab = (key) => {
    setRefreshPreview(false)
    if (key === '2') {
      setRefreshPreview(true)
    }
    setActivatePanel('1')
  }

  const closePreviewDialog = () => {
    setRefreshPreview(false)
  }

  return (
    <>
      <MedicalFormInfo formName={formName} />
      <MedicalFormSetting />
      <Tabs
        activeKey={activatePanel}
        centered
        className={styles.medicalFormMainTab}
        onChange={changeTab}
      >
        <TabPane
          tab={
            <span className={styles.tabName}>
              &nbsp;&nbsp;
              <EditOutlined />
              Edit &nbsp;&nbsp;
            </span>
          }
          key="1"
        >
          <MedicalFormEdit
            previewData={previewData}
            changeFormName={changeFormName}
            formName={'IPL Treatment Record (Clone)'}
          />
          {refreshPreview === true && (
            <MedicalFormPreview
              refreshPreview={refreshPreview}
              closePreviewDialog={closePreviewDialog}
            />
          )}
        </TabPane>
        <TabPane
          tab={
            <span className={styles.tabName}>
              <EyeOutlined />
              Preview
            </span>
          }
          key="2"
        >
          {/* <MedicalFormPreview refreshPreview={refreshPreview} /> */}
        </TabPane>
      </Tabs>
    </>
  )
}

export default MedicalFormBuilder
