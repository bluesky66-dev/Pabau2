import React, { FC, useState, useEffect } from 'react'
import {
  Collapse,
  Checkbox,
  Row,
  Col,
  Tabs,
  Select,
  Input,
  Button,
  Popover,
  Dropdown
} from 'antd'
import { ClientLanguage } from '@pabau/ui'
import styles from './PabauCareStandard.module.less'
import { PabauPlus } from '../badge/Badge'
import product1 from './../../assets/images/product1.png'
import RectangleAfter from './../../assets/images/RectangleAfter.png'
import RectangleBefore from './../../assets/images/RectangleBefore.png'

export interface PabauCareStandardProps {
  enableReminder: boolean
  onEnableReminder: (boolean) => void
  smartDelivery: boolean
  onSmartDelivery: (boolean) => void
  requestConfirmation: boolean
  onRequestConfirmation: (boolean) => void
  allowRescheduling: boolean
  onAllowRescheduling: (boolean) => void
  allowCancellation: boolean
  onAllowCancellation: (boolean) => void
  displayPolicy: boolean
  onDisplayPolicy: (boolean) => void
  showService: boolean
  onShowService: (boolean) => void
  showEmployeeName: boolean
  onShowEmployeeName: (boolean) => void
  addMedicalHisButton: boolean
  onAddMedicalHisButton: (boolean) => void
  backGroundColor: string
  onBackGroundColor: (string) => void
  buttonColor: string
  onButtonColor: (string) => void
  selectLanguage: string
  onSelectLanguage: (string) => void
  medicalMessage: string
  onMedicalMessage: (string) => void
  informationMessage: string
  onInformationMessage: (string) => void
  onStandardTabChanged: (string) => void
  hideAppearanceTabPane: boolean
  smsMessage: string
  onSmsMessage: (string) => void
  onActiveSocialIcon: (value: string[]) => void
  disableCustomTab: boolean
  careName?: string
  service?: string
}

const { TabPane } = Tabs
const { Panel } = Collapse
const { Option } = Select
const { TextArea } = Input

