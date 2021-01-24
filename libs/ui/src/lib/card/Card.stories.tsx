/* eslint-disable */
import React from 'react'

import Card from './Card';
import { data } from './mock';

export default {
  component: Card,
  title: 'Wizard/Card',
  args: { active: 1, datasource : data },
  argTypes: {
    onClick: { action: 'clicked' }, 
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const CardStory = ({ ...args }) => <Card {...args} datasource={args.datasource} active={args.active}></Card>

export const card = CardStory.bind({})
card.args = {
  active: 1,
  datasource : data
}