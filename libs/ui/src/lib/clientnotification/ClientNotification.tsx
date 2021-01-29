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
              <div className={styles.tabPane1Content}>
                <p>
                  <strong>Note:</strong> The -webkit-scrollbar is not supported
                  in Firefox or in Edge, prior version 79.
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
                <p>
                  Lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
                  lorem ipsum lorem ipsum{' '}
                </p>
              </div>
            </TabPane>
            <TabPane tab="Custom" key="2">
              <div className={styles.tabPane2Content}>
                <span>
                  <strong>Note:</strong> The -webkit-scrollbar is not supported
                  in Firefox or in Edge, prior version 79.
                </span>
                <span>
                  The particularly nice bit here is that the scrollbar is on the
                  body element, yet the scrollbar isn’t stuck to the top,
                  bottom, or right edge of the browser window as scroll bars
                  normally are. I made a test page with copy-and-pasteable code
                  to achieve that a similar effect: View Demo On Forrst, they
                  use custom scollbars on code snippets which are also pretty
                  nice. They are less visually intense and so don’t fight as
                  much with the code highlighting.On Forrst, they use custom
                  scollbars on code snippets which are also pretty nice. They
                  are less visually intense and so don’t fight as much with the
                  code highlighting.On Forrst, they use custom scollbars on code
                  snippets which are also pretty nice. They are less visually
                  intense and so don’t fight as much with the code
                  highlighting.On Forrst, they use custom scollbars on code
                  snippets which are also pretty nice. They are less visually
                  intense and so don’t fight as much with the code highlighting.
                </span>
              </div>
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
