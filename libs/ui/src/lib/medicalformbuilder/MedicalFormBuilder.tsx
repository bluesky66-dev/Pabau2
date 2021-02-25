import { EditOutlined, EyeOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'
import MedicalFormEdit from './MedicalFormEdit'
import MedicalFormInfo from './MedicalFormInfo'
import { PreviewData } from './MedicalFormInterface'
import MedicalFormPreview from './MedicalFormPreview'
import MedicalFormSetting from './MedicalFormSetting'

const { TabPane } = Tabs

const MedicalFormBuilder: FC<PreviewData> = ({ previewData }) => {
  return (
    <div className={styles.medicalFormBody}>
      <MedicalFormInfo formName="IPL Treatment Record (Clone)" />
      <MedicalFormSetting />
      <Tabs defaultActiveKey="1" centered className={styles.medicalFormMainTab}>
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
          <MedicalFormEdit previewData={previewData} />
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
      </Tabs>
    </div>
  )
}

export default MedicalFormBuilder
