import React, { FC, useState, useEffect, useRef, ReactNode } from 'react'
import { useMedia } from 'react-use'
import { Typography, Radio } from 'antd'
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
} from '@pabau/ui'
import {
  LeftOutlined,
  RightOutlined,
  DesktopOutlined,
  MobileOutlined,
} from '@ant-design/icons'
import confetti from 'canvas-confetti'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import {
  defaultBuilderSetting,
  defaultStepData,
  defaultWidgetsData,
} from '../../../assets/clientAreaData'
import widgetModalImg from '../../../assets/images/widget-modal.png'
import { ReactComponent as Palette } from '../../../assets/images/palette.svg'
import { ReactComponent as Profile } from '../../../assets/images/profile.svg'
import { ReactComponent as ExternalLink } from '../../../assets/images/external-link.svg'
import styles from './index.module.less'

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
  icon: ReactNode
  isPlus: boolean
  isEnable: boolean
  title: string
  description: string
}

export interface ClientAreaWidgets {
  [key: string]: {
    title: string
    description: string
    widgets: ClientAreaWidget[]
  }
}

export interface ClientAreaProps {
  currentStep: number
  builderSetting: ClientAreaBuilderSetting
  widgetsSetting: ClientAreaWidgets
}

export const Index: FC<ClientAreaProps> = ({
  currentStep = 0,
  builderSetting = defaultBuilderSetting,
  widgetsSetting = defaultWidgetsData,
}) => {
  const isMobile = useMedia('(max-width: 767px)', false)
  const isMdScreen = useMedia('(min-width: 992px)', false)
  const clientAreaRef = useRef(null)
  const [step, setStep] = useState(0)
  const [setting, setSetting] = useState<ClientAreaBuilderSetting>(
    defaultBuilderSetting
  )
  const [widgets, setWidgets] = useState<ClientAreaWidgets>(defaultWidgetsData)
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }
  useEffect(() => {
    setStep(currentStep)
    setSetting(builderSetting)
    setWidgets(widgetsSetting)
  }, [currentStep, builderSetting, widgetsSetting])

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
      clientAreaRef.current.scrollIntoView()
      onNext()
    }
    const handleClickPrev = () => {
      clientAreaRef.current.scrollIntoView()
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
        <Button
          type="primary"
          disabled={step >= 2}
          onClick={() => handleClickNext()}
        >
          Next Step <RightOutlined />
        </Button>
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
              <div>Preview Panel</div>
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
      index: 0,
      isEnable: false,
    })
    const handleClickWidgetOps = () => {
      const widgets = { ...setting }
      widgets[currentWidget.mainKey].widgets[
        currentWidget.index
      ].isEnable = !currentWidget.isEnable
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
                {setting[item].widgets.map((widget, index) => (
                  <div
                    className={styles.clientAreaWidget}
                    key={widget.title}
                    onClick={() => {
                      setVisible(true)
                      setCurrentWidget({
                        isEnable: widget.isEnable,
                        mainKey: item,
                        index,
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
                        label={widget.isEnable ? 'Enabled' : 'Disabled'}
                        disabled={widget.isEnable}
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
                    setting[currentWidget.mainKey].widgets[currentWidget.index]
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
                    type={!currentWidget.isEnable ? 'primary' : 'ghost'}
                    onClick={() => handleClickWidgetOps()}
                  >
                    {!currentWidget.isEnable ? 'Enable' : 'Disable'}
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
    return (
      <>
        <div className={styles.clientAreaBody}>Step 3</div>
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
              <Typography.Title>Client Area</Typography.Title>
            </div>
            <div className={styles.clientAreaBreadcrumbMobile}>
              <Typography.Title>
                <LeftOutlined /> Client Area
              </Typography.Title>
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
          {step === 2 && <Step3 settings={setting} />}
        </div>
      </Layout>
    </div>
  )
}

export default Index
