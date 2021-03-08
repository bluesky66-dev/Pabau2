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
const CreateTemplateModalStory: FC = () => {
  return <CreateTemplateModal />
}

export const CreateSMSTemplateModal = CreateTemplateModalStory.bind({})
