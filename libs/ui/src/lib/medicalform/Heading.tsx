import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'

interface P {
  hideSideBar?: () => void
}

const Heading: FC<P> = ({ hideSideBar }) => {
  const saveFunc = () => {
    if (hideSideBar) {
      hideSideBar()
    }
  }
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={headingIcon}
        bgcolor="#6383F1"
        title="Heading"
        desc="Create a heading for a section"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
      </MedicalFormBody>
      <MedicalFormBottom saveFunc={saveFunc} needLeft={false} />
    </BasicElement>
  )
}

export default Heading
