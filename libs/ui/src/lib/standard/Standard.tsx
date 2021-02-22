import React, { FC } from 'react'
import {
  Collapse,
  Checkbox,
  Row,
  Col,
  Tabs,
  Select,
  Input,
  Tooltip,
  Button,
} from 'antd'
import {
  InstagramOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import { QuestionCircleOutlined } from '@ant-design/icons'
import { ColorPicker, ClientLanguage, SocialMediaCheckbox } from '@pabau/ui'
import styles from './Standard.module.less'
import { PabauPlus } from '../badge/Badge'

interface P {
  enableReminder: boolean
  onEnableReminder: (boolean) => void
  standardMessage?: string
  hideReminderTimeFrameTabPane?: boolean
  smartDelivery: boolean
  onSmartDelivery: (boolean) => void
  requestConfirmation: boolean
  onRequestConfirmation: (boolean) => void
  hideRequestConfirmationOption?: boolean
  allowRescheduling: boolean
  onAllowRescheduling: (boolean) => void
  hideAllowReschedulingOption?: boolean
  allowCancellation: boolean
  onAllowCancellation: (boolean) => void
  hideAllowCancellationOption?: boolean
  displayPolicy: boolean
  onDisplayPolicy: (boolean) => void
  hideDisplayPolicyOption?: boolean
  showService: boolean
  onShowService: (boolean) => void
  showEmployeeName: boolean
  onShowEmployeeName: (boolean) => void
  addMedicalHisButton: boolean
  onAddMedicalHisButton: (boolean) => void
  hideMedicalHistoryOption?: boolean
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
}

const { TabPane } = Tabs
const { Panel } = Collapse
const { Option } = Select
const { TextArea } = Input

export const Standard: FC<P> = ({
  enableReminder,
  onEnableReminder,
  standardMessage,
  smartDelivery,
  onSmartDelivery,
  hideReminderTimeFrameTabPane = false,
  requestConfirmation,
  onRequestConfirmation,
  hideRequestConfirmationOption = false,
  allowRescheduling,
  onAllowRescheduling,
  hideAllowReschedulingOption = false,
  allowCancellation,
  onAllowCancellation,
  hideAllowCancellationOption = false,
  displayPolicy,
  onDisplayPolicy,
  hideDisplayPolicyOption = false,
  showService,
  onShowService,
  showEmployeeName,
  onShowEmployeeName,
  addMedicalHisButton,
  onAddMedicalHisButton,
  hideMedicalHistoryOption = false,
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
}) => {
  function callback(key) {
    onStandardTabChanged(key)
  }

  const size = useWindowSize()
  function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = React.useState({
      width: 0,
      height: 0,
    })

    React.useEffect(() => {
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

  return (
    <Row className={styles.tabsAlign}>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Standard" key="1">
          <div style={{ padding: '10px 9px' }}>
            <Row style={{ padding: '0 15px' }}>
              <span className={styles.line1}>
                {standardMessage ||
                  'This notification automatically sends to clients the moment their appointment is booked.'}
                {/* <span className={styles.anchor}>
                  <Button type="link">Learn more</Button>
                </span> */}
              </span>
            </Row>
            <Collapse
              className={styles.collapseAlignFirst}
              bordered={false}
              defaultActiveKey={['1', '2']}
              expandIconPosition="right"
              style={{ backgroundColor: 'white' }}
            >
              {!hideReminderTimeFrameTabPane && (
                <Panel
                  className={styles.panelAlign}
                  header="Reminder timeframe"
                  key="1"
                >
                  <>
                    <Row align="middle">
                      <Checkbox
                        className={styles.checkboxStyle}
                        value="smart_delivery"
                        checked={smartDelivery}
                        onChange={() => onSmartDelivery(!smartDelivery)}
                      >
                        Smart delivery
                      </Checkbox>
                      <Tooltip
                        placement="topLeft"
                        color="#595959"
                        title={`"We will intelligently schedule additional confirmations to clients who have a history of forgetting"`}
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </Row>
                    <Row gutter={[0, 16]}>
                      <Col>
                        <span className={styles.line1}>
                          Choose how far in advance your reminder notification
                          messages are sent to clients
                        </span>
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <span className={styles.reminder}>
                          Reminder advance notice
                        </span>
                      </Col>
                    </Row>
                    <Select defaultValue="48" style={{ width: '100%' }}>
                      <Option value="48">48 hours</Option>
                      <Option value="24">24 hours</Option>
                      <Option value="12">12 hours</Option>
                      <Option value="6">6 hours</Option>
                    </Select>
                  </>
                </Panel>
              )}
              {!hideAppearanceTabPane && (
                <div
                  className={`${styles.panelAlign} ${styles.messageSection}`}
                >
                  <Row>
                    <span className={styles.textareaLabel}>Message</span>
                  </Row>
                  <Row>
                    <TextArea
                      className={styles.textareaStyle}
                      autoSize={{ minRows: 3, maxRows: 3 }}
                      onChange={(event) => onSmsMessage(event.target.value)}
                      maxLength={size.width > 768 ? 500 : 160}
                      value={smsMessage}
                    />
                  </Row>
                </div>
              )}
              {hideAppearanceTabPane && (
                <Panel
                  className={styles.panelAlign}
                  header="Appearance"
                  key="2"
                >
                  {!hideRequestConfirmationOption && (
                    <Row align="middle">
                      <Checkbox
                        className={styles.checkboxStyle}
                        value="request_confirmation"
                        checked={requestConfirmation}
                        onChange={() =>
                          onRequestConfirmation(!requestConfirmation)
                        }
                      >
                        Request confirmation
                      </Checkbox>
                      <Tooltip
                        placement="topLeft"
                        color="#595959"
                        title={`"We will intelligently schedule additional confirmations to clients who have a history of forgetting"`}
                      >
                        <QuestionCircleOutlined />
                      </Tooltip>
                    </Row>
                  )}
                  {!hideAllowReschedulingOption && (
                    <Row>
                      <Checkbox
                        className={styles.checkboxStyle}
                        value="allow_reschedule"
                        checked={allowRescheduling}
                        onChange={() => onAllowRescheduling(!allowRescheduling)}
                      >
                        Allow rescheduling
                      </Checkbox>
                    </Row>
                  )}
                  {!hideAllowCancellationOption && (
                    <Row>
                      <Checkbox
                        className={styles.checkboxStyle}
                        value="allow_cancellation"
                        checked={allowCancellation}
                        onChange={() => onAllowCancellation(!allowCancellation)}
                      >
                        Allow cancellation
                      </Checkbox>
                    </Row>
                  )}
                  {!hideDisplayPolicyOption && (
                    <Row>
                      <Checkbox
                        className={styles.checkboxStyle}
                        value="display_policy"
                        checked={displayPolicy}
                        onChange={() => onDisplayPolicy(!displayPolicy)}
                      >
                        Display policy
                      </Checkbox>
                    </Row>
                  )}
                  <Row>
                    <Checkbox
                      className={styles.checkboxStyle}
                      value="show_service"
                      checked={showService}
                      onChange={() => onShowService(!showService)}
                    >
                      Show service
                    </Checkbox>
                  </Row>
                  <Row>
                    <Checkbox
                      className={styles.checkboxStyle}
                      value="show_employee_name"
                      checked={showEmployeeName}
                      onChange={() => onShowEmployeeName(!showEmployeeName)}
                    >
                      Show employee name
                    </Checkbox>
                  </Row>
                  {!hideMedicalHistoryOption && (
                    <>
                      <Row>
                        <span className={styles.separateText}>
                          Medical History settings
                        </span>
                      </Row>
                      <Row>
                        <Checkbox
                          className={styles.checkboxStyle}
                          value="add_his_button"
                          checked={addMedicalHisButton}
                          onChange={() =>
                            onAddMedicalHisButton(!addMedicalHisButton)
                          }
                        >
                          Add Medical History button
                        </Checkbox>
                      </Row>
                      <div className={styles.hidesection}>
                        {addMedicalHisButton && (
                          <>
                            <Row>
                              <Checkbox
                                className={styles.checkboxStyle}
                                value="hide_his_completed"
                              >
                                Hide if history is already completed
                              </Checkbox>
                            </Row>
                            <Row>
                              <span className={styles.reminder}>
                                Medical History message
                              </span>
                            </Row>
                            <Row>
                              <TextArea
                                className={styles.textareaStyle}
                                autoSize={{ minRows: 3, maxRows: 3 }}
                                maxLength={size.width > 768 ? 500 : 160}
                                onChange={(event) =>
                                  onMedicalMessage(event.target.value)
                                }
                              />
                            </Row>
                          </>
                        )}
                      </div>
                    </>
                  )}
                  <ColorPicker
                    heading="Background color"
                    onSelected={(val) => onBackGroundColor(val)}
                    selectedColor=""
                  />
                  <ColorPicker
                    heading="Buttons color"
                    onSelected={(val) => onButtonColor(val)}
                    selectedColor=""
                  />
                  <Row className={styles.informText}>
                    <span className={styles.reminder}>Information</span>
                  </Row>
                  <Row>
                    <TextArea
                      className={styles.textareaStyle}
                      placeholder="e.g. Special offer"
                      autoSize={{ minRows: 3, maxRows: 3 }}
                      maxLength={size.width > 768 ? 500 : 160}
                      onChange={(event) =>
                        onInformationMessage(event.target.value)
                      }
                    />
                  </Row>
                </Panel>
              )}

              {hideAppearanceTabPane && (
                <Panel
                  className={styles.panelAlign}
                  header="Social media icons"
                  key="3"
                >
                  <Row>
                    <SocialMediaCheckbox
                      mediaIcon={[
                        {
                          label: 'facebook',
                          link: 'www.facebook.com',
                          icon: <FacebookOutlined />,
                        },
                        {
                          label: 'linksIn',
                          link: 'www.linkin.com',
                          icon: <LinkedinOutlined />,
                        },
                        {
                          label: 'instagram',
                          link: 'www.instagram.com',
                          icon: <InstagramOutlined />,
                        },
                        {
                          label: 'twitter',
                          link: 'null',
                          icon: <TwitterOutlined />,
                        },
                      ]}
                      onClick={(values) => {
                        onActiveSocialIcon(values)
                      }}
                    />
                  </Row>
                </Panel>
              )}
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
                <Row>
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
                  <span className={styles.anchor}>
                    <Button type="link">message templates</Button>
                  </span>
                </span>
              </Row>
              {!hideReminderTimeFrameTabPane && (
                <>
                  <Row style={{ padding: '0 15px' }}>
                    <Col>
                      <span className={styles.reminder}>
                        Reminder advance notice
                      </span>
                    </Col>
                  </Row>

                  <Row style={{ padding: '0 15px' }}>
                    <Select defaultValue="48" style={{ width: '100%' }}>
                      <Option value="48">48 hours</Option>
                      <Option value="24">24 hours</Option>
                      <Option value="12">12 hours</Option>
                      <Option value="6">6 hours</Option>
                    </Select>
                  </Row>
                </>
              )}
              <div className={styles.clientLang}>
                <div className={styles.papauPlusContainer}>
                  <PabauPlus label="Plus" />
                </div>
              </div>

              <Collapse
                className={styles.collapseAlignFirst}
                bordered={false}
                defaultActiveKey={['1']}
                expandIconPosition="right"
                style={{ backgroundColor: 'white' }}
              >
                <Panel
                  className={styles.panelAlign}
                  header="Client languages"
                  key="1"
                >
                  <Row>
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
                      isClickable={true}
                      isHover={false}
                    />
                  </Row>
                </Panel>
              </Collapse>
            </div>
          </TabPane>
        )}
      </Tabs>
    </Row>
  )
}

export default Standard
