import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'

interface P {
  selectedForm?: any
  handleSave?: () => void
  handleDelete?: () => void
}

const Heading: FC<P> = ({ selectedForm, handleSave, handleDelete }) => {
  const [form, setForm] = useState(JSON.parse(JSON.stringify(selectedForm)))

  useEffect(() => {
    setForm(JSON.parse(JSON.stringify(selectedForm)))
  }, [selectedForm])

  const saveFunc = () => {
    console.log(form)
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
        iconUrl={headingIcon}
        bgcolor="#6383F1"
        title="Heading"
        desc="Create a heading for a section"
      />
      <MedicalFormBody>
        <ElementQuestion
          desc="Enter your question"
          title="Question"
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

export default Heading
