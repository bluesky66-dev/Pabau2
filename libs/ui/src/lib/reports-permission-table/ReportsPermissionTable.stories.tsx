import React, { FC } from 'react'
import ReportsPermissionTable, {
  ReportsPermissionTableProps,
} from './ReportsPermissionTable'
import { title, subtitle, data, columns } from './data'

export default {
  component: ReportsPermissionTable,
  title: 'UI/Reports Permission Table',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const ReportsPermissionTableStory: FC<ReportsPermissionTableProps> = ({
  ...args
}) => (
  <ReportsPermissionTable
    dataSource={data}
    columns={columns}
    pageTitle={title}
    subTitle={subtitle}
  />
)
