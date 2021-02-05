import React from 'react'
import SecurityScore from './SecurityScore'

export default {
  component: SecurityScore,
  title: 'Misc/Securityscore',
  args: {
    percent: 30,
    title1: 'Type new title',
    title2: 'Type new title',
    buttonTitle: 'How do we calculate this score?',
  },
  argTypes: {
    title1: { control: { type: 'text' } },
    title2: { control: { type: 'text' } },
    buttonTitle: { control: { type: 'text' } },
    percent: { control: { type: 'number' } },
  },
}

const SecurityStory = ({ ...args }) => {
  return (
    <SecurityScore
      {...args}
      percent={args.percent}
      title1={args.title1}
      title2={args.title2}
      buttonTitle={args.buttonTitle}
    ></SecurityScore>
  )
}

export const Securityscore = SecurityStory.bind({})
Securityscore.args = {}
