import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC } from 'react'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import BasicElement from './BasicElement'
import ElementTextBox from './ElementTextBox'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}
const TextBlock: FC<P> = ({ handleSave, handleDelete }) => {
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
        iconUrl={textBlockIcon}
        bgcolor="#6383F1"
        title="Text Block"
        desc="Create a text block for a section"
      />
      <MedicalFormBody>
        <ElementTextBox desc="Enter your text" title="Text" />
      </MedicalFormBody>
      <MedicalFormBottom
        saveFunc={saveFunc}
        deleteFunc={deleteFunc}
        needLeft={false}
      />
    </BasicElement>
  )
}

export default TextBlock
