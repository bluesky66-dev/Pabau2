/* eslint-disable */
import React, { useState } from 'react'

import styels from './WStepper.module.less'
import Stepper from '../stepper/Stepper'
import Wizard from '../wizard/Wizard'
import { data } from './mock'
import { BreadcrumbItemInterface } from '../breadcrumb/Breadcrumb'

interface WStepperProps {
  active: number
  breadcrumbItems: BreadcrumbItemInterface[]
  headerTxt: string
}

export const WStepper: React.FC<WStepperProps> = ({
  active,
  breadcrumbItems,
  headerTxt,
}) => {
  const [index, setIndex] = React.useState(active)
  // const datasource = data
  const [dataSource, setDataSource]: any = useState(data)

  return (
    <div className={styels.container}>
      <Wizard
        onPrev={() => setIndex(index - 1)}
        onNext={() => setIndex(index + 1)}
        breadcrumbItems={breadcrumbItems}
        header={headerTxt}
        active={index}
        allSteps={5}
      >
        <Stepper datasource={dataSource} step={index} />
      </Wizard>
    </div>
  )
}

export default WStepper
