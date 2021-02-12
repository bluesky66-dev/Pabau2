import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import BasicElement from './BasicElement'
import ElementTextBox from './ElementTextBox'

interface P {
  selectedForm?: any
  handleSave?: () => void
  handleDelete?: () => void
}
const TextBlock: FC<P> = ({ selectedForm, handleSave, handleDelete }) => {
  const [form, setForm] = useState(JSON.parse(JSON.stringify(selectedForm)))

  useEffect(() => {
    setForm(JSON.parse(JSON.stringify(selectedForm)))
  }, [selectedForm])

  const saveFunc = () => {
    selectedForm.txt1 = form.txt1
    handleSave?.()
  }

  const deleteFunc = () => {
    handleDelete?.()
  }

  const onChange = (value) => {
    const tempForm = { ...form, txt1: value }
    setForm(tempForm)
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
        <ElementTextBox
          desc="Enter your text"
          title="Text"
          value={form.txt1}
          onChange={onChange}
        />
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
