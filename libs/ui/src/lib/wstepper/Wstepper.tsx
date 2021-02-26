/* eslint-disable */
import React, { useEffect } from 'react'
import styles from './Wstepper.module.less'
import Wizard from '../wizard/Wizard'
import { StepperItem, Button } from '@pabau/ui'
import Stepper from '../stepper/Stepper'

interface WStepperProps {
  active: number
  data: StepperItem[]
  disableNextStep?: boolean
  onActiveStepChange?: (index) => void
}

export const Wstepper: React.FC<WStepperProps> = ({
  active,
  children,
  data,
  disableNextStep = false,
  onActiveStepChange,
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
        onNext={() => setIndex(index + 1)}
        onPrev={() => setIndex(index - 1)}
        active={index}
        allSteps={data.length}
        disableNextStep={disableNextStep}
      />
    </div>
  )
}

export default Wstepper
