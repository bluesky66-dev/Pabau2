import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useState } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormError from './MedicalFormError'
import Options from './Options'

interface P {
  handleSave?: () => void
  handleDelete?: () => void
}

const Dropdown: FC<P> = ({ handleSave, handleDelete }) => {
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
        iconUrl={dropdownIcon}
        bgcolor="#65CD98"
        title="Dropdown"
        desc="A list of options that can be ticked"
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

export default Dropdown
