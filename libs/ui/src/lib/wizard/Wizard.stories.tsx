/* eslint-disable */
import React from 'react'
import Wizard from './Wizard';

import icon_api from '../../assets/images/wizard/api.png'
import icon_form from '../../assets/images/wizard/form.png'

export default {
  component: Wizard,
  title: 'Wizard',
  args: { active: true, title: '', desc : '', iconPath:''},
  argTypes: {
    // leftsection1: { control: { type: 'text' } },
    active: { control: { type: 'boolean' } },
    onClick: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const WizardStory = ({ ...args }) => <Wizard {...args}></Wizard>

export const wizard = WizardStory.bind({})
wizard.args = {
  active: true,
  title : 'API(Recommended)',
  desc : 'Via Pabaus lead API (requires web developer)',
  iconPath: icon_api,
}
