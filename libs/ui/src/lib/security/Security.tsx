import React, { FC } from 'react'
import {
  SecurityScore,
  SecurityTools,
  SecurityToolsItemInfo,
  Button,
} from '@pabau/ui'
import styles from './Security.module.less'

export interface SecurityProps {
  percent: number
  data: SecurityToolsItemInfo[]
}

export const Security: FC<SecurityProps> = ({ percent, data }) => {
  return (
    <div className={styles.SecurityContainer}>
      <div className={styles.securitySubContainer}>
        <div className={styles.securityHeaderContainer}>
          <p className={styles.tabTitle}>Security</p>
          <Button type="ghost">Manage Bulk Actions</Button>
        </div>
      </div>
      <div className={styles.securitySubContainer}>
        <div className={styles.securityScoreContainer}>
          <SecurityScore
            percent={percent}
            title1="Pabau Baseline Standart"
            title2="of the standart met"
            buttonTitle="How do we calculate this score?"
          />
        </div>
      </div>
      <div className={styles.securityToolsContainer}>
        <SecurityTools
          title="Security Tools"
          datasource={data}
          onItemClick={(val) => {
            console.log(val)
          }}
        />
      </div>
    </div>
  )
}

export default Security
