import React, { useState, FC } from 'react'
import { Switch, Accordion } from '@pabau/ui'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'

import styles from './ReportsPermissions.module.less'

export type PermissionType = {
  key: string
  name: string
}

export type PermissionGroupType = {
  key: string
  name: string
  children?: PermissionType[]
}

/* eslint-disable-next-line */
export interface ReportsPermissionsProps {
  pageTitle: string
  subTitle: string
  permissions: string[]
  data: PermissionGroupType[]
  viewAll?: boolean
  onChange?: (permission: string, checked: boolean) => void
}

export const ReportsPermissions: FC<ReportsPermissionsProps> = ({
  pageTitle,
  subTitle,
  permissions,
  data,
  viewAll,
  onChange,
}) => {
  const [showAll, setShowAll] = useState(viewAll)

  return (
    <div className={styles.reportsPermissions}>
      <div className={styles.reportsPermissionsHeader}>
        <div className={styles.viewAll}>
          <span>
            View all reports&nbsp;
            <FontAwesomeIcon
              icon={Icons.faQuestionCircle}
              style={{ fontSize: '16px' }}
            />
          </span>
          <Switch
            checked={showAll}
            onChange={(checked) => setShowAll(checked)}
          />
        </div>
        <h3 className={styles.pageTitle}>{pageTitle}</h3>
        <div className={styles.subTitle}>
          <p>{subTitle}</p>
        </div>
      </div>

      <div className={styles.reportsPermissionsList}>
        {showAll && (
          <Accordion headerLabel="All Reports">
            <div className={styles.permissionGroup}>
              {data
                .reduce((acc, grp) => [...acc, ...(grp.children || [])], [])
                .map((item) => (
                  <div key={item.key} className={styles.permissionItem}>
                    <div className={styles.label}>{item.name}</div>
                    <div className={styles.permission}>
                      <Switch
                        defaultChecked={permissions.indexOf(item.key) !== -1}
                        onChange={(checked) => onChange?.(item.key, checked)}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </Accordion>
        )}
        {data.map((group) => (
          <Accordion key={group.key} headerLabel={group.name}>
            <div className={styles.permissionGroup}>
              {group.children?.map((item) => (
                <div key={item.key} className={styles.permissionItem}>
                  <div className={styles.label}>{item.name}</div>
                  <div className={styles.permission}>
                    <Switch
                      defaultChecked={permissions.indexOf(item.key) !== -1}
                      onChange={(checked) => onChange(item.key, checked)}
                    />
                  </div>
                </div>
              )) || null}
            </div>
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default ReportsPermissions
