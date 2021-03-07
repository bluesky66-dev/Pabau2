import React, { FC } from 'react'
import { CreateTemplateBar } from './CreateTemplateBar'

export default {
  title: 'UI/Create Template Bar',
  component: CreateTemplateBar,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

export const CreateTemplate: FC = () => {
  return <CreateTemplateBar />
}
