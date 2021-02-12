import React from 'react'
import Stepper from '../stepper/Stepper'
import styels from './Wizard.module.less'
import { Button } from '@pabau/ui'
import { StepperInterface } from './mock'
interface WizardProps {
  onPrev?: () => void
  onNext?: () => void
  active: number
  allSteps: number
  stepperData: StepperInterface[]
}

export const Wizard: React.FC<WizardProps> = ({
  onPrev,
  onNext,
  active,
  allSteps,
  stepperData,
  children,
}) => {
  return (
    <div className={styels.container}>
      <hr className={styels.line} />
      <Stepper datasource={stepperData} step={active} />
      <hr className={styels.bottomline} />
      {children}

      <div className={styels.footer}>
        <Button onClick={(event) => onPrev?.()} disabled={active < 1}>
          Previous Step
        </Button>
        <span className={styels.breadcrumbgraytxt}>
          Step {active + 1}/{allSteps}
        </span>

        <Button
          type="primary"
          onClick={(event) => onNext?.()}
          disabled={allSteps - 1 <= active}
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default Wizard
