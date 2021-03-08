import React, { FC } from 'react'
import { CreateLetterTemplateBar } from './CreateLetterTemplateBar'

export default {
  title: 'UI/Create Letter Template Bar',
  component: CreateLetterTemplateBar,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}
export const CreateLetterTemplate: FC = () => {
  return <CreateLetterTemplateBar />
}

// export const CreateLetterTemplate = CreateLetterTemplateBarStory.bind({})
