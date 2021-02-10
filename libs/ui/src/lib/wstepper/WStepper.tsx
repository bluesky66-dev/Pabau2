/* eslint-disable */
import React, { Children, useEffect, useState } from 'react'

import styels from './WStepper.module.less'
import Wizard from '../wizard/Wizard'
export interface StepperInterface {
  step: number
  name: string
  imgPath: JSX.Element
  isActive: boolean
  index: number
}
interface WStepperProps {
  active: number
  breadcrumbTxt: string
  headerTxt: string
  data: StepperInterface[]
  onActiveStepChange?: (index) => void
}

export const WStepper: React.FC<WStepperProps> = ({
  active,
  breadcrumbTxt,
  headerTxt,
  children,
  data,
  onActiveStepChange
}) => {
  const [index, setIndex] = React.useState(active)

  useEffect(() => {
    onActiveStepChange?.(index)
  }, [index])

  return (
    <div className={styels.container}>
      <Wizard
        onPrev={() => setIndex(index - 1)}
        onNext={() => setIndex(index + 1)}
        breadcrumb={breadcrumbTxt}
        header={headerTxt}
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
