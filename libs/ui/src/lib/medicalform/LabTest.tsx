import {
  MedicalFormBody,
  MedicalFormBottom,
  MedicalFormHeader,
  MedicalFormTitle,
} from '@pabau/ui'
import React, { FC, useEffect, useState } from 'react'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
import BasicElement from './BasicElement'
import MultiSelect from './MultiSelect'

interface P {
  selectedForm?: any
  handleSave?: () => void
  handleDelete?: () => void
}

const LabTest: FC<P> = ({ selectedForm, handleSave, handleDelete }) => {
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

  const optionLabels = [
    { id: 1, label: 'Accent Prime' },
    { id: 2, label: 'All-inclusive' },
    { id: 3, label: 'Botox' },
    { id: 4, label: 'Category (V)' },
    { id: 5, label: 'Class maggie' },
    { id: 6, label: 'CO2 Laser' },
    { id: 7, label: 'Consultation' },
    { id: 8, label: 'Cooltech' },
  ]
  return (
    <BasicElement>
      <MedicalFormHeader title="component settings" />
      <MedicalFormTitle
        iconUrl={labTestIcon}
        bgcolor="#FAAD14"
        title="Lab tests"
        desc="Description"
      />
      <MedicalFormBody>
        <MultiSelect title="Question" options={optionLabels} />
      </MedicalFormBody>
      <MedicalFormBottom
        saveFunc={saveFunc}
        deleteFunc={deleteFunc}
        needLeft={true}
      />
    </BasicElement>
  )
}

export default LabTest
