import React, { useState } from 'react'
import {
  Layout,
  Breadcrumb,
  WStepper,
  StepperItem,
  MobileHeader,
} from '@pabau/ui'
import styles from './lead-forms.module.less'
import LeadSettings from './lead-capture/LeadSetting'
import LeadIntegration from './lead-capture/LeadIntegration'
import LeadTesting from './lead-capture/LeadTesting'
import LeadResult from './lead-capture/LeadResult'
import LeadFormResult from './lead-capture/lead-forms/LeadFormResult'
import LeadCustomizeForm from './lead-capture/lead-forms/LeadCustomizeForm'
import {
  FlagOutlined,
  HomeOutlined,
  LeftOutlined,
  ToolOutlined,
} from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { Typography } from 'antd'
import Link from 'next/link'

const { Title } = Typography

export const LeadForms: React.FC = () => {
  const allAPISteps = ['Basic', 'Configure(API)', 'Testing(API)', 'Result']
  const allFormSteps = ['Basic', 'Customize Form', 'Result']
  const [activeStepper, setActiveStepper] = useState('API')
  const [activeStep, setActiveStep] = useState(0)

  const apiStepper: StepperItem[] = [
    {
      step: 1,
      name: 'Basic',
      imgPath: <HomeOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Configure(API)',
      imgPath: (
        <FontAwesomeIcon
          icon={Icons.faPencilAlt}
          style={{ fontSize: '12px' }}
        />
      ),
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Testing(API)',
      imgPath: <ToolOutlined />,
      isActive: false,
      index: 2,
    },
    {
      step: 4,
      name: 'Result',
      imgPath: <FlagOutlined />,
      isActive: false,
      index: 3,
    },
  ]

  const formStepper: StepperItem[] = [
    {
      step: 1,
      name: 'Basic',
      imgPath: <HomeOutlined />,
      isActive: true,
      index: 0,
    },
    {
      step: 2,
      name: 'Customize Form',
      imgPath: (
        <FontAwesomeIcon
          icon={Icons.faPencilAlt}
          style={{ fontSize: '12px' }}
        />
      ),
      isActive: false,
      index: 1,
    },
    {
      step: 3,
      name: 'Result',
      imgPath: <FlagOutlined />,
      isActive: false,
      index: 2,
    },
  ]

  const setActiveStepperForLead = (type) => {
    setActiveStepper(type)
  }

  const onAPIFlowComplete = () => {
    setActiveStep(allAPISteps.length - 1)
  }

  const onFormFlowComplete = () => {
    setActiveStep(allFormSteps.length - 1)
  }

  return (
    <>
      <div className={styles.desktopViewNone}>
        <MobileHeader className={styles.mobileHeader}>
          <div className={styles.allContentAlignMobile}>
            <div className={styles.mobileHeaderTextStyle}>
              <Link href="/setup">
                <LeftOutlined />
              </Link>
              <p>Lead Capture</p>
            </div>
          </div>
        </MobileHeader>
      </div>

      <Layout active={'setup'}>
        <div className={styles.cardWrapper}>
          <div style={{ background: '#FFF' }}>
            <Breadcrumb
              breadcrumbItems={[
                { breadcrumbName: 'Setup', path: 'setup' },
                { breadcrumbName: 'Lead Capture', path: '' },
              ]}
            />
            <Title>Lead Capture</Title>
          </div>
          <WStepper
            data={activeStepper === 'API' ? apiStepper : formStepper}
            active={activeStep}
            disableNextStep={
              activeStepper === 'API'
                ? allAPISteps[activeStep] === 'Testing(API)'
                : allFormSteps[activeStep] === 'Customize Form'
            }
            onActiveStepChange={(step) => {
              setActiveStep(step)
            }}
          >
            {allAPISteps[activeStep] === 'Basic' && (
              <LeadSettings captureLeadStepChange={setActiveStepperForLead} />
            )}
            {activeStepper === 'API' ? (
              <>
                {allAPISteps[activeStep] === 'Configure(API)' && (
                  <LeadIntegration />
                )}
                {allAPISteps[activeStep] === 'Testing(API)' && (
                  <LeadTesting onAPIFlowComplete={onAPIFlowComplete} />
                )}
                {allAPISteps[activeStep] === 'Result' && <LeadResult />}
              </>
            ) : (
              <>
                {allFormSteps[activeStep] === 'Customize Form' && (
                  <LeadCustomizeForm onFormFlowComplete={onFormFlowComplete} />
                )}
                {allFormSteps[activeStep] === 'Result' && <LeadFormResult />}
              </>
            )}
          </WStepper>
        </div>
      </Layout>
    </>
  )
}

export default LeadForms