/* eslint-disable */
import React, { useEffect } from 'react'
import styles from './WStepper.module.less'
import Wizard from '../wizard/Wizard'
import { StepperItem, Button } from '@pabau/ui'
import Stepper from '../stepper/Stepper'

interface WStepperProps {
  active: number
  data: StepperItem[]
  disableNextStep?: boolean
  onActiveStepChange?: (index) => void
}

export const WStepper: React.FC<WStepperProps> = ({
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
      <hr className={styles.line} />

      <Stepper datasource={data} step={active} />

      <hr className={styles.bottomline} />

      {children}

      {/* <div style={{ marginTop: '20px' }}></div> */}
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

export default WStepper
