import React, { FC, useState, useEffect } from 'react'
import { useMedia } from 'react-use'
import classNames from 'classnames'
import {
  Breadcrumb,
  Button,
  TabMenu,
  Checkbox,
  SimpleDropdown,
  Switch,
  Input,
  Badge,
} from '@pabau/ui'
import {
  Typography,
  Collapse,
  Form,
  Input as AntInput,
  Tooltip,
  Radio,
  Alert,
} from 'antd'
import {
  LeftOutlined,
  CalendarOutlined,
  UserAddOutlined,
  QuestionCircleOutlined,
  CheckCircleFilled,
  CheckOutlined,
  CopyOutlined,
} from '@ant-design/icons'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../common-header'
import onlineBookingBg from '../../../assets/images/online-booking-bg.png'
import onlineBookingPreviewEmpty from '../../../assets/images/online-booking-preview-empty.png'
import noPaymentGateway from '../../../assets/images/no-payment-gateway.png'
import { ReactComponent as Palette } from '../../../assets/images/palette.svg'
import {
  defaultBuilderData,
  paymentMethodItems,
  analyticsSettingsData,
  promoteData,
} from '../../../assets/onlineBookingData'
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
            <Collapse ghost>
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
            <Collapse ghost>
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
  const Payment = () => {
    const [viewMore, setViewMore] = useState(false)
    const [requirement, setRequirement] = useState(1)
    const [rollingDeposit, setRollingDeposit] = useState(true)
    const [defaultDeposit, setDefaultDeposit] = useState('')
    const radioStyle = {
      display: 'block',
      height: '22px',
      lineHeight: '22px',
      marginBottom: '18px',
      color: 'var(--grey-text-color)',
    }
    return (
      <div className={styles.onlineBookingPayment}>
        <div className={styles.paymentGatewayConfig}>
          <img src={noPaymentGateway} alt="" />
          <p>No payment gateways configured</p>
          <p>Configure your first payment gateway to accept online payments</p>
          <Button type="primary">Configure</Button>
        </div>
        <div className={styles.onlinePaymentTerms}>
          <p>Online payment terms</p>
          <span>
            You can charge the full amount or a deposit for online bookings.
            <br />
            You can also change these settings{' '}
            <a href="/setup/online-booking" target="_target">
              per service
            </a>
          </span>
        </div>
        <div className={styles.viewMore}>
          <Switch
            size="small"
            checked={viewMore}
            onChange={(checked) => setViewMore(checked)}
            style={{ marginRight: '8px' }}
          />
          View more
        </div>
        {viewMore && (
          <div className={styles.deposit}>
            <div className={styles.depositHeader}>Deposit</div>
            <div className={styles.depositRequirements}>
              <p>Requirements</p>
              <Radio.Group
                value={requirement}
                onChange={(e) => setRequirement(e.target.value)}
              >
                <Radio style={radioStyle} value={1}>
                  No Deposit required
                </Radio>
                <Radio style={radioStyle} value={2}>
                  Require default deposit{' '}
                  <Tooltip title="lorem ipsum">
                    <QuestionCircleOutlined
                      style={{
                        marginLeft: '8px',
                        color: 'var(--light-grey-color)',
                      }}
                    />
                  </Tooltip>
                </Radio>
                <Radio style={radioStyle} value={3}>
                  Take full payment for the service
                </Radio>
              </Radio.Group>
            </div>
            <div className={styles.depositDefault}>
              <p>Default deposit</p>
              <Input
                label="This will be over-ridden if the service has a deposit set"
                text={defaultDeposit}
                onChange={(val) => setDefaultDeposit(val)}
                placeHolderText="£0.00"
              />
            </div>
            <div className={styles.depositRolling}>
              <p>Rolling Deposit</p>
              <p>
                If the client has money on their account (min. £25.00), they
                will need to do a payment, meaning payment process is
                completelly skipped
              </p>
              <Radio.Group
                value={rollingDeposit}
                onChange={(e) => setRollingDeposit(e.target.value)}
              >
                <Radio style={radioStyle} value={true}>
                  Yes
                </Radio>
                <Radio style={radioStyle} value={false}>
                  No
                </Radio>
              </Radio.Group>
            </div>
          </div>
        )}
        {viewMore && (
          <div className={styles.paymentMethods}>
            <div className={styles.paymentMethodsHeader}>Payment Methods</div>
            <div className={styles.paymentMethodsContainer}>
              {paymentMethodItems.map((item) => (
                <React.Fragment key={item.title}>
                  {item.showInstructions === true && (
                    <div
                      className={classNames(
                        styles.paymentMethodItem,
                        styles.showInstructions
                      )}
                    >
                      <div className={styles.itemLogo}>{item.logo}</div>
                      <div className={styles.itemShowInstructions}>
                        Show instructions
                      </div>
                    </div>
                  )}
                  {item.showInstructions !== true && (
                    <div
                      className={
                        item.selected
                          ? classNames(
                              styles.paymentMethodItem,
                              styles.selectedItem
                            )
                          : styles.paymentMethodItem
                      }
                    >
                      <div className={styles.itemLogo}>{item.logo}</div>
                      <div className={styles.itemTitle}>{item.title}</div>
                      <div className={styles.selectedSymbol}>
                        <CheckCircleFilled
                          style={{ color: 'var(--primary-color)' }}
                        />
                      </div>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
  const Analytics = () => {
    const isMobile = useMedia('(max-width: 767px)', false)
    return (
      <div className={styles.onlineBookingAnalytics}>
        <div className={styles.analyticsSettings}>
          <p>Analytics settings</p>
          {analyticsSettingsData.map((setting) => (
            <div className={styles.analyticsSettingItem} key={setting.title}>
              <div>{setting.logo}</div>
              <div>
                <h2>
                  {setting.title} {setting.isPlus && <span>Plus</span>}
                </h2>
                <p>{setting.description}</p>
                <div style={{ width: isMobile ? '100%' : 'auto' }}>
                  <Button type="primary" block={isMobile}>
                    Set Up Now
                  </Button>
                </div>
                <div className={styles.analyticsStatus}>
                  <Badge
                    label={setting.isEnabled ? 'Enabled' : 'Disabled'}
                    disabled={setting.isEnabled}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
  const Promote = () => {
    const isMdScreen = useMedia('(min-width: 992px)', false)
    const ButtonTab = () => {
      const [buttonStyles, setButtonStyles] = useState(promoteData.button)
      const handleSelectStyle = (item) => {
        const btnStyles = [...buttonStyles]
        for (const style of btnStyles) {
          style.selected = style.title === item.title
        }
        setButtonStyles([...btnStyles])
      }
      return (
        <>
          <div className={styles.promoteTabHeader}>
            <h2>Button</h2>
            <p>Pick a style</p>
          </div>
          <div className={styles.promoteButtonTab}>
            {buttonStyles.map((style) => (
              <div
                className={
                  style.selected
                    ? classNames(
                        styles.promoteButtonStyleItem,
                        styles.promoteButtonStyleSelected
                      )
                    : styles.promoteButtonStyleItem
                }
                key={style.title}
                onClick={() => handleSelectStyle(style)}
              >
                <div className={styles.buttonPreview}>
                  <p>Press this button to try it out!</p>
                  <div
                    className={styles.buttonPreviewButton}
                    style={{
                      color: style.color,
                      backgroundColor: style.bgColor,
                      border: `1px solid ${style.borderColor}`,
                    }}
                  >
                    Book Now
                  </div>
                </div>
                <div className={styles.buttonDesc}>
                  <div className={styles.buttonStyleTitle}>
                    {style.selected && (
                      <CheckOutlined style={{ marginRight: '4px' }} />
                    )}{' '}
                    {style.title}
                  </div>
                  {style.selected && (
                    <div className={styles.copyEmbedCode}>
                      <CopyOutlined />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </>
      )
    }
    const BookingPortalTab = () => {
      const [form] = Form.useForm()
      const [link, setLink] = useState('prelive-connnect.pabau.com/bookings')
      return (
        <>
          <div className={styles.promoteTabHeader}>
            <h2>Booking portal</h2>
            <p>Here is your portal link</p>
          </div>
          <div className={styles.promoteBookingPortalTab}>
            <p>Book now link</p>
            <p>
              Copy and paste the link below to add the button to your website,
              blog posts, email signature to anywhere else online.
              <br />
              <br />
              The Link leads straight to your online booking service menus,
              lettings clients easily book new appointments in just a few
              clicks.
              <br />
              <br />
              Your link works perfectly with anny device including desktops,
              tables and mobiles.
            </p>
            <Form form={form} layout="vertical">
              <Form.Item label="Link">
                <Input text={link} onChange={(val) => setLink(val)} />
                <Button
                  type="primary"
                  icon={<CopyOutlined />}
                  style={{ marginLeft: '1rem' }}
                >
                  Copy Link
                </Button>
              </Form.Item>
            </Form>
            <Alert
              message="Attention"
              description="Please note you are in test mode, please do not embedd this link anywhere"
              type="warning"
            />
          </div>
        </>
      )
    }
    return (
      <div className={styles.onlineBookingPromote}>
        <div className={styles.onlineBookingPromotePanel}>
          <h2>Promote</h2>
          <TabMenu
            tabPosition={isMdScreen ? 'left' : 'top'}
            minHeight="1px"
            menuItems={['Button', 'Booking portal', 'Widget', 'Facebook App']}
          >
            <ButtonTab />
            <BookingPortalTab />
            <div>Widget</div>
            <div>Facebook App</div>
          </TabMenu>
        </div>
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
                <Payment />
                <Analytics />
                <Promote />
              </TabMenu>
            )}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Index
