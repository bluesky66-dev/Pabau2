import React, { FC, useState } from 'react'
import styles from './InnerMedicalForm.module.less'

const InnerElement: FC = (props) => {
  const [clicked, setClicked] = useState(false)
  return (
    <div
      className={
        clicked ? `${styles.mainBorder} ${styles.activate}` : styles.mainBorder
      }
    >
      <div
        className={
          clicked ? `${styles.mainBody} ${styles.activate}` : styles.mainBody
        }
        onClick={(e) => setClicked((e) => !e)}
      >
        {props.children}
      </div>
    </div>
  )
}

export default InnerElement
