import React, { useState } from 'react'
import { Layout, WStepper, StepperInterface } from '@pabau/ui'
import styles from './lead-forms.module.less'
import {
  LeadSettings,
  LeadIntegration,
  LeadTesting,
  LeadResult,
} from './lead-capture/index'
import { FlagOutlined, HomeOutlined, ToolOutlined } from '@ant-design/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

export function LeadForms() {
  const allSteps = ['Basic', 'Configure(API)', 'Testing(API)', 'Result']
  const [activeStep, setActiveStep] = useState(0)

  const data: StepperInterface[] = [
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
  return (
    <Layout active={'setup'}>
      <div className={styles.cardWrapper}>
        <WStepper
          data={data}
          active={activeStep}
          breadcrumbTxt="Setup"
          headerTxt="Lead Capture"
          onActiveStepChange={(step) => setActiveStep(step)}
        >
          {allSteps[activeStep] === 'Basic' && <LeadSettings />}
          {allSteps[activeStep] === 'Configure(API)' && <LeadIntegration />}
          {allSteps[activeStep] === 'Testing(API)' && <LeadTesting />}
          {allSteps[activeStep] === 'Result' && <LeadResult />}
        </WStepper>
      </div>
    </Layout>
  )
}

export default LeadForms
