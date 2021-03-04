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
  { name: 'Jessica Winter' },
  { name: 'Jeff Hackley' },
  { name: 'Alexander Wang' },
  { name: 'Linda Davis' },
  { name: 'William Tyson' },
  { name: 'Max Starck' },
  { name: 'Kyle Walsh' },
  { name: 'Owen Phillips' },
  { name: 'Aidan Kelly' },
  { name: 'Ewan Morgan' },
  { name: 'Jordan Martin' },
  { name: 'Grant Dudley' },
]

export interface EmployeesStoryProps {
  employees: Employee[]
}

export const EmployeesStory: FC<EmployeesStoryProps> = ({
  employees = defaultEmployees,
}) => {
  return (
    <div
      style={{ padding: '27px 32px 32px', maxWidth: '502px', width: '100%' }}
    >
      <Employees employees={employees} />
    </div>
  )
}
