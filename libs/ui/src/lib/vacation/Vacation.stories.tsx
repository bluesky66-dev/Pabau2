import React from 'react'
import Vacation, { VacationProps } from './Vacation'

export default {
  component: Vacation,
  title: 'Misc/Vacation',
  args: { from: '2020/12/15', to: '2020/12/25' },
  argTypes: {
    from: { control: { type: 'text' } },
    to: { control: { type: 'text' } },
  },
}

const VacationStory = (args: VacationProps) => <Vacation {...args} />
export const vacation = VacationStory.bind({})
vacation.args = {
  from: '2020/12/15',
  to: '2020/12/25',
}
