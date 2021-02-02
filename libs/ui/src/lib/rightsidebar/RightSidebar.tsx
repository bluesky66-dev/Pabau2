// import { MeicalForm } from '@pabau/ui'
import React, { FC } from 'react'
import Conditions from '../medicalform/Conditions'
import Dob from '../medicalform/Dob'
import Drawing from '../medicalform/Drawing'
import Dropdown from '../medicalform/Dropdown'
import Drugs from '../medicalform/Drugs'
import LabTest from '../medicalform/LabTest'
import LongAnswer from '../medicalform/LongAnswer'
import Heading from '../medicalform/MedicalForm'
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
        {componentName === 'Conditions' && <Conditions />}
        {componentName === 'Dob' && <Dob />}
        {componentName === 'Drawing' && <Drawing />}
        {componentName === 'Dropdown' && <Dropdown />}
        {componentName === 'Drugs' && <Drugs />}
        {componentName === 'LabTest' && <LabTest />}
        {componentName === 'LongAnswer' && <LongAnswer />}
        {componentName === 'Heading' && <Heading />}
        {componentName === 'MultipleChoice' && <MultipleChoice />}
        {componentName === 'ShortAnswer' && <ShortAnswer />}
        {componentName === 'Signature' && <Signature />}
        {componentName === 'SingleChoice' && <SingleChoice />}
        {componentName === 'TravelDestination' && <TravelDestination />}
        {componentName === 'VaccineHistory' && <VaccineHistory />}
        {componentName === 'VaccineScheduler' && <VaccineScheduler />}
      </div>
    </div>
  )
}

export default RightSidebar
