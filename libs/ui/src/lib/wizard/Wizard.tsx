import React from 'react'

import styels from './Wizard.module.less'
import { Button, Breadcrumb } from '@pabau/ui'
import { Typography } from 'antd'

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
      {children}
      <hr className={styels.bottomline} />

      <div className={styels.footer}>
        <Button onClick={(event) => prevClick()} disabled={active <= 1}>
          Previous Step
        </Button>
        <span className={styels.breadcrumbgraytxt}>
          Step {active}/{allSteps}
        </span>

        <Button
          type="primary"
          onClick={(event) => nextClick()}
          disabled={active >= allSteps}
        >
          Next Step
        </Button>
      </div>
    </div>
  )
}

export default Wizard
