import React, { FC } from 'react'
import ReportsPermissions, {
  ReportsPermissionsProps,
} from './ReportsPermissions'
import { title, subtitle, data, permissions } from './data'

export default {
  component: ReportsPermissions,
  title: 'UI/Reports Permissions',
  args: {},
  argTypes: {},
  actions: { argTypesRegex: '^on[A-Z].*' },
}

export const ReportsPermissionsStory: FC<ReportsPermissionsProps> = ({
  ...args
}) => (
  <ReportsPermissions
    data={data}
    permissions={permissions}
    pageTitle={title}
    subTitle={subtitle}
  />
)
