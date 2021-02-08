import React from 'react'
import Stepper from '../stepper/Stepper'
import styels from './Wizard.module.less'
import { Button, Breadcrumb } from '@pabau/ui'
import { Typography } from 'antd'
import { data } from './mock'

const { Title } = Typography

interface WizardProps {
  onPrev: () => void
  onNext: () => void
  active: number
  allSteps: number
  breadcrumb: string
  header: string
}

export const Wizard: React.FC<WizardProps> = ({
  onPrev,
  onNext,
  active,
  allSteps,
  breadcrumb,
  header,
  children,
}) => {
  function prevClick() {
    onPrev()
  }

  function nextClick() {
    onNext()
  }

  return (
    <div className={styels.container}>
      <div style={{ backgroundColor: '#FFF' }}>
        <Breadcrumb breadcrumbItems={[breadcrumb, header]} />
        <Title>{header}</Title>
      </div>

      <hr className={styels.line} />
      <Stepper datasource={data} step={active} />
      <hr className={styels.bottomline} />
      {children}

      <div className={styels.footer}>
        <Button onClick={(event) => prevClick()} disabled={active < 1}>
          Previous Step
        </Button>
        <span className={styels.breadcrumbgraytxt}>
          Step {active + 1}/{allSteps}
        </span>

        <Button
          type="primary"
          onClick={(event) => nextClick()}
          disabled={allSteps - 1 <= active}
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default Wizard
