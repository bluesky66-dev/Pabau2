/* eslint-disable */
import React, { useEffect, ReactNode } from 'react'
import styles from './Wstepper.module.less'
import Wizard from '../wizard/Wizard'
import { StepperItem } from '@pabau/ui'
import Stepper from '../stepper/Stepper'
import { ButtonType } from 'antd/lib/button/button'

interface WStepperProps {
  active: number
  data: StepperItem[]
  showNextBtn?: boolean
  disableNextStep?: boolean
  disablePrevStep?: boolean
  nextBtnLabel?: string | number | ReactNode
  extraBtn?: boolean
  extraBtnType?: ButtonType
  extraBtnLabel?: string | number | ReactNode
  extraBtnClick?: () => void
  onActiveStepChange?: (index) => void
}

export const Wstepper: React.FC<WStepperProps> = ({
  active,
  children,
  data,
  disableNextStep = false,
  onActiveStepChange,
  ...props
}) => {
  const [index, setIndex] = React.useState(0)

  useEffect(() => {
    setIndex(active)
  }, [active])

  useEffect(() => {
    onActiveStepChange?.(index)
  }, [index])

  return (
    <div className={styles.container}>
      <div className={styles.stepperContianer}>
        <div>
          <Stepper datasource={data} step={active} />
        </div>
      </div>

      {children}

      <Wizard
        {...props}
        onPrev={() => setIndex(index - 1)}
        onNext={() => setIndex(index + 1)}
        active={index}
        allSteps={data.length}
        disableNextStep={disableNextStep}
      />
    </div>
  )
}

export default Wstepper
