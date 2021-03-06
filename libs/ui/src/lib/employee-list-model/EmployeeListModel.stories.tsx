import React, { FC } from 'react'
import EmployeeListModel, { EmployeeListModelProps } from './EmployeeListModel'
import { userList } from './mock'

export default {
  component: EmployeeListModel,
  title: 'Ui/EmployeeListModel',
  args: {
    userList,
    label: 'All Employees',
    ListTitle: 'Select an Employee',
  },
}

export const EmployeeListModelStory: FC<EmployeeListModelProps> = ({
  userList,
  label,
  ListTitle,
}) => (
  <EmployeeListModel userList={userList} label={label} ListTitle={ListTitle} />
)
