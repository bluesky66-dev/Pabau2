import React, { FC } from 'react'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
import BaiscElement from './BaiscElement'
import MedicalFormBody from './MedicalFormBody'
import MedicalFormBottom from './MedicalFormBottom'
import MedicalFormHeader from './MedicalFormHeader'
import MedicalFormTitle from './MedicalFormTitle'
import MultiSelect from './MultiSelect'

const LabTest: FC = () => {
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
    <BaiscElement>
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
      <MedicalFormBottom needLeft={true} />
    </BaiscElement>
  )
}

export default LabTest
