import React, { FC } from 'react'
import { CommunicationTemplatePreview } from './CommunicationTemplatePreview'

export default {
  title: 'UI/Create Template Preview',
  component: CommunicationTemplatePreview,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}
export const CommunicationTemplate: FC = () => {
  return <CommunicationTemplatePreview />
}
