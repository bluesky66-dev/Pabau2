import React, { FC } from 'react'
import travelDesctinationIcon from '../../assets/images/medicalform_traveldestination.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
  activate?: boolean
  handlingSelectForm?: (isActive?: boolean, handleId?: string) => void
  formData?: any
}
const InnerTravelDestination: FC<P> = ({
  required,
  activate,
  handlingSelectForm,
  formData,
}) => {
  return (
    <InnerElement
      handleId={formData.id}
      activate={activate}
      handlingSelectForm={handlingSelectForm}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={travelDesctinationIcon}
        bgcolor="#FAAD14"
        title="Travel destination"
      />
      {formData.txt1 !== '' && (
        <InnerMedicalFormBody>
          <p>{formData.txt1}</p>
        </InnerMedicalFormBody>
      )}
    </InnerElement>
  )
}

export default InnerTravelDestination
