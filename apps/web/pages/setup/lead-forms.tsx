import React, { useState } from 'react'
import { Layout, WStepper } from '@pabau/ui'
import styles from './lead-forms.module.less'
import { LeadSettings, LeadIntegration } from './lead-capture/index'

export function LeadForms() {
  const allSteps = ['Basic', 'Configure(API)', 'Testing(API)', 'Result']
  const [activeStep, setActiveStep] = useState(0)
  return (
    <Layout active={'setup'}>
      <div className={styles.cardWrapper}>
        <WStepper
          active={activeStep}
          breadcrumbTxt="Setup"
          headerTxt="Lead Capture"
          onActiveStepChange={(step) => setActiveStep(step)}
        >
          {allSteps[activeStep] === 'Basic' && <LeadSettings />}
          {allSteps[activeStep] === 'Configure(API)' && <LeadIntegration />}
        </WStepper>
      </div>
    </Layout>
  )
}

export default LeadForms
