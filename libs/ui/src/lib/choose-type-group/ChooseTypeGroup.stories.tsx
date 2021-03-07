import React, { FC } from 'react'
import { ChooseTypeGroup } from './ChooseTypeGroup'

export default {
  title: 'UI/Choose Template Type',
  component: ChooseTypeGroup,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

const ChooseTypeGroupStory: FC = () => {
  return <ChooseTypeGroup />
}

export const DefaultGroup = ChooseTypeGroupStory.bind({})
