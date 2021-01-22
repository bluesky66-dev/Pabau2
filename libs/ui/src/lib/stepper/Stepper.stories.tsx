/* eslint-disable */
import React from 'react'
import Stepper from './Stepper';
import { data } from './mock'

export default {
  component: Stepper,
  title: 'Stepper',
  args: { 
    datasource: data,
  },
  argTypes: {
    onClick: { action: 'clicked' },
    step: { control: { type: 'number' } },
  },
  // actions: { argTypesRegex: '^on[A-Z].*' },
}

const StepperStory = ({...args}) => {
return (
  <Stepper {...args} datasource={args.datasource} step={args.step}></Stepper>
)
}

export const wizard = StepperStory.bind({})
wizard.args = {
  datasource: data,
  step : 1
}
