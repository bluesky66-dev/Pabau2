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
}

const { TabPane } = Tabs
const { Panel } = Collapse
const { Option } = Select
const { TextArea } = Input

export const Standard: FC<P> = ({
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
              <span>
                This notification automatically sends to clients the moment
                their appointment is booked.
                <span className={styles.anchor}>
                  <Button type="link">Learn more</Button>
                </span>
              </span>
            </Row>
            <Collapse
              className={styles.collapseAlignFirst}
              bordered={false}
              defaultActiveKey={['1', '2', '3']}
              expandIconPosition="right"
              style={{ backgroundColor: 'white' }}
            >
              <Panel
                className={styles.panelAlign}
                header="Reminder timeframe"
                key="1"
              >
                <Row>
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="enable_reminder"
                    checked={enableReminder}
                    onChange={() => onEnableReminder(!enableReminder)}
                  >
                    Enable reminders via email
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="enable_reminder"
                    checked={enableReminder}
                    onChange={() => onEnableReminder(!enableReminder)}
                  >
                    Enable reminders via sms
                  </Checkbox>
                </Row>
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
                    Choose how far in advance your reminder notification
                    messages are sent to clients
                  </Col>
                </Row>
                <Row>
                  <Col>Reminder advance notice</Col>
                </Row>
                <Select defaultValue="24" style={{ width: '100%' }}>
                  <Option value="24">24 hours</Option>
                  <Option value="12">12 hours</Option>
                  <Option value="6">6 hours</Option>
                </Select>

                {!hideAppearanceTabPane && (
                  <>
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
                  </>
                )}
              </Panel>
              {hideAppearanceTabPane && (
                <Panel
                  className={styles.panelAlign}
                  header="Appearance"
                  key="2"
                >
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
                        <span className={styles.textareaLabel}>
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
                  <ColorPicker
                    heading="Background color"
                    onSelected={(val) => onBackGroundColor(val)}
                    defaultColor="#ffffff"
                  />
                  <ColorPicker
                    heading="Buttons color"
                    onSelected={(val) => onButtonColor(val)}
                    defaultColor="#54b2d3"
                  />
                  <Row>
                    <span className={styles.textareaLabel}>Information</span>
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
              <div className={styles.papauPlusContainer}>
                <PabauPlus label="Plus" />
              </div>
              <Panel
                className={styles.panelAlign}
                header="Client languages"
                key="4"
              >
                <Row>
                  <Col>Setup templates in your clients preferred language</Col>
                </Row>
                <Row>
                  <ClientLanguage
                    selectLanguageHook={[selectLanguage, onSelectLanguage]}
                    defaultLanguage="EN"
                  />
                </Row>
              </Panel>
            </Collapse>
          </div>
        </TabPane>
        <TabPane tab="Custom" key="2">
          <div style={{ padding: '10px 9px' }}>
            <Row style={{ padding: '0 15px' }}>
              <span>
                Design or upload your own custom email from your
                <span className={styles.anchor}>
                  <Button type="link">message templates</Button>
                </span>
              </span>
            </Row>
            <Row style={{ padding: '0 15px' }}>
              <Col>Reminder advance notice</Col>
            </Row>

            <Row style={{ padding: '0 15px' }}>
              <Select defaultValue="24" style={{ width: '100%' }}>
                <Option value="24">24 hours</Option>
                <Option value="12">12 hours</Option>
                <Option value="6">6 hours</Option>
              </Select>
            </Row>

            <div className={styles.papauPlusContainer}>
              <PabauPlus label="Plus" />
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
                  <Col>Setup templates in your clients preferred language</Col>
                </Row>
                <Row>
                  <ClientLanguage
                    selectLanguageHook={[selectLanguage, onSelectLanguage]}
                    defaultLanguage="EN"
                  />
                </Row>
              </Panel>
            </Collapse>
          </div>
        </TabPane>
      </Tabs>
    </Row>
  )
}

export default Standard
