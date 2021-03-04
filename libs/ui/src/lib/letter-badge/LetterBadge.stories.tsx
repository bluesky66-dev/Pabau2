import React from 'react'
import { LetterBadge, LetterBadgeColors } from './LetterBadge'

export default {
  component: LetterBadge,
  title: 'Basics/Badge',
  args: {
    children: 'A',
    color: LetterBadgeColors.blue,
  },
  argTypes: {
    children: { control: { type: 'text' } },
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const LetterBadgeStory = (args) => (
  <LetterBadge color={args.color}>{args.children}</LetterBadge>
)

export const letterBadge = LetterBadgeStory.bind({})
letterBadge.args = {
  children: 'A',
}
