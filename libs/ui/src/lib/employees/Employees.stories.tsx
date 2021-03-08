import React, { FC } from 'react'
import { Employees, Employee } from './Employees'

export default {
  title: 'UI/Employees',
  component: Employees,
  args: {},
  argTypes: {
    actions: { argTypesRegex: '^on[A-Z].*' },
  },
}

const defaultEmployees: Employee[] = [
  { name: 'Jessica Winter', selected: false },
  { name: 'Jeff Hackley', selected: false },
  { name: 'Alexander Wang', selected: false },
  { name: 'Linda Davis', selected: false },
  { name: 'William Tyson', selected: false },
  { name: 'Max Starck', selected: false },
  { name: 'Kyle Walsh', selected: false },
  { name: 'Owen Phillips', selected: false },
  { name: 'Aidan Kelly', selected: false },
  { name: 'Ewan Morgan', selected: false },
  { name: 'Jordan Martin', selected: false },
  { name: 'Grant Dudley', selected: false },
]

export interface EmployeesStoryProps {
  employees: Employee[]
}

const EmployeesStory: FC<EmployeesStoryProps> = ({ ...args }) => {
  return (
    <div style={{ padding: '27px 32px 32px', width: '502px' }}>
      <Employees {...args} />
    </div>
  )
}

export const Default = EmployeesStory.bind({})
Default.args = {
  employees: defaultEmployees,
  title: '',
  description: '',
}
