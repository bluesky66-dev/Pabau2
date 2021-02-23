import React, { FC, useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import {
  Breadcrumb,
  Button,
  TabMenu,
  Checkbox,
  SimpleDropdown,
} from '@pabau/ui'
import { Typography, Collapse, Form, Input as AntInput, Tooltip } from 'antd'
import {
  LeftOutlined,
  CalendarOutlined,
  UserAddOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import onlineBookingBg from '../../../assets/images/online-booking-bg.png'
import onlineBookingPreviewEmpty from '../../../assets/images/online-booking-preview-empty.png'
import { ReactComponent as Palette } from '../../../assets/images/palette.svg'
import { defaultBuilderData } from '../../../assets/onlineBookingData'
import styles from './index.module.less'

const { Title } = Typography
const { Panel } = Collapse

export interface OnlineBookingBuilderSetting {
  title: string
  type: string
  checked?: boolean
  value?: string
  tooltip?: string
  items?: Array<string>
  advanced?: boolean
}

export interface OnlineBookingBuilder {
  apperance: OnlineBookingBuilderSetting[]
  booking: OnlineBookingBuilderSetting[]
  registration: OnlineBookingBuilderSetting[]
}

export interface OnlineBookingProps {
  builderSetting: OnlineBookingBuilder
}

export const Index: FC<OnlineBookingProps> = ({
  builderSetting = defaultBuilderData,
}) => {
  const isMobile = useMedia('(max-width: 767px)', false)
  const [getStarted, setGetStarted] = useState(false)
  const [builder, setBuilder] = useState<OnlineBookingBuilder>(
    defaultBuilderData
  )

  useEffect(() => {
    setBuilder(builderSetting)
  }, [builderSetting])

  const GetStarted = () => {
    return (
      <div className={styles.getStarted}>
        <img src={onlineBookingBg} alt="" />
        <p className={styles.getStartedTitle}>Modifiy your online booking</p>
        <p className={styles.getStartedDesc}>
          Modify online booking by how it looks, takes payments, collects
          analytics and more
        </p>
        <Button type="primary" onClick={() => setGetStarted(true)}>
          Set up now
        </Button>
      </div>
    )
  }
  const Builder = ({ builder: OnlineBookingBuilder }) => {
    const [form] = Form.useForm()
    const isMdScreen = useMedia('(min-width: 992px)', false)
    const BuilderPanel = ({ builder }) => {
      const [setting, setSetting] = useState<OnlineBookingBuilder>(
        defaultBuilderData
      )
      useEffect(() => {
        setSetting(builder)
      }, [builder])
      return (
        <div className={styles.onlineBookingBuilderPanel}>
          <div className={styles.onlineBookingBuilderPanelTitle}>
            <h3>
              <Palette style={{ marginRight: '.5rem' }} />
              <span>Apperance</span>
            </h3>
            <h4>
              Customize the look and feel of your survey page, as well as
              customizing features such as displaying the clients full name or
              aninymously
            </h4>
          </div>
          <div className={styles.onlineBookingBuilderSetting}>
            {setting.apperance
              .filter((item) => item.advanced !== true)
              .map((item) => (
                <div
                  className={styles.onlineBookingBuilderSettingItem}
                  key={item.title + item.type}
                >
                  {item.type === 'checkbox' && (
                    <Checkbox defaultChecked={item?.checked}>
                      <span>{item.title}</span>
                      {item.tooltip && (
                        <Tooltip placement="top" title={item.tooltip}>
                          <QuestionCircleOutlined
                            style={{ marginLeft: '8px' }}
                          />
                        </Tooltip>
                      )}
                    </Checkbox>
                  )}
                  {item.type === 'dropdown' && (
                    <SimpleDropdown
                      label={item.title}
                      dropdownItems={item?.items}
                      value={item?.value}
                      tooltip={item?.tooltip}
                      onSelected={(val) => val}
                    />
                  )}
                  {item.type === 'textfield' && (
                    <Form form={form} layout="vertical">
                      <Form.Item label={item.title} tooltip={item?.tooltip}>
                        <AntInput.TextArea
                          rows={4}
                          placeholder="E.g. lorem ipsum"
                        />
                      </Form.Item>
                    </Form>
                  )}
                </div>
              ))}
            <Collapse defaultActiveKey={['advanced']} ghost>
              <Panel header="Advanced settings" key="advanced">
                {setting.apperance
                  .filter((item) => item.advanced === true)
                  .map((item) => (
                    <div
                      className={styles.onlineBookingBuilderSettingItem}
                      key={item.title + item.type}
                    >
                      {item.type === 'checkbox' && (
                        <Checkbox defaultChecked={item?.checked}>
                          <span>{item.title}</span>
                          {item.tooltip && (
                            <Tooltip placement="top" title={item.tooltip}>
                              <QuestionCircleOutlined
                                style={{ marginLeft: '8px' }}
                              />
                            </Tooltip>
                          )}
                        </Checkbox>
                      )}
                      {item.type === 'dropdown' && (
                        <SimpleDropdown
                          label={item.title}
                          dropdownItems={item?.items}
                          value={item?.value}
                          tooltip={item?.tooltip}
                          onSelected={(val) => val}
                        />
                      )}
                      {item.type === 'textfield' && (
                        <Form form={form} layout="vertical">
                          <Form.Item label={item.title} tooltip={item?.tooltip}>
                            <AntInput.TextArea
                              rows={4}
                              placeholder="E.g. lorem ipsum"
                            />
                          </Form.Item>
                        </Form>
                      )}
                    </div>
                  ))}
              </Panel>
            </Collapse>
          </div>
          <div className={styles.onlineBookingBuilderPanelTitle}>
            <h3>
              <CalendarOutlined
                style={{ marginRight: '.5rem', color: 'var(--primary-color)' }}
              />
              <span>Booking</span>
            </h3>
            <h4>
              Your business name is displayed across many areas including on
              your online booking profile, sales invoices and messages to
              clients
            </h4>
          </div>
          <div className={styles.onlineBookingBuilderSetting}>
            {setting.booking
              .filter((item) => item.advanced !== true)
              .map((item) => (
                <div
                  className={styles.onlineBookingBuilderSettingItem}
                  key={item.title + item.type}
                >
                  {item.type === 'checkbox' && (
                    <Checkbox defaultChecked={item?.checked}>
                      <span>{item.title}</span>
                      {item.tooltip && (
                        <Tooltip placement="top" title={item.tooltip}>
                          <QuestionCircleOutlined
                            style={{ marginLeft: '8px' }}
                          />
                        </Tooltip>
                      )}
                    </Checkbox>
                  )}
                  {item.type === 'dropdown' && (
                    <SimpleDropdown
                      label={item.title}
                      dropdownItems={item?.items}
                      value={item?.value}
                      tooltip={item?.tooltip}
                      onSelected={(val) => val}
                    />
                  )}
                  {item.type === 'textfield' && (
                    <Form form={form} layout="vertical">
                      <Form.Item label={item.title} tooltip={item?.tooltip}>
                        <AntInput.TextArea
                          rows={4}
                          placeholder="E.g. lorem ipsum"
                        />
                      </Form.Item>
                    </Form>
                  )}
                </div>
              ))}
            <Collapse defaultActiveKey={['advanced']} ghost>
              <Panel header="Advanced settings" key="advanced">
                {setting.booking
                  .filter((item) => item.advanced === true)
                  .map((item) => (
                    <div
                      className={styles.onlineBookingBuilderSettingItem}
                      key={item.title + item.type}
                    >
                      {item.type === 'checkbox' && (
                        <Checkbox defaultChecked={item?.checked}>
                          <span>{item.title}</span>
                          {item.tooltip && (
                            <Tooltip placement="top" title={item.tooltip}>
                              <QuestionCircleOutlined
                                style={{ marginLeft: '8px' }}
                              />
                            </Tooltip>
                          )}
                        </Checkbox>
                      )}
                      {item.type === 'dropdown' && (
                        <SimpleDropdown
                          label={item.title}
                          dropdownItems={item?.items}
                          value={item?.value}
                          tooltip={item?.tooltip}
                          onSelected={(val) => val}
                        />
                      )}
                      {item.type === 'textfield' && (
                        <Form form={form} layout="vertical">
                          <Form.Item label={item.title} tooltip={item?.tooltip}>
                            <AntInput.TextArea
                              rows={4}
                              placeholder="E.g. lorem ipsum"
                            />
                          </Form.Item>
                        </Form>
                      )}
                    </div>
                  ))}
              </Panel>
            </Collapse>
          </div>
          <div className={styles.onlineBookingBuilderPanelTitle}>
            <h3>
              <UserAddOutlined
                style={{ marginRight: '.5rem', color: 'var(--primary-color)' }}
              />
              <span>Registration</span>
            </h3>
            <h4>
              Customize the registration process of your online booking system
            </h4>
          </div>
          <div className={styles.onlineBookingBuilderSetting}>
            {setting.registration.map((item) => (
              <div
                className={styles.onlineBookingBuilderSettingItem}
                key={item.title + item.type}
              >
                {item.type === 'checkbox' && (
                  <Checkbox defaultChecked={item?.checked}>
                    <span>{item.title}</span>
                    {item.tooltip && (
                      <Tooltip placement="top" title={item.tooltip}>
                        <QuestionCircleOutlined style={{ marginLeft: '8px' }} />
                      </Tooltip>
                    )}
                  </Checkbox>
                )}
                {item.type === 'dropdown' && (
                  <SimpleDropdown
                    label={item.title}
                    dropdownItems={item?.items}
                    value={item?.value}
                    tooltip={item?.tooltip}
                    onSelected={(val) => val}
                  />
                )}
                {item.type === 'textfield' && (
                  <Form form={form} layout="vertical">
                    <Form.Item label={item.title} tooltip={item?.tooltip}>
                      <AntInput.TextArea
                        rows={4}
                        placeholder="E.g. lorem ipsum"
                      />
                    </Form.Item>
                  </Form>
                )}
              </div>
            ))}
          </div>
        </div>
      )
    }
    const PreviewPanel = () => {
      return (
        <div className={styles.onlineBookingPreviewPanel}>
          <img src={onlineBookingPreviewEmpty} alt="" width="100%" />
        </div>
      )
    }
    return (
      <div className={styles.onlineBookingBuilder}>
        {isMdScreen && (
          <div className={styles.onlineBookingBuilderMdScreen}>
            <div>
              <h2>Builder</h2>
              <BuilderPanel builder={builder} />
            </div>
            <div>
              <h2>Preview</h2>
              <PreviewPanel />
            </div>
          </div>
        )}
        {!isMdScreen && (
          <TabMenu
            menuItems={['BUILDER', 'PREVIEW']}
            tabPosition="top"
            minHeight="1px"
          >
            <BuilderPanel builder={builder} />
            <PreviewPanel />
          </TabMenu>
        )}
      </div>
    )
  }
  return (
    <>
      <CommonHeader />
      <Layout>
        <div className={styles.onlineBookingContainer}>
          <div className={styles.onlineBookingHeader}>
            {!isMobile && (
              <>
                <Breadcrumb
                  breadcrumbItems={[
                    { breadcrumbName: 'Setup', path: '/setup' },
                    {
                      breadcrumbName: 'Online Booking',
                      path: '/setup/online-booking',
                    },
                  ]}
                />
                <Title>Online Booking</Title>
              </>
            )}
            {isMobile && (
              <Title>
                <LeftOutlined /> Online Booking
              </Title>
            )}
          </div>
          <div className={styles.onlineBookingBody}>
            {!getStarted && <GetStarted />}
            {getStarted && (
              <TabMenu
                menuItems={['Builder', 'Payment', 'Analytics', 'Promote']}
                tabPosition="top"
                minHeight="1px"
              >
                <Builder builder={builder} />
                <div>2</div>
                <div>3</div>
                <div>4</div>
              </TabMenu>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
