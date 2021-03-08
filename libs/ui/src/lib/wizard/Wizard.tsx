import React, { ReactNode } from 'react'
import styles from './Wizard.module.less'
import { Button } from '@pabau/ui'
import { ButtonType } from 'antd/lib/button/button'

interface WizardProps {
  onPrev?: () => void
  onNext?: () => void
  extraBtnClick?: () => void
  active: number
  allSteps: number
  showNextBtn?: boolean
  nextBtnLabel?: string | number | ReactNode
  disableNextStep?: boolean
  disablePrevStep?: boolean
  extraBtn?: boolean
  extraBtnType?: ButtonType
  extraBtnLabel?: string | number | ReactNode
}

export const Wizard: React.FC<WizardProps> = ({
  onPrev,
  onNext,
  extraBtnClick,
  active,
  allSteps,
  showNextBtn = true,
  disableNextStep = true,
  disablePrevStep = true,
  extraBtn = false,
  extraBtnType = 'default',
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
          onClick={() => onPrev?.()}
          disabled={active < 1 || (active === allSteps - 1 && disablePrevStep)}
        >
          Previous Step
        </Button>
        <span className={styles.breadcrumbgraytxt}>
          Step {active + 1}/{allSteps}
        </span>

        <div>
          {extraBtn && (
            <Button type={extraBtnType} onClick={() => extraBtnClick?.()}>
              {extraBtnLabel}
            </Button>
          )}
          {showNextBtn && (
            <Button
              type="primary"
              onClick={() => onNext?.()}
              style={{ marginLeft: '10px' }}
              disabled={disableNextStep && allSteps - 1 <= active}
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
