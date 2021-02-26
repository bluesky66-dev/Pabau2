import React from 'react'

import Wizard from './Wizard'
import { data } from './Mock'

export default {
  component: Wizard,
  title: 'Wizard/Wizard',
  args: { active: 1, allSteps: 4, breadcrumb: 'Setup', header: 'Lead Capture' },
  argTypes: {
    breadcrumb: { control: { type: 'text' } },
    header: { control: { type: 'text' } },
    active: { control: { type: 'number' } },
    allSteps: { control: { type: 'number' } },
    onPrev: { action: 'clicked' },
    onNext: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const WizardStory = ({ ...args }) => {
  const { active = 1 } = args
  const [index, setIndex] = React.useState(active)
  return (
    <Wizard
      {...args}
      active={index}
      onPrev={() => setIndex(index - 1)}
      onNext={() => setIndex(index + 1)}
      allSteps={args.allSteps}
    ></Wizard>
  )
}

export const wizard = WizardStory.bind({})
wizard.args = {}
