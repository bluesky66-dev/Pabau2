import React from 'react'
import styels from './Wizard.module.less'
import { Button } from '@pabau/ui'

interface WizardProps {
  onPrev?: () => void
  onNext?: () => void
  active: number
  allSteps: number
  disableNextStep?: boolean
}

export const Wizard: React.FC<WizardProps> = ({
  onPrev,
  onNext,
  active,
  allSteps,
  disableNextStep = false,
}) => {
  return (
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

      <Button
        type="primary"
        onClick={(event) => onNext?.()}
        disabled={disableNextStep || allSteps - 1 <= active}
      >
        Next Step
      </Button>
    </div>
  )
}

export default Wizard
