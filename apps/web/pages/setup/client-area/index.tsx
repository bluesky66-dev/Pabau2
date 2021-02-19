import React, { FC, useState, useEffect, useRef } from 'react'
import { Typography } from 'antd'
import {
  Button,
  Breadcrumb,
  Switch,
  Stepper,
  ColorPicker,
  Background,
  RegistrationFields,
} from '@pabau/ui'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import confetti from 'canvas-confetti'
import Layout from '../../../components/Layout/Layout'
import CommonHeader from '../CommonHeader'
import {
  defaultBuilderSetting,
  defaultStepData,
} from '../../../assets/clientAreaData'
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

export interface ClientAreaProps {
  currentStep: number
  builderSetting: ClientAreaBuilderSetting
}

export const Index: FC<ClientAreaProps> = ({
  currentStep = 0,
  builderSetting = defaultBuilderSetting,
}) => {
  const clientAreaRef = useRef(null)
  const [step, setStep] = useState(0)
  const [setting, setSetting] = useState<ClientAreaBuilderSetting>(
    defaultBuilderSetting
  )
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }
  useEffect(() => {
    setStep(currentStep)
    setSetting(builderSetting)
  }, [currentStep, builderSetting])

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
              <div></div>
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

  const Step2 = ({ settings }) => {
    return (
      <>
        <div className={styles.clientAreaBody}>Step 2</div>
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
          {step === 1 && <Step2 settings={setting} />}
          {step === 2 && <Step3 settings={setting} />}
        </div>
      </Layout>
    </div>
  )
}

export default Index
