/* eslint-disable */
import React from 'react'
import Wizard from './Wizard';

import icon_api from '../../assets/images/wizard/api.png'
import icon_form from '../../assets/images/wizard/form.png'
import { data } from './mock';

export default {
  component: Wizard,
  title: 'Wizard',
  args: { active: 1, datasource : data },
  argTypes: {
    onClick: { action: 'clicked' }, 
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const WizardStory = ({ ...args }) => <Wizard {...args} datasource={args.datasource} active={args.active}></Wizard>

export const wizard = WizardStory.bind({})
wizard.args = {
  active: 1,
  datasource : data
}
