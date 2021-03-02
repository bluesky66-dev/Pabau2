import React, { FC, useState, useEffect, useRef, ReactNode } from 'react'
import { useMedia } from 'react-use'
import { Typography, Radio, Form, Input as AntInput } from 'antd'
import {
  Button,
  Breadcrumb,
  Switch,
  Stepper,
  ColorPicker,
  Background,
  RegistrationFields,
  TabMenu,
  Badge,
  BasicModal,
  SimpleDropdown,
} from '@pabau/ui'
import {
  LeftOutlined,
  RightOutlined,
  DownOutlined,
  DesktopOutlined,
  MobileOutlined,
  UsergroupAddOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from '@ant-design/icons'
import confetti from 'canvas-confetti'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../common-header'
import {
  defaultBuilderSetting,
  defaultStepData,
  defaultWidgetsData,
  defaultShareData,
} from '../../../assets/clientAreaData'
import clinicLogo from '../../../assets/images/normal-clinic-logo.png'
import widgetModalImg from '../../../assets/images/widget-modal.png'
import setupMedicalFormNewEPaper from '../../../assets/images/setup-medicalforms-new-epaper.png'
import { ReactComponent as Palette } from '../../../assets/images/palette.svg'
import { ReactComponent as Profile } from '../../../assets/images/profile.svg'
import { ReactComponent as ExternalLink } from '../../../assets/images/external-link.svg'
import styles from './index.module.less'

const { Title } = Typography

export interface ClientAreaBuilderSetting {
  appearance: {
    backgroundColor: string
    iconColor: string
    headerColor: string
    footerColor: string
  }
  registrationFields: {
    fieldName: string
    label: string
    visible: boolean
    required: boolean
    disabled?: boolean
    key: number
  }[]
  customFields: {
    fieldName: string
    label: string
    visible: boolean
    required: boolean
    disabled?: boolean
    key: number
  }[]
}

export interface ClientAreaWidget {
  id: number
  icon: ReactNode
  isPlus: boolean
  isEnabled: boolean
  title: string
  description: string
}

export interface ClientAreaWidgetsItem {
  title: string
  description: string
  widgets: ClientAreaWidget[]
}

export interface ClientAreaWidgets {
  [key: string]: ClientAreaWidgetsItem
}

export interface ClientAreaShare {
  clientPortalURL: string
  addWordpressPlugin: string
  sendCampaign: string
  addConfirmationAndReminder: string
  learnMore: string
}

export interface ClientAreaProps {
  currentStep: number
  builderSetting: ClientAreaBuilderSetting
  widgetsSetting: ClientAreaWidgets
  shareSetting: ClientAreaShare
}

export const Index: FC<ClientAreaProps> = ({
  currentStep = 0,
  builderSetting = defaultBuilderSetting,
  widgetsSetting = defaultWidgetsData,
  shareSetting = defaultShareData,
}) => {
  const isMobile = useMedia('(max-width: 767px)', false)
  const isMdScreen = useMedia('(min-width: 992px)', false)
  const clientAreaRef = useRef(null)
  const [step, setStep] = useState(0)
  const [setting, setSetting] = useState<ClientAreaBuilderSetting>(
    defaultBuilderSetting
  )
  const [widgets, setWidgets] = useState<ClientAreaWidgets>(defaultWidgetsData)
  const [share, setShare] = useState<ClientAreaShare>(defaultShareData)
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }
  useEffect(() => {
    setStep(currentStep)
    setSetting(builderSetting)
    setWidgets(widgetsSetting)
    setShare(shareSetting)
  }, [currentStep, builderSetting, widgetsSetting, shareSetting])

  useEffect(() => {
    if (step === 2) {
      confetti({
        angle: randomInRange(55, 125),
        spread: randomInRange(50, 70),
        particleCount: randomInRange(50, 100),
        origin: { y: 0.6 },
      })
    }
  }, [step])

  const ClientAreaFooter = ({ step, onNext, onPrev }) => {
    const handleClickNext = () => {
      clientAreaRef.current.scrollIntoView({ behavior: 'smooth' })
      onNext()
    }
    const handleClickPrev = () => {
      clientAreaRef.current.scrollIntoView({ behavior: 'smooth' })
      onPrev()
    }
    return (
      <div className={styles.clientAreaFooter}>
        <Button
          type="primary"
          disabled={step <= 0}
          onClick={() => handleClickPrev()}
        >
          <LeftOutlined /> Previous Step
        </Button>
        <p>{`Step ${step + 1}/3`}</p>
        {step < 2 && (
          <Button
            type="primary"
            disabled={step >= 2}
            onClick={() => handleClickNext()}
          >
            Next Step <RightOutlined />
          </Button>
        )}
        {step >= 2 && (
          <Button type="primary">
            Send Test <DownOutlined />
          </Button>
        )}
      </div>
    )
  }

  const LoginForm = () => {
    const [form] = Form.useForm()
    return (
      <div className={styles.clientAreaLoginForm}>
        <Form form={form} layout="vertical">
          <div className={styles.loginFormCenter}>
            <img src={clinicLogo} alt="" style={{ marginBottom: '2rem' }} />
          </div>
          <Form.Item label="Username">
            <AntInput />
          </Form.Item>
          <Form.Item label="Password">
            <AntInput.Password
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Form.Item>
          <div
            className={styles.loginFormRight}
            style={{
              marginBottom: isMdScreen ? '2rem' : '20px',
              color: 'var(--primary-color)',
            }}
          >
            Forgot password?
          </div>
          <Button type="primary" block>
            Login
          </Button>
          <div className={styles.loginFormCenter} style={{ margin: '8px 0' }}>
            or
          </div>
          <Button block className={styles.loginViaFB}>
            Login via Facebook
          </Button>
          <div className={styles.loginFormCenter} style={{ marginTop: '1rem' }}>
            <span style={{ color: 'var(--grey-text-color)' }}>
              Not a member yet?{' '}
              <span style={{ color: 'var(--primary-color)' }}>Sign in</span>
            </span>
          </div>
          <div
            className={styles.loginFormCenter}
            style={{ marginTop: '1rem', color: '#cccfd6' }}
          >
            Powered by Pabau
          </div>
        </Form>
      </div>
    )
  }

  const Step1 = ({ settings }) => {
    const [isDashboardPreview, setIsDashboardPreview] = useState(false)
    const [isMobilePreview, setIsMobilePreview] = useState(false)
    const [setting, setSetting] = useState<ClientAreaBuilderSetting>(
      defaultBuilderSetting
    )
    const handleColorSetting = (key, val) => {
      const builder = { ...setting }
      builder.appearance[key] = val
      setSetting({ ...builder })
    }
    const onCustomFieldCheckboxChange = (event, key, checkboxField) => {
      const records = [...setting.customFields]
      for (const record of records) {
        if (record.key === key) {
          record[checkboxField] = event.target.checked
        }
      }
      const builder = { ...setting }
      builder.customFields = [...records]
      setSetting({ ...builder })
    }
    const onMainFieldCheckboxChange = (event, key, checkboxField) => {
      const records = [...setting.registrationFields]
      for (const record of records) {
        if (record.key === key) {
          record[checkboxField] = event.target.checked
        }
      }
      const builder = { ...setting }
      builder.registrationFields = [...records]
      setSetting({ ...builder })
    }
    useEffect(() => {
      setSetting(settings)
    }, [settings])
    return (
      <>
        <div className={styles.clientAreaBody}>
          <div className={styles.clientAreaBodyDesktop}>
            <div>
              <h2>Builder</h2>
              <div>
                <div className={styles.section}>
                  <h3>
                    <Palette style={{ marginRight: '.5rem' }} />
                    <span>Apperance</span>
                  </h3>
                  <h4>
                    Here you can customize the look and feel of client area to
                    match your brand colours.
                  </h4>
                  <div className={styles.sectionItem}>
                    <Background
                      list={[
                        { name: 'None', color: '' },
                        {
                          name: 'Strong',
                          color:
                            'linear-gradient(125.34deg, #79E6E1 -8.96%, #93B8D5 111.79%)',
                        },
                        {
                          name: 'Emerald',
                          color:
                            'linear-gradient(125.34deg, #67E97D -8.96%, #68F7D3 111.79%)',
                        },
                        {
                          name: 'Skyline',
                          color:
                            'linear-gradient(125.34deg, #56F1FF -8.96%, #5CB0FF 111.79%)',
                        },
                      ]}
                      onChange={(val) =>
                        handleColorSetting('backgroundColor', val)
                      }
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <ColorPicker
                      heading="Icon colours for the menu"
                      onSelected={(val) => handleColorSetting('iconColor', val)}
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <ColorPicker
                      heading="Top header colours"
                      onSelected={(val) =>
                        handleColorSetting('headerColor', val)
                      }
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <ColorPicker
                      heading="Bottom footer colours"
                      onSelected={(val) =>
                        handleColorSetting('footerColor', val)
                      }
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <RegistrationFields
                    icon={<Profile style={{ marginRight: '.5rem' }} />}
                    customFieldTitle="Custom Fields"
                    fields={setting.registrationFields}
                    description="Choose which fields you would like to be visible or mandatory on the registration page"
                    requiredTitle="Required"
                    customFields={setting.customFields}
                    fieldTitle="Field Name"
                    title="Registration Fields"
                    visibleTitle="Visible"
                    onCustomFieldCheckboxChange={(event, key, checkboxField) =>
                      onCustomFieldCheckboxChange(event, key, checkboxField)
                    }
                    onMainFieldCheckboxChange={(event, key, checkboxField) =>
                      onMainFieldCheckboxChange(event, key, checkboxField)
                    }
                  />
                </div>
              </div>
            </div>
            <div>
              <h2>Preview</h2>
              <div className={styles.previewPanel}>
                <div className={styles.previewPanelHeader}>
                  <Radio.Group
                    buttonStyle="solid"
                    defaultValue={isDashboardPreview}
                    value={isDashboardPreview}
                    onChange={(e) => setIsDashboardPreview(e.target.value)}
                  >
                    <Radio.Button value={false}>Login</Radio.Button>
                    <Radio.Button value={true}>Dashboard</Radio.Button>
                  </Radio.Group>
                  <Radio.Group
                    buttonStyle="solid"
                    defaultValue={isMobilePreview}
                    value={isMobilePreview}
                    onChange={(e) => setIsMobilePreview(e.target.value)}
                  >
                    <Radio.Button value={false}>
                      <DesktopOutlined />
                    </Radio.Button>
                    <Radio.Button value={true}>
                      <MobileOutlined />
                    </Radio.Button>
                  </Radio.Group>
                </div>
                <div className={styles.previewPanelBody}>
                  <LoginForm />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.clientAreaBodyMobile}>
            <TabMenu
              menuItems={['BUILDER', 'PREVIEW']}
              tabPosition="top"
              minHeight="1px"
            >
              <div>
                <div className={styles.section}>
                  <h3>
                    <Palette style={{ marginRight: '.5rem' }} />
                    <span>Apperance</span>
                  </h3>
                  <h4>
                    Here you can customize the look and feel of client area to
                    match your brand colours.
                  </h4>
                  <div className={styles.sectionItem}>
                    <Background
                      list={[
                        { name: 'None', color: '' },
                        {
                          name: 'Strong',
                          color:
                            'linear-gradient(125.34deg, #79E6E1 -8.96%, #93B8D5 111.79%)',
                        },
                        {
                          name: 'Emerald',
                          color:
                            'linear-gradient(125.34deg, #67E97D -8.96%, #68F7D3 111.79%)',
                        },
                        {
                          name: 'Skyline',
                          color:
                            'linear-gradient(125.34deg, #56F1FF -8.96%, #5CB0FF 111.79%)',
                        },
                      ]}
                      onChange={(val) =>
                        handleColorSetting('backgroundColor', val)
                      }
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <ColorPicker
                      heading="Icon colours for the menu"
                      onSelected={(val) => handleColorSetting('iconColor', val)}
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <ColorPicker
                      heading="Top header colours"
                      onSelected={(val) =>
                        handleColorSetting('headerColor', val)
                      }
                    />
                  </div>
                  <div className={styles.sectionItem}>
                    <ColorPicker
                      heading="Bottom footer colours"
                      onSelected={(val) =>
                        handleColorSetting('footerColor', val)
                      }
                    />
                  </div>
                </div>
                <div className={styles.section}>
                  <RegistrationFields
                    icon={<Profile style={{ marginRight: '.5rem' }} />}
                    customFieldTitle="Custom Fields"
                    fields={setting.registrationFields}
                    description="Choose which fields you would like to be visible or mandatory on the registration page"
                    requiredTitle="Required"
                    customFields={setting.customFields}
                    fieldTitle="Field Name"
                    title="Registration Fields"
                    visibleTitle="Visible"
                    onCustomFieldCheckboxChange={(event, key, checkboxField) =>
                      onCustomFieldCheckboxChange(event, key, checkboxField)
                    }
                    onMainFieldCheckboxChange={(event, key, checkboxField) =>
                      onMainFieldCheckboxChange(event, key, checkboxField)
                    }
                  />
                </div>
              </div>
              <div className={styles.previewPanel}>
                <div className={styles.previewPanelHeader}>
                  <div style={{ width: '200px' }}>
                    <SimpleDropdown
                      dropdownItems={['Login', 'Dashboard']}
                      onSelected={(val) => val}
                    />
                  </div>
                </div>
                <div className={styles.previewPanelBody}>
                  <LoginForm />
                </div>
              </div>
            </TabMenu>
          </div>
        </div>
        <ClientAreaFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </>
    )
  }

  const Step2 = ({ settings }) => {
    const [visible, setVisible] = useState(false)
    const [setting, setSetting] = useState<ClientAreaWidgets>(
      defaultWidgetsData
    )
    const [currentWidget, setCurrentWidget] = useState({
      mainKey: '',
      id: 0,
      isEnabled: false,
    })
    const handleClickWidgetOps = () => {
      const widgets = { ...setting }
      widgets[currentWidget.mainKey].widgets[
        currentWidget.id
      ].isEnabled = !currentWidget.isEnabled
      setSetting({ ...widgets })
      setVisible(false)
    }
    useEffect(() => {
      setSetting(settings)
    }, [settings])
    return (
      <>
        <div className={styles.clientAreaBody}>
          <TabMenu
            tabPosition={isMobile ? 'top' : 'left'}
            menuItems={Object.keys(setting).map((item) => setting[item].title)}
            minHeight="1px"
          >
            {Object.keys(setting).map((item) => (
              <div
                className={styles.clientAreaWidgets}
                key={setting[item].title}
              >
                <div className={styles.clientAreaWidgetsHeader}>
                  <p className={styles.clientAreaWidgetsHeaderTitle}>
                    {setting[item].title}
                  </p>
                  <p className={styles.clientAreaWidgetsHeaderDesc}>
                    {setting[item].description}
                  </p>
                </div>
                {setting[item].widgets.map((widget) => (
                  <div
                    className={styles.clientAreaWidget}
                    key={widget.title}
                    onClick={() => {
                      setVisible(true)
                      setCurrentWidget({
                        isEnabled: widget.isEnabled,
                        mainKey: item,
                        id: widget.id,
                      })
                    }}
                  >
                    <div>{widget.icon}</div>
                    <div>
                      <p className={styles.clientAreaWidgetTitle}>
                        {widget.title}
                        {widget.isPlus && <span>Plus</span>}
                      </p>
                      <p className={styles.clientAreaWidgetDesc}>
                        {widget.description}
                      </p>
                    </div>
                    <div className={styles.clientAreaWidgetStatus}>
                      <Badge
                        label={widget.isEnabled ? 'Enabled' : 'Disabled'}
                        disabled={widget.isEnabled}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </TabMenu>
        </div>
        {visible && (
          <BasicModal
            visible={visible}
            footer={null}
            wrapClassName={styles.widgetModal}
            width={isMdScreen ? '870px' : 'calc(100% - 32px)'}
            onCancel={() => setVisible(false)}
          >
            <div className={styles.widgetModalContainer}>
              <div>
                <p className={styles.widgetModalTitle}>
                  {
                    setting[currentWidget.mainKey].widgets[currentWidget.id]
                      .title
                  }
                </p>
                <p className={styles.widgetModalDesc}>
                  Select Expire all user passwords and then click Save to expire
                  the passwords for all of the users in your organization. The
                  next time they log in, they will be asked to set their
                  passwords to a new value.
                </p>
                <div className={styles.widgetModalOps}>
                  <Button
                    type={!currentWidget.isEnabled ? 'primary' : 'ghost'}
                    onClick={() => handleClickWidgetOps()}
                  >
                    {!currentWidget.isEnabled ? 'Enable' : 'Disable'}
                  </Button>
                </div>
              </div>
              <div>
                <img src={widgetModalImg} alt="" width="100%" />
              </div>
            </div>
          </BasicModal>
        )}
        <ClientAreaFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </>
    )
  }

  const Step3 = ({ settings }) => {
    const [form] = Form.useForm()
    const [setting, setSetting] = useState<ClientAreaShare>(defaultShareData)
    useEffect(() => {
      setSetting(settings)
    }, [settings])
    return (
      <>
        <div className={styles.clientAreaBody}>
          <div className={styles.clientAreaShare}>
            <div>
              <div className={styles.clientAreaShareItem}>
                <img
                  src={setupMedicalFormNewEPaper}
                  width="100%"
                  alt=""
                  style={{ marginBottom: '14px' }}
                />
                <h3>Secured portal for your clients</h3>
                <h4>
                  Your clients can log in anytime to view and manage their past
                  and upcoming appointments, payments, documents and more.
                </h4>
                <Form
                  form={form}
                  layout="vertical"
                  style={{ marginTop: '14px' }}
                >
                  <Form.Item label="Client Portal URL">
                    <AntInput.Group>
                      <AntInput
                        style={{ width: 'calc(100% - 67px)' }}
                        defaultValue={setting.clientPortalURL}
                        disabled={true}
                      />
                      <Button
                        type="primary"
                        style={{ width: '67px', marginLeft: '-3px' }}
                      >
                        Copy
                      </Button>
                    </AntInput.Group>
                  </Form.Item>
                </Form>
              </div>
            </div>
            <div>
              <div className={styles.clientAreaShareItem}>
                <h3>
                  <UsergroupAddOutlined
                    style={{
                      color: 'var(--primary-color)',
                      marginRight: '8px',
                    }}
                  />{' '}
                  Invite clients
                </h3>
                <h4>Some descriptional text</h4>
                <div className={styles.clientAreaInviteClients}>
                  <a
                    href={setting.addWordpressPlugin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.clientAreaInviteClientItem}>
                      <span>Add Wordpress Plugin to your website</span>
                      <RightOutlined />
                    </div>
                  </a>
                  <a
                    href={setting.sendCampaign}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.clientAreaInviteClientItem}>
                      <span>Send A Campaign</span>
                      <RightOutlined />
                    </div>
                  </a>
                  <a
                    href={setting.addConfirmationAndReminder}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className={styles.clientAreaInviteClientItem}>
                      <span>Add To Confirmation & Reminders</span>
                      <RightOutlined />
                    </div>
                  </a>
                </div>
              </div>
              <div className={styles.clientAreaShareItem}>
                <div className={styles.clientPortalOnTheGo}>
                  <div>
                    <h3>
                      <UsergroupAddOutlined
                        style={{
                          color: 'var(--primary-color)',
                          marginRight: '8px',
                        }}
                      />{' '}
                      Client portal on-the-go
                    </h3>
                    <h4>
                      Offer clients an easy, app-like experience of your portal
                    </h4>
                  </div>
                  <div>
                    <a
                      href={setting.learnMore}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ClientAreaFooter
          step={step}
          onNext={() => setStep(step + 1)}
          onPrev={() => setStep(step - 1)}
        />
      </>
    )
  }

  return (
    <div ref={clientAreaRef}>
      <CommonHeader />
      <Layout>
        <div className={styles.clientAreaContainer}>
          <div className={styles.clientAreaHeader}>
            <div className={styles.clientAreaBreadcrumb}>
              <Breadcrumb
                breadcrumbItems={[
                  { breadcrumbName: 'Setup', path: '/setup' },
                  {
                    breadcrumbName: 'Client Area',
                    path: '/setup/client-area',
                  },
                ]}
              />
              <Title>Client Area</Title>
            </div>
            <div className={styles.clientAreaBreadcrumbMobile}>
              <Title>
                <LeftOutlined /> Client Area
              </Title>
            </div>
            <div className={styles.clientAreaOps}>
              <div className={styles.reviewLink}>
                Your current Pabau portal addrses <Switch size="small" />
              </div>
              <a
                href="https://connect-lutetia.pabau.me/booking"
                rel="noreferrer"
                target="_blank"
              >
                https://connect-lutetia.pabau.me/booking <ExternalLink />
              </a>
            </div>
          </div>
          <div className={styles.clientAreaStep}>
            <div>
              <Stepper datasource={defaultStepData} step={step} />
            </div>
          </div>
          {step === 0 && <Step1 settings={setting} />}
          {step === 1 && <Step2 settings={widgets} />}
          {step === 2 && <Step3 settings={share} />}
        </div>
      </Layout>
    </div>
  )
}

export default Index
