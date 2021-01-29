import React from 'react'

import WStepper from './WStepper'

export default {
  component: WStepper,
  title: 'Wizard/Wstepper',
  args: { active: 0, breadcrumbTxt: 'Setup', headerTxt: 'Lead Capture' },
  argTypes: {
    breadcrumbTxt: { control: { type: 'text' } },
    headerTxt: { control: { type: 'text' } },
    active: { control: { type: 'number' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const wstepperStory = ({ ...args }) => {
  // const { active = 0, allSteps = 4 } = args
  // const [index, setIndex] = React.useState(active)
  // return <Wizard {...args} active={index} onPrev={() => setIndex(index - 1)} onNext={() => setIndex(index + 1)} allSteps={args.allSteps} breadcrumb={args.breadcrumb} header={args.header}></Wizard>;
  return (
    <WStepper
      {...args}
      active={args.active}
      breadcrumbTxt={args.breadcrumbTxt}
      headerTxt={args.headerTxt}
    ></WStepper>
  )
}

export const wstepper = wstepperStory.bind({})
wstepper.args = {}
