import React, { FC } from 'react'
import drugsIcon from '../../assets/images/medicalform_drugs.svg'
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
const InnerDrugs: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="Drugs"
      handlingSelectComponent={handlingSelectComponent}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={drugsIcon}
        bgcolor="#FAAD14"
        title="Drugs"
      />
    </InnerElement>
  )
}

export default InnerDrugs
