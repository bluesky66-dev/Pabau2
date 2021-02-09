import React, { FC } from 'react'
import vaccineSchedulerIcon from '../../assets/images/medicalform_vaccinescheduler.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
  activate?: boolean
  handleId?: number
  handlingSelectComponent?: (
    isActive?: boolean,
    handleId?: number,
    componentName?: string
  ) => void
}
const InnerVaccineScheduler: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="VaccineScheduler"
      handlingSelectComponent={handlingSelectComponent}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={vaccineSchedulerIcon}
        bgcolor="#FAAD14"
        title="Vaccine scheduler"
      />
    </InnerElement>
  )
}

export default InnerVaccineScheduler
