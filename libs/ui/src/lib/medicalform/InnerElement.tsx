import React, { FC, useEffect, useState } from 'react'
import styles from './InnerMedicalForm.module.less'

interface P {
  handleId?: number
  activate?: boolean
  componentName?: string
  handlingSelectComponent?: (
    isActive?: boolean,
    handleId?: number,
    componentName?: string
  ) => void
}

const InnerElement: FC<P> = (props) => {
  const [clicked, setClicked] = useState(props.activate)
  useEffect(() => {
    setClicked(props.activate)
  }, [props.activate])

  const activeComponent = () => {
    if (props.handlingSelectComponent) {
      props.handlingSelectComponent(
        !clicked,
        props.handleId,
        props.componentName
      )
    }
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

export default InnerElement
