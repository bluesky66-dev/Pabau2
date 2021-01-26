import React, { FC } from 'react'
import styles from './Rightsidebar.module.less'

/* eslint-disable-next-line */
export interface RightsidebarProps {
  componetName?: string
  display?: string
}

const Rightsidebar: FC<RightsidebarProps> = ({ componetName, display, ...props }) => {
  const showStyle = {
    right: '0px',
  }
  const hideStyle = {
    right: '-400px',
  }
  return (
    <div className={styles.sidebarMain}>
      <div className={styles.componentDiv} style={display === 'show' ? showStyle : hideStyle}>
        {componetName}
      </div>
    </div>
  )
}

export default Rightsidebar
