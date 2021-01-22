/* eslint-disable */
import React from 'react'
import Wizard from './Wizard';

import icon_api from '../../assets/images/wizard/api.png'
import icon_form from '../../assets/images/wizard/form.png'

export default {
  component: Wizard,
  title: 'Wizard',
  args: { active: '', cardtitle1: '', cardlable1 : '', iconcard1:'', cardtitle2: '', cardlable2 : '', iconcard2:''},
  argTypes: {
    // leftsection1: { control: { type: 'text' } },
    onClick: { action: 'clicked' },
    active: {
      control: {
        type: 'select',
        selected: '1',
        options: ['1','2'],
      },
    },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const WizardStory = ({ ...args }) => <Wizard {...args}></Wizard>

export const wizard = WizardStory.bind({})
wizard.args = {
  active: '1',
  cardtitle1 : 'API(Recommended)',
  cardlable1 : 'Via Pabaus lead API (requires web developer)',
  iconcard1 : icon_api,
  cardtitle2 : 'API(Recommended)',
  cardlable2 : 'Via Pabaus lead API (requires web developer)',
  iconcard2 : icon_api,
}
