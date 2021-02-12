import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import BasicElement from './BasicElement'
import ElementQuestion from './ElementQuestion'
import FileUpload from './FileUpload'

interface P {
  selectedForm?: any
  handleSave?: () => void
  handleDelete?: () => void
}

const Drawing: FC<P> = ({ selectedForm, handleSave, handleDelete }) => {
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
        iconUrl={drawingIcon}
        bgcolor="#F78561"
        title="Drawing"
        desc="Draw on an image or a photo"
      />
      <MedicalFormBody>
        <ElementQuestion
          desc="Enter your title"
          title="Title"
          value={form.txt1}
          onChange={onChange}
        />
        <FileUpload
          title="Image"
          desc="Click or drag file to this area to upload"
        />
      </MedicalFormBody>
      <MedicalFormBottom
        saveFunc={saveFunc}
        deleteFunc={deleteFunc}
        needLeft={true}
      />
    </BasicElement>
  )
}

export default Drawing
