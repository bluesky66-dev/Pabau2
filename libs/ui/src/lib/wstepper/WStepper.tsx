/* eslint-disable */
import React, { useEffect } from 'react'
import styles from './WStepper.module.less'
import Wizard from '../wizard/Wizard'
import { StepperItem } from '@pabau/ui'
interface WStepperProps {
  active: number
  data: StepperItem[]
  showNextBtn?: boolean
  disableNextStep?: boolean
  disablePrevStep?: boolean
  nextBtnLabel?: string | number
  extraBtn?: boolean
  extraBtnLabel?: string | number
  extraBtnClick?: () => void
  onActiveStepChange?: (index) => void
}

export const WStepper: React.FC<WStepperProps> = ({
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
      <Wizard
        {...props}
        onPrev={() => setIndex(index - 1)}
        onNext={() => setIndex(index + 1)}
        active={index}
        allSteps={data.length}
        stepperData={data}
        disableNextStep={disableNextStep}
      >
        {children}
      </Wizard>
    </div>
  )
}

export default WStepper
