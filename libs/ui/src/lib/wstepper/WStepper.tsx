/* eslint-disable */
import React, { useEffect } from 'react'
import styles from './WStepper.module.less'
import Wizard from '../wizard/Wizard'
import { StepperItem } from '@pabau/ui'
interface WStepperProps {
  active: number
  data: StepperItem[]
  onActiveStepChange?: (index) => void
}

export const WStepper: React.FC<WStepperProps> = ({
  active,
  children,
  data,
  onActiveStepChange
}) => {
  const [index, setIndex] = React.useState(active)

  useEffect(() => {
    onActiveStepChange?.(index)
  }, [index])

  return (
    <div className={styles.container}>
      <Wizard
        onPrev={() => setIndex(index - 1)}
        onNext={() => setIndex(index + 1)}
        active={index}
        allSteps={data.length}
        stepperData={data}
      >
        {children}
      </Wizard>
    </div>
  )
}

export default WStepper
