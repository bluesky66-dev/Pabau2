import React, { FC } from 'react'
import LeftSidebarBasicCheckBox from '../medicalform/LeftSidebarBasicCheckBox'
import LeftSidebarBasicDrawing from '../medicalform/LeftSidebarBasicDrawing'
import LeftSidebarBasicDropDown from '../medicalform/LeftSidebarBasicDropDown'
import LeftSidebarBasicDrugs from '../medicalform/LeftSidebarBasicDrugs'
import LeftSidebarBasicHeading from '../medicalform/LeftSidebarBasicHeading'
import LeftSidebarBasicLabTest from '../medicalform/LeftSidebarBasicLabTest'
import LeftSidebarBasicLongAnswer from '../medicalform/LeftSidebarBasicLongAnswer'
import LeftSidebarBasicMedicalConditions from '../medicalform/LeftSidebarBasicMedicalConditions'
import LeftSidebarBasicShortAnswer from '../medicalform/LeftSidebarBasicShortAnswer'
import LeftSidebarBasicSignature from '../medicalform/LeftSidebarBasicSignature'
import LeftSidebarBasicSingleChoice from '../medicalform/LeftSidebarBasicSingleChoice'
import LeftSidebarBasicTextBlock from '../medicalform/LeftSidebarBasicTextBlock'
import LeftSidebarBasicTravelDestination from '../medicalform/LeftSidebarBasicTravelDestination'
import LeftSidebarBasicVaccineHistory from '../medicalform/LeftSidebarBasicVaccineHistory'
import LeftSidebarBasicVaccineScheduler from '../medicalform/LeftSidebarBasicVaccineScheduler'
import MedicalFormLeftSidebarDivider from './MedicalFormLeftSidebarDivider'

const MedicalFormLeftSidebarBasicPanels: FC = () => {
  return (
    <div>
      <MedicalFormLeftSidebarDivider title="general" />
      <LeftSidebarBasicHeading />
      <LeftSidebarBasicShortAnswer />
      <LeftSidebarBasicLongAnswer />
      <LeftSidebarBasicTextBlock />
      <MedicalFormLeftSidebarDivider title="choices" />
      <LeftSidebarBasicSingleChoice />
      <LeftSidebarBasicCheckBox />
      <LeftSidebarBasicDropDown />
      <MedicalFormLeftSidebarDivider title="other" />
      <LeftSidebarBasicDrawing />
      <LeftSidebarBasicSignature />
      <MedicalFormLeftSidebarDivider title="medical" />
      <LeftSidebarBasicMedicalConditions />
      <LeftSidebarBasicDrugs />
      <LeftSidebarBasicTravelDestination />
      <LeftSidebarBasicVaccineScheduler />
      <LeftSidebarBasicVaccineHistory />
      <LeftSidebarBasicLabTest />
    </div>
  )
}

export default MedicalFormLeftSidebarBasicPanels
