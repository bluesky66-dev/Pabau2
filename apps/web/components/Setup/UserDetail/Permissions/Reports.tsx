import React, { FC, useState } from 'react'
import { ReportsPermissions } from '@pabau/ui'
import {
  reportsPermission,
  reportPermissionsKeys,
} from '../../../../mocks/UserDetail'

const Reports: FC = () => {
  const [permission, setPermission] = useState<string[]>(reportPermissionsKeys)

  const handleChange = (permissionKey: string, checked: boolean) => {
    if (checked) {
      const data: string[] = permission
      data.push(permissionKey)
      setPermission([...data])
    } else {
      const data: string[] = permission.filter(
        (thread) => thread !== permissionKey
      )
      setPermission([...data])
    }
  }

  return (
    <ReportsPermissions
      data={reportsPermission}
      permissions={permission}
      pageTitle={'Report permissions'}
      subTitle={'Choose what reports Joseph Howard can view'}
      onChange={handleChange}
    />
  )
}

export default Reports
