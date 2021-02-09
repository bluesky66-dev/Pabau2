import React, { FC } from 'react'
import styles from './LeftSidebarMedicalForm.module.less'

const LeftSidebarElement: FC = (props) => {
  return <div className={styles.mainBody}>{props.children}</div>
}

export default LeftSidebarElement
