import React from 'react'
import SecurityTools from './Securitytools'
import { securityToolsData } from '../../assets/securityData'

export default {
  component: SecurityTools,
  title: 'Misc/Securitytool',
  args: { title: 'Security tools', datasource: securityToolsData },
  argTypes: {
    title: { control: { type: 'text' } },
    onClick: { action: 'clicked' },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const SecuritytoolsStory = ({ ...args }) => (
  <SecurityTools
    {...args}
    datasource={args.datasource}
    title={args.title}
    onItemClick={(val) => val}
  ></SecurityTools>
)

export const Securitytool = SecuritytoolsStory.bind({})
Securitytool.args = {
  title: 'Security Tools',
  datasource: securityToolsData,
}
