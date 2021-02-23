import React from 'react'
import Stepper from '../stepper/Stepper'
import styels from './Wizard.module.less'
import { Button } from '@pabau/ui'
import { StepperInterface } from './mock'
interface WizardProps {
  onPrev?: () => void
  onNext?: () => void
  onSmartOrder?: () => void
  active: number
  allSteps: number
  stepperData: StepperInterface[]
  disableNextStep?: boolean
  smartOrderBtn?: boolean
}

export const Wizard: React.FC<WizardProps> = ({
  onPrev,
  onNext,
  onSmartOrder,
  active,
  allSteps,
  stepperData,
  disableNextStep = false,
  smartOrderBtn = false,
  children,
}) => {
  return (
    <div className={styels.container}>
      <hr className={styels.line} />
      <Stepper datasource={stepperData} step={active} />
      <hr className={styels.bottomline} />
      {children}
      {/* <div style={{ marginTop: '20px' }}></div> */}
      <div className={styels.footer}>
        <Button
          onClick={(event) => onPrev?.()}
          disabled={active < 1 || active === allSteps - 1}
        >
          Previous Step
        </Button>
        <span className={styels.breadcrumbgraytxt}>
          Step {active + 1}/{allSteps}
        </span>

        <div>
          {smartOrderBtn && (
            <Button
              type="default"
              onClick={(event) => onSmartOrder?.()}
              style={{ marginRight: '10px' }}
            >
              Smart Order
            </Button>
          )}
          <Button
            type="primary"
            onClick={(event) => onNext?.()}
            disabled={disableNextStep || allSteps - 1 <= active}
          >
            Next Step
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Wizard
