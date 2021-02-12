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

// eslint-disable-next-line no-use-before-define
interface P {
  selectedForm?: any
  display?: boolean
  handlingFormSetting?: (componentID?: string) => void
  handlingDeleteForm?: (componentID?: string) => void
}

const RightSidebar: FC<P> = ({
  selectedForm,
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
    handlingDeleteForm?.(selectedForm.id)
  }

  return (
    <div className={styles.sidebarMain}>
      <div
        className={styles.componentDiv}
        style={isVisible ? showStyle : hideStyle}
      >
        {selectedForm.formName === 'MedicalConditions' && (
          <Conditions
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'Dob' && (
          <Dob handleSave={handleSave} handleDelete={handleDelete} />
        )}
        {selectedForm.formName === 'Drawing' && (
          <Drawing
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'DropDown' && (
          <Dropdown
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'Drugs' && (
          <Drugs
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'LabTest' && (
          <LabTest
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'TextBlock' && (
          <TextBlock
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'LongAnswer' && (
          <LongAnswer
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'Heading' && (
          <Heading
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'MultipleChoice' && (
          <MultipleChoice
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'ShortAnswer' && (
          <ShortAnswer
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'Signature' && (
          <Signature
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'SingleChoice' && (
          <SingleChoice
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'TravelDestination' && (
          <TravelDestination
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'VaccineHistory' && (
          <VaccineHistory
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
        {selectedForm.formName === 'VaccineScheduler' && (
          <VaccineScheduler
            handleSave={handleSave}
            handleDelete={handleDelete}
            selectedForm={selectedForm}
          />
        )}
      </div>
    </div>
  )
}

export default RightSidebar