export const PabauCareStandard: FC<PabauCareStandardProps> = ({
  enableReminder,
  onEnableReminder,
  smartDelivery,
  onSmartDelivery,
  requestConfirmation,
  onRequestConfirmation,
  allowRescheduling,
  onAllowRescheduling,
  allowCancellation,
  onAllowCancellation,
  displayPolicy,
  onDisplayPolicy,
  showService,
  onShowService,
  showEmployeeName,
  onShowEmployeeName,
  addMedicalHisButton,
  onAddMedicalHisButton,
  backGroundColor,
  onBackGroundColor,
  buttonColor,
  onButtonColor,
  selectLanguage,
  onSelectLanguage,
  medicalMessage,
  onMedicalMessage,
  informationMessage,
  onInformationMessage,
  onStandardTabChanged,
  hideAppearanceTabPane,
  smsMessage,
  onSmsMessage,
  onActiveSocialIcon,
  disableCustomTab,
  careName,
  service
  }) => {
  function callback(key) {
    onStandardTabChanged(key)
  }

  const size = useWindowSize()
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
      width: 0,
      height: 0,
    })

    useEffect(() => {
      // Handler to call on window resize
      function handleResize() {
        // Set window width/height to state
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        })
      }

      // Add event listener
      window.addEventListener('resize', handleResize)

      // Call handler right away so state gets updated with initial window size
      handleResize()

      // Remove event listener on cleanup
      return () => window.removeEventListener('resize', handleResize)
    }, []) // Empty array ensures that effect is only run on mount

    return windowSize
  }
  const popoverContent = (
    <div>
      <p>You have not setup a link for this particular social network</p>
    </div>
  )
  return (
    <Row className={styles.tabsAlign}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Standard" key="1">
          <div className={styles.largeWrapper} >
            <div className={styles.headerSidebar}>
              <Row>
                <span className={styles.reminder}>
                  Care Name *
                </span>
              </Row>
              <Row>
                <Input placeholder={'IPL Treatment Record (clone)'} value={careName} />
              </Row>
            </div>
            <div className={styles.headerSidebar}>
              <Row>
                <span className={styles.reminder}>
                  Which service should this form be used be?
                </span>
              </Row>
              <Row>
                <Input placeholder={'Which service should this form be used be?'} value={service} />
              </Row>
            </div>
            <div className={styles.headerSidebar}>
              <Row>
                <span className={styles.sendText}>
                  When shoud  this care be sent? *
                </span>
              </Row>
              <Row>
                <span className={styles.reminder}>
                  <img
                    height="104"
                    alt="RectangleBefore"
                    src={RectangleBefore}
                  />
                  <img
                    height="104"
                    alt="RectangleAfter"
                    src={RectangleAfter}
                  />
                </span>
              </Row>
            </div>
            <div className={styles.dayOff}>
              <Row>
                <span className={styles.colText}>
                  To be sent &nbsp;
                </span>
                <Select defaultValue="Immediately" >
                  <Option value="Immediately">Immediately</Option>
                  <Option value="2days">2 days</Option>
                  <Option value="3days">3 days</Option>
                  <Option value="4days">4 days</Option>
                </Select>
                <span className={styles.colText}>
                  &nbsp; after
                </span>
              </Row>
            </div>
            <>
              <Row align="middle" className={styles.customCheck}>
                <Checkbox
                  className={styles.checkboxStyle}
                  value="pause_default_email_confirmation_from_sending"
                >
                  Pause default email confirmation from sending
                </Checkbox>
              </Row>
              <Row align="middle" className={styles.customCheck} >
                <Checkbox
                  className={styles.checkboxStyle}
                  value="send_automatically"
                >
                  Send automatically
                </Checkbox>
              </Row>
            </>
            <Collapse
              className={styles.collapseAlignFirst}
              bordered={false}
              defaultActiveKey={['1', '2']}
              expandIconPosition="right"
              style={{ backgroundColor: 'white' }}
            >
              <Panel
                className={styles.panelAlign}
                header="Appearance"
                key="2"
              >
                <div className={styles.headerSidebar}>
                <Row>
                  <Col>
                    <span className={styles.textLabel}>
                      Choose how far in advanced your reminder notication messages are sent to clients
                    </span>
                  </Col>
                </Row>
                </div>
                <div className={styles.headerSidebar}>
                  <Row>
                    <span className={styles.reminder}>
                      Title *
                    </span>
                  </Row>
                  <Row>
                    <Input placeholder={'Hi [Name], thanks for visiting [company]'} />
                  </Row>
                </div>
                <div className={styles.headerSidebar}>
                  <Row>
                    <span className={styles.reminder}>
                      Information *
                    </span>
                  </Row>
                  <Row>
                    <span className={styles.reminder}>
                      <Input placeholder={'WYSIWYG'} />
                    </span>
                  </Row>
                  <Row className={styles.btnFile}>
                    <span>
                      <Popover placement="bottomLeft" content={popoverContent} trigger="hover">
                        <Button>Attach</Button>
                      </Popover>
                    </span>
                  </Row>
                </div>
                <>
                  <Row>
                    <Checkbox
                      className={styles.checkboxStyle}
                      value="allow_client_to_send_in_photo"
                    >
                      Allow client to send in photo
                    </Checkbox>
                  </Row>
                </>
                <div className={styles.headerSidebar}>
                  <Row>
                    <span className={styles.productTitle}>
                      What products go well with Botox 1 Area?
                    </span>
                  </Row>
                  <Row>
                    <img
                      height="104"
                      alt="product1"
                      src={product1}
                    />
                  </Row>
                </div>
              </Panel>
            </Collapse>
            <Collapse
              className={styles.collapseAlignFirst}
              bordered={false}
              defaultActiveKey={['1', '2']}
              expandIconPosition="right"
              style={{ backgroundColor: 'white' }}
            >
              <div className={styles.clientLang}>
                <div className={styles.papauPlusContainer}>
                  <PabauPlus label="Plus" />
                </div>
              </div>
              <Panel
                className={styles.panelAlign}
                header="Client languages"
                key="4"
              >
                <Row className={styles.searchPanel}>
                  <Col>
                    <span className={styles.reminder}>
                      Setup templates in your clients preferred language
                    </span>
                  </Col>
                </Row>
                <Row className={styles.clientLangLogo}>
                  <ClientLanguage
                    selectLanguageHook={[selectLanguage, onSelectLanguage]}
                    defaultLanguage="EN"
                    isClickable={false}
                    isHover={true}
                  />
                </Row>
              </Panel>
            </Collapse>
          </div>
        </TabPane>
        {!disableCustomTab && (
          <TabPane tab="Custom" key="2">
            <div style={{ padding: '10px 9px' }}>
              <Row style={{ padding: '0 15px' }}>
                <span className={styles.line1}>
                  Design or upload your own custom email from your
                </span>
              </Row>
            </div>
          </TabPane>
        )}
      </Tabs>
    </Row>
  )
}

export default PabauCareStandard
