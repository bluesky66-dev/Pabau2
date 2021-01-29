import React, { FC } from 'react'
import styles from './RightSidebar.module.less'

interface P {
  componentName?: string
  display?: string
}

const RightSidebar: FC<P> = ({ componentName, display }) => {
  const showStyle = {
    right: '0px',
  }
  const hideStyle = {
    right: '-400px',
  }
  return (
    <div className={styles.sidebarMain}>
      <div
        className={styles.componentDiv}
        style={display === 'show' ? showStyle : hideStyle}
      >
        {componentName}
      </div>
    </div>
  )
}

export default RightSidebar
