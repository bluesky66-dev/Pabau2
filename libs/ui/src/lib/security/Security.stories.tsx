/* eslint-disable */
import React from 'react'
import SecurityScore from './SecurityScore'
import SecurityTools from './SecurityTools'



export default {
  component: SecurityScore,
  title: 'Security',
  args: { percent: 30},
  argTypes: {
    percent: { control: { type: 'number' } },
  },
}

const SecurityStory = ({ ...args }) => <SecurityScore {...args}></SecurityScore>

export const Score = SecurityStory.bind({})
Score.args = {
  percent: 30,
}
export const Tools = () => {
  return (
      <SecurityTools />
  )
}
