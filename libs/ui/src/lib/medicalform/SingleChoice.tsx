import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormError from './MedicalFormError'
import Options from './Options'

// eslint-disable-next-line no-use-before-define
interface P {
  selectedForm?: any
  handleSave?: () => void
  handleDelete?: () => void
}

const SingleChoice: FC<P> = ({ selectedForm, handleSave, handleDelete }) => {
  const [addedItems, setAddedItems] = useState(0)
  const [errMsg, setErrMsg] = useState('')
  const [form, setForm] = useState(JSON.parse(JSON.stringify(selectedForm)))

  useEffect(() => {
    setForm(JSON.parse(JSON.stringify(selectedForm)))
  }, [selectedForm])

  const eventhandler = (addedItems) => {
    setAddedItems(addedItems.length)
    const tempForm = { ...form, arr1: addedItems }
    setForm(tempForm)
    setErrMsg('')
  }

  const saveFunc = () => {
    if (handleSave && addedItems > 0) {
      setErrMsg('')
      selectedForm.txt1 = form.txt1
      selectedForm.arr1 = form.arr1
      handleSave()
    } else {
      setErrMsg('Please add an option')
    }
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
        iconUrl={singleChoiceIcon}
        bgcolor="#65CD98"
        title="Single choice"
        desc="Ask for a single choice"
      />
      <MedicalFormBody>
        <ElementQuestion
          desc="Enter your question"
          title="Question"
          value={form.txt1}
          onChange={onChange}
        />
        <Options onChange={eventhandler} paramItems={selectedForm.arr1} />
        {errMsg !== '' && <MedicalFormError errMsg={errMsg} />}
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

export default SingleChoice
