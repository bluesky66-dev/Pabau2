import React, { FC, useEffect, useState } from 'react'
import styles from './Inner.module.less'

interface P {
  handleId: string
  activate: boolean
  handlingSelectForm: (isActive?: boolean, handleId?: string) => void
}

const InnerMedicalForm: FC<P> = (props) => {
  const [clicked, setClicked] = useState(props.activate)
  useEffect(() => {
    setClicked(props.activate)
  }, [props.activate])

  const activeComponent = () => {
    props.handlingSelectForm?.(!clicked, props.handleId)
  }

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
        onClick={(e) => activeComponent()}
      >
        {props.children}
      </div>
    </div>
  )
}

export default InnerMedicalForm
