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
import { QuestionCircleOutlined } from '@ant-design/icons'
import { ColorPicker, ClientLanguage } from '@pabau/ui'
import styles from './Standard.module.less'
import { PabauPlus } from '../badge/Badge'

interface P {
  requestConfirmHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  allowReschedulingHook: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
  allowCancellationHook: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
  displayPolicyHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  showServiceHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  showEmployeeNameHook: [boolean, React.Dispatch<React.SetStateAction<boolean>>]
  addMedicalHisButtonHook: [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ]
  selectLanguageHook: [string, React.Dispatch<React.SetStateAction<string>>]
  backGroundColorHook: [string, React.Dispatch<React.SetStateAction<string>>]
  buttonColorHook: [string, React.Dispatch<React.SetStateAction<string>>]
  informationMessageHook: [string, React.Dispatch<React.SetStateAction<string>>]
  medicalMessageHook: [string, React.Dispatch<React.SetStateAction<string>>]
}

const { TabPane } = Tabs
const { Panel } = Collapse
const { Option } = Select
const { TextArea } = Input

const Standard: FC<P> = ({
  requestConfirmHook: [requestConfirmation, setRequestConfirmation],
  allowReschedulingHook: [allowRescheduling, setAllowRescheduling],
  allowCancellationHook: [allowCancellation, setAllowCancellation],
  displayPolicyHook: [displayPolicy, setDisplayPolicy],
  showServiceHook: [showService, setShowService],
  showEmployeeNameHook: [showEmployeeName, setShowEmployeeName],
  addMedicalHisButtonHook: [addMedicalHisButton, setAddMedicalHisButton],
  selectLanguageHook: [selectLanguage, setSelectLanguage],
  backGroundColorHook: [backGroundColor, setBackGroundColor],
  buttonColorHook: [buttonColor, setButtonColor],
  informationMessageHook: [informationMessage, setInformationMessage],
  medicalMessageHook: [medicalMessage, setMedicalMessage],
}) => {
  return (
    <Row className={styles.tabsAlign}>
      <Tabs>
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
                  >
                    Enable reminders via email
                  </Checkbox>
                </Row>
                <Row align="middle">
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="smart_delivery"
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
              </Panel>
              <Panel className={styles.panelAlign} header="Appearance" key="2">
                <Row align="middle">
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="request_confirmation"
                    checked={requestConfirmation}
                    onChange={() =>
                      setRequestConfirmation(!requestConfirmation)
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
                    onChange={() => setAllowRescheduling(!allowRescheduling)}
                  >
                    Allow rescheduling
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="allow_cancellation"
                    checked={allowCancellation}
                    onChange={() => setAllowCancellation(!allowCancellation)}
                  >
                    Allow cancellation
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="display_policy"
                    checked={displayPolicy}
                    onChange={() => setDisplayPolicy(!displayPolicy)}
                  >
                    Display policy
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="show_service"
                    checked={showService}
                    onChange={() => setShowService(!showService)}
                  >
                    Show service
                  </Checkbox>
                </Row>
                <Row>
                  <Checkbox
                    className={styles.checkboxStyle}
                    value="show_employee_name"
                    checked={showEmployeeName}
                    onChange={() => setShowEmployeeName(!showEmployeeName)}
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
                      setAddMedicalHisButton(!addMedicalHisButton)
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
                        onChange={(event) =>
                          setMedicalMessage(event.target.value)
                        }
                      />
                    </Row>
                  </>
                )}
                <ColorPicker
                  heading="Background color"
                  onSelected={(val) => setBackGroundColor(val)}
                />
                <ColorPicker
                  heading="Buttons color"
                  onSelected={(val) => setButtonColor(val)}
                />
                <Row>
                  <span className={styles.textareaLabel}>Information</span>
                </Row>
                <Row>
                  <TextArea
                    className={styles.textareaStyle}
                    placeholder="e.g. Special offer"
                    autoSize={{ minRows: 3, maxRows: 3 }}
                    onChange={(event) =>
                      setInformationMessage(event.target.value)
                    }
                  />
                </Row>
              </Panel>
              <div className={styles.papauPlusContainer}>
                <PabauPlus label="Plus" />
              </div>
              <Panel
                className={styles.panelAlign}
                header="Client languages"
                key="3"
              >
                <Row>
                  <Col>Setup templates in your clients preferred language</Col>
                </Row>
                <Row>
                  <ClientLanguage
                    selectLanguageHook={[selectLanguage, setSelectLanguage]}
                    defaultLanguage="EN"
                  />
                </Row>
              </Panel>
            </Collapse>
          </div>
        </TabPane>
        <TabPane tab="Custom" key="2">
          <p>
            Custom TabCustom TabCustom TabCustom TabCustom TabCustom TabCustom
            TabCustom TabCustom TabCustom TabCustom TabCustom TabCustom Tab
          </p>
        </TabPane>
      </Tabs>
    </Row>
  )
}

export default Standard
