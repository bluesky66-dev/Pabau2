import React, { FC } from 'react'
import styles from './MedicalForm.module.less'

const CustomElement: FC = (props) => {
  return <div className={styles.mainBody}>{props.children}</div>
}

export default CustomElement
