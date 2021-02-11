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
import TextBlock from '../medicalform/TextBlock'
import TravelDestination from '../medicalform/TravelDestination'
import VaccineHistory from '../medicalform/VaccineHistory'
import VaccineScheduler from '../medicalform/VaccineScheduler'
import styles from './RightSidebar.module.less'

interface P {
  componentName?: string
  display?: boolean
  handlingComponentSetting?: (
    componentName?: string,
    componentID?: string
  ) => void
}

const RightSidebar: FC<P> = ({
  componentName,
  display,
  handlingComponentSetting,
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
    handlingComponentSetting?.('', '')
  }
  const handleDelete = () => {
    setIsVisible(false)
  }

  return (
    <div className={styles.sidebarMain}>
      <div
        className={styles.componentDiv}
        style={isVisible ? showStyle : hideStyle}
      >
        {componentName === 'MedicalConditions' && (
          <Conditions handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'Dob' && (
          <Dob handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'Drawing' && (
          <Drawing handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'Dropdown' && (
          <Dropdown handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'Drugs' && (
          <Drugs handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'LabTest' && (
          <LabTest handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'TextBlock' && (
          <TextBlock handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'LongAnswer' && (
          <LongAnswer handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'Heading' && (
          <Heading handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'MultipleChoice' && (
          <MultipleChoice handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'ShortAnswer' && (
          <ShortAnswer handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'Signature' && (
          <Signature handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'SingleChoice' && (
          <SingleChoice handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'TravelDestination' && (
          <TravelDestination
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        )}
        {componentName === 'VaccineHistory' && (
          <VaccineHistory handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {componentName === 'VaccineScheduler' && (
          <VaccineScheduler
            handleSave={handleSave}
            handleDelete={handleDelete}
          />
        )}
      </div>
    </div>
  )
}

export default RightSidebar
