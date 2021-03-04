import React from 'react'
import styles from './Wizard.module.less'
import { Button } from '@pabau/ui'
interface WizardProps {
  onPrev?: () => void
  onNext?: () => void
  extraBtnClick?: () => void
  active: number
  allSteps: number
  showNextBtn?: boolean
  nextBtnLabel?: string | number
  disableNextStep?: boolean
  disablePrevStep?: boolean
  extraBtn?: boolean
  extraBtnLabel?: string | number
}

export const Wizard: React.FC<WizardProps> = ({
  onPrev,
  onNext,
  extraBtnClick,
  active,
  allSteps,
  showNextBtn = true,
  disableNextStep = false,
  disablePrevStep = true,
  extraBtn = false,
  extraBtnLabel = 'Extra Button',
  nextBtnLabel = 'Next Step',
  children,
}) => {
  return (
    <div className={styles.container}>
      {children}
      {/* <div style={{ marginTop: '20px' }}></div> */}
      <div className={styles.footer}>
        <Button
          onClick={(event) => onPrev?.()}
          disabled={active < 1 || (active === allSteps - 1 && disablePrevStep)}
        >
          Previous Step
        </Button>
        <span className={styles.breadcrumbgraytxt}>
          Step {active + 1}/{allSteps}
        </span>

        <div>
          {extraBtn && (
            <Button
              type="default"
              onClick={(event) => extraBtnClick?.()}
              style={{ marginRight: '10px' }}
            >
              {extraBtnLabel}
            </Button>
          )}
          {showNextBtn && (
            <Button
              type="primary"
              onClick={(event) => onNext?.()}
              disabled={disableNextStep || allSteps - 1 <= active}
            >
              {nextBtnLabel}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Wizard
