import React, { FC } from 'react'
import { CreateTemplateModal } from './CreateTemplateModal'

export default {
  title: 'Modals/Create Template Modal',
  component: CreateTemplateModal,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}
export const CreateTemplate: FC = () => {
  return <CreateTemplateModal />
}
