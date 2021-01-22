import React, { FC } from 'react'
import SecurityScore from './SecurityScore'
import SecurityTools from './SecurityTools'

export default {
  component: SecurityScore,
  title: 'Misc/Security',
  args: { percent: 30 },
  argTypes: {
    percent: { control: { type: 'number' } },
  },
}

const SecurityStory = ({ ...args }) => <SecurityScore {...args} />

export const Score = SecurityStory.bind({})
Score.args = {
  percent: 30,
}
export const Tools: FC = () => {
  return <SecurityTools />
}
