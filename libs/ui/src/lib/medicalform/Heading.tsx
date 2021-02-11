import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const Heading: FC<P> = ({ handleSave, handleDelete }) => {
  const saveFunc = () => {
    handleSave?.()
  }

  const deleteFunc = () => {
    handleDelete?.()
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
      <MedicalFormBottom
        saveFunc={saveFunc}
        deleteFunc={deleteFunc}
        needLeft={false}
      />
    </BasicElement>
  )
}

export default Heading
