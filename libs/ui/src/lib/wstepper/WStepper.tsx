/* eslint-disable */
import React, { Children, useEffect, useState } from 'react'

import styels from './WStepper.module.less'
import Wizard from '../wizard/Wizard'
import { data } from '../wizard/mock'
interface WStepperProps {
  active: number
  breadcrumbTxt: string
  headerTxt: string
  onActiveStepChange?: (index) => void
}

export const WStepper: React.FC<WStepperProps> = ({
  active,
  breadcrumbTxt,
  headerTxt,
  children,
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
      >
        {children}
      </Wizard>
    </div>
  )
}

export default WStepper
