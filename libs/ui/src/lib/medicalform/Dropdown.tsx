import React, { FC, useState } from 'react'
import dropdownIcon from '../../assets/images/medicalform_dropdown.svg'
import BasicElement from './BasicElement'
import ElementAdvanced from './ElementAdvanced'
import ElementQuestion from './ElementQuestion'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormError from './MedicalFormError'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'
import Options from './Options'

interface P {
  hideSideBar?: () => void
}

const Dropdown: FC<P> = ({ hideSideBar }) => {
  const [addedItems, setAddedItems] = useState(0)
  const [errMsg, setErrMsg] = useState('')
  const eventhandler = (count) => {
    setAddedItems(count)
    setErrMsg('')
  }

  const saveFunc = () => {
    if (hideSideBar && addedItems > 0) {
      setErrMsg('')
      hideSideBar()
    } else {
      setErrMsg('Please add an option')
    }
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
      <MedicalFormBottom saveFunc={saveFunc} needLeft={true} />
    </BasicElement>
  )
}

export default Dropdown
