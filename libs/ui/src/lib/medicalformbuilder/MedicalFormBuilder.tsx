import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormEdit from './MedicalFormEdit'
import MedicalFormInfo from './MedicalFormInfo'
import MedicalFormPreview from './MedicalFormPreview'
import MedicalFormPreviewOld from './MedicalFormPreviewOld'
import MedicalFormSetting from './MedicalFormSetting'

const { TabPane } = Tabs

const MedicalFormBuilder: FC = () => {
  return (
    <>
      <MedicalFormInfo formName="IPL Treatment Record (Clone)" />
      <MedicalFormSetting />
      <Tabs defaultActiveKey="1" centered className={styles.medicalFormMain}>
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
          <MedicalFormEdit />
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
          <MedicalFormPreview />
        </TabPane>
        <TabPane
          tab={
            <span className={styles.tabName}>
              <EyeOutlined />
              Preview for pabau1.0
            </span>
          }
          key="3"
        >
          <MedicalFormPreviewOld />
        </TabPane>
      </Tabs>
    </>
  )
}

export default MedicalFormBuilder
