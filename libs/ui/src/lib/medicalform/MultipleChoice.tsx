import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useState } from 'react'
import multipleChoiceIcon from '../../assets/images/medicalform_multiplechoice.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormError from './MedicalFormError'
import MultiOptions from './MultiOptions'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const MultipleChoice: FC<P> = ({ handleSave, handleDelete }) => {
  const [addedItems, setAddedItems] = useState(0)
  const [errMsg, setErrMsg] = useState('')
  const eventhandler = (count) => {
    setAddedItems(count)
    setErrMsg('')
  }

  const deleteFunc = () => {
    handleDelete?.()
  }

  const saveFunc = () => {
    if (handleSave && addedItems > 0) {
      setErrMsg('')
      handleSave()
    } else {
      setErrMsg('Please add an option')
    }
  }
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={multipleChoiceIcon}
        bgcolor="#65CD98"
        title="Multiple choices"
        desc="Ask for a several choices"
      />
      <MedicalFormBody>
        <ElementQuestion desc="Enter your question" title="Question" />
        <MultiOptions onChange={eventhandler} />
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

export default MultipleChoice
