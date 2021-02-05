// import { MeicalForm } from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import Conditions from '../medicalform/Conditions'
import Dob from '../medicalform/Dob'
import Drawing from '../medicalform/Drawing'
import Dropdown from '../medicalform/Dropdown'
import Drugs from '../medicalform/Drugs'
import Heading from '../medicalform/Heading'
import LabTest from '../medicalform/LabTest'
import LongAnswer from '../medicalform/LongAnswer'
import MultipleChoice from '../medicalform/MultipleChoice'
import ShortAnswer from '../medicalform/ShortAnswer'
import Signature from '../medicalform/Signature'
import SingleChoice from '../medicalform/SingleChoice'
import TravelDestination from '../medicalform/TravelDestination'
import VaccineHistory from '../medicalform/VaccineHistory'
import VaccineScheduler from '../medicalform/VaccineScheduler'
import styles from './RightSidebar.module.less'

interface P {
  componentName?: string
  display?: boolean
}

const RightSidebar: FC<P> = ({ componentName, display }) => {
  const [isVisible, setIsVisible] = useState(display)

  useEffect(() => {
    setIsVisible(display)
  }, [display])

  const showStyle = {
    right: '0px',
  }
  const hideStyle = {
    right: '-400px',
  }
  const hideSideBar = () => {
    setIsVisible(false)
  }

  return (
    <div className={styles.sidebarMain}>
      <div
        className={styles.componentDiv}
        style={isVisible ? showStyle : hideStyle}
      >
        {componentName === 'Conditions' && (
          <Conditions hideSideBar={hideSideBar} />
        )}
        {componentName === 'Dob' && <Dob hideSideBar={hideSideBar} />}
        {componentName === 'Drawing' && <Drawing hideSideBar={hideSideBar} />}
        {componentName === 'Dropdown' && <Dropdown hideSideBar={hideSideBar} />}
        {componentName === 'Drugs' && <Drugs hideSideBar={hideSideBar} />}
        {componentName === 'LabTest' && <LabTest hideSideBar={hideSideBar} />}
        {componentName === 'LongAnswer' && (
          <LongAnswer hideSideBar={hideSideBar} />
        )}
        {componentName === 'Heading' && <Heading hideSideBar={hideSideBar} />}
        {componentName === 'MultipleChoice' && (
          <MultipleChoice hideSideBar={hideSideBar} />
        )}
        {componentName === 'ShortAnswer' && (
          <ShortAnswer hideSideBar={hideSideBar} />
        )}
        {componentName === 'Signature' && (
          <Signature hideSideBar={hideSideBar} />
        )}
        {componentName === 'SingleChoice' && (
          <SingleChoice hideSideBar={hideSideBar} />
        )}
        {componentName === 'TravelDestination' && (
          <TravelDestination hideSideBar={hideSideBar} />
        )}
        {componentName === 'VaccineHistory' && (
          <VaccineHistory hideSideBar={hideSideBar} />
        )}
        {componentName === 'VaccineScheduler' && (
          <VaccineScheduler hideSideBar={hideSideBar} />
        )}
      </div>
    </div>
  )
}

export default RightSidebar
