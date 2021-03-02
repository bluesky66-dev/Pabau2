import React, { useState } from 'react'

import Wstepper from './Wstepper'
import { data } from '../wizard/Mock'

export default {
  component: Wstepper,
  parameters: {
    layout: 'fullscreen',
  },
  title: 'Wizard/Wstepper',
  args: { active: 0, breadcrumbTxt: 'Setup', headerTxt: 'Lead Capture' },
  argTypes: {
    breadcrumbTxt: { control: { type: 'text' } },
    headerTxt: { control: { type: 'text' } },
    active: { control: { type: 'number' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const WstepperStory = ({ ...args }) => {
  const { active = 1 } = args
  const [activeStep, setActiveStep] = useState(active)
  // const { active = 0, allSteps = 4 } = args
  // const [index, setIndex] = React.useState(active)
  // return <Wizard {...args} active={index} onPrev={() => setIndex(index - 1)} onNext={() => setIndex(index + 1)} allSteps={args.allSteps} breadcrumb={args.breadcrumb} header={args.header}></Wizard>;
  return (
    <Wstepper
      onActiveStepChange={(step) => setActiveStep(step)}
      {...args}
      data={data}
      active={activeStep}
    ></Wstepper>
  )
}

export const wstepper = WstepperStory.bind({})
wstepper.args = {}
