import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle
} from '@pabau/ui'
import React, { FC, useState } from 'react'
import singleChoiceIcon from '../../assets/images/medicalform_singlechoice.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormError from './MedicalFormError'
import Options from './Options'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const SingleChoice: FC<P> = ({ handleSave, handleDelete }) => {
  const [addedItems, setAddedItems] = useState(0)
  const [errMsg, setErrMsg] = useState('')
  const eventhandler = (count) => {
    setAddedItems(count)
    setErrMsg('')
  }

  const saveFunc = () => {
    if (handleSave && addedItems > 0) {
      setErrMsg('')
      handleSave()
    } else {
      setErrMsg('Please add an option')
    }
  }
  const deleteFunc = () => {
    handleDelete?.()
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
        <ElementQuestion desc="Enter your question" title="Question" />
        <Options onChange={eventhandler} />
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
