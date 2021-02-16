import { MedicalFormTypes } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import SettingElement from '../medicalform/SettingElement'
import styles from './RightSidebar.module.less'

interface P {
  selectedForm: MedicalFormTypes
  component: string
  formType: string
  display: boolean
  handlingFormSetting?: (componentID?: string) => void
  handlingDeleteForm?: (componentID?: string) => void
}

const RightSidebar: FC<P> = ({
  selectedForm,
  component,
  formType,
  display,
  handlingFormSetting,
  handlingDeleteForm,
}) => {
  const [isVisible, setIsVisible] = useState(display)

  useEffect(() => {
    setIsVisible(display)
  }, [display])

  const showStyle = {
    right: '0px',
  }
  const hideStyle = {
    right: '-100%',
  }
  const handleSave = () => {
    setIsVisible(false)
    handlingFormSetting?.('')
  }
  const handleDelete = () => {
    setIsVisible(false)
    handlingDeleteForm?.(selectedForm?.id)
  }

  return (
    <div className={styles.sidebarMain}>
      <div
        className={styles.componentDiv}
        style={isVisible ? showStyle : hideStyle}
      >
        <SettingElement
          type={formType}
          component={component}
          selectedForm={selectedForm}
          handleSave={handleSave}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  )
}

export default RightSidebar
