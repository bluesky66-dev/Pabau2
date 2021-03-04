import React, { FC } from 'react'
import { TabMenu } from '@pabau/ui'
import Modules from './Modules'
import Feature from './Feature'
import Reports from './Reports'
import styles from '../UserDetail.module.less'

const Permissions: FC = () => {
  return (
    <div className={styles.permissionTabWrapper}>
      <h4>Permissions</h4>
      <TabMenu
        className={styles.tabSetPermission}
        tabPosition={'top'}
        menuItems={['Modules', 'Features', 'Reports']}
      >
        <Modules />
        <Feature />
        <Reports />
      </TabMenu>
    </div>
  )
}

export default Permissions
