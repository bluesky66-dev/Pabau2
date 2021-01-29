import React, { FC, useState } from 'react'
import { Radio, Tabs } from 'antd'
import styles from './ClientNotification.module.less'
import ClientLanguage from '../clientlanguage/ClientLanguage'

interface P {
  tabComponent?: React.ReactNode
  previewComponent?: React.ReactNode
}

export const ClientNotification: FC<P> = ({
  tabComponent,
  previewComponent,
}) => {
  const { TabPane } = Tabs

  function callback(key) {
    console.log(key)
  }

  const [selectLanguage, SetSelectLanguage] = useState('')

  return (
    <div className={styles.notificationPage}>
      <div className={styles.builderColumn}>
        <div className={styles.headerStyle}>
          <div className={styles.medium14Gray}>
            <span className={styles.titleMargin}>BUILDER</span>
          </div>
        </div>
        <div>
          <Tabs
            className={styles.customTab}
            defaultActiveKey="1"
            onChange={callback}
          >
            <TabPane tab="Standard" key="1">
              <div className={styles.tabPane1Content}>Here is Child1</div>
            </TabPane>
            <TabPane tab="Custom" key="2">
              <div className={styles.tabPane2Content}>Here is Child1</div>
            </TabPane>
          </Tabs>
        </div>
        <div className={styles.clientLanguageSection}>
          <span className={styles.bold16Black}>Clinent languages</span>
          <span className={styles.medium14Gray1}>
            Setup templates in your clients preferred language
          </span>
          <div className={styles.clientLanguageContainer}>
            <ClientLanguage
              selectLanguageHook={[selectLanguage, SetSelectLanguage]}
              defaultLanguage="EN"
            />
          </div>
          <div>{selectLanguage}</div>
        </div>
        {/* <div className={styles.tabsAlign}>{tabComponent}</div> */}
      </div>
      <div className={styles.previewColumn}>
        <div className={styles.headerStyle}>
          <div className={styles.medium14Gray}>PREVIEW</div>
        </div>
        <div className={styles.previewButtonGroup}>
          <Radio.Group defaultValue="a" buttonStyle="solid">
            <Radio.Button className={styles.radioLeftButton} value="a">
              Email
            </Radio.Button>
            <Radio.Button className={styles.radioRightButton} value="b">
              SMS Text
            </Radio.Button>
          </Radio.Group>
        </div>
        <div className={styles.appointmentContainer}>
          <div className={styles.appointmentContent}></div>
        </div>
      </div>
    </div>
  )
}

export default ClientNotification
