import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import longAnswerIcon from '../../assets/images/medicalform_longanswer.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'

interface P {
  selectedForm?: any
  handleSave?: () => void
  handleDelete?: () => void
}

const LongAnswer: FC<P> = ({ selectedForm, handleSave, handleDelete }) => {
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
        iconUrl={longAnswerIcon}
        bgcolor="#6383F1"
        title="Long answer"
        desc="Ask a question with a long answer"
      />
      <MedicalFormBody>
        <ElementQuestion
          desc="Enter your question"
          title="Question"
          value={form.txt1}
          onChange={onChange}
        />
        <ElementAdvanced />
      </MedicalFormBody>
      <MedicalFormBottom
        saveFunc={saveFunc}
        deleteFunc={deleteFunc}
        needLeft={true}
      />
    </BasicElement>
  )
}

export default LongAnswer
