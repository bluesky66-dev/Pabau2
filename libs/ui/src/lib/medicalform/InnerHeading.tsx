import React, { FC } from 'react'
import headingIcon from '../../assets/images/medicalform_heading.svg'
import InnerElement from './InnerElement'
import InnerMedicalFormBody from './InnerMedicalFormBody'
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
const InnerHeading: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="Heading"
      handlingSelectComponent={handlingSelectComponent}
    >
      {required && <InnerMedicalFormRequired />}
      <InnerMedicalFormEditIcon />
      <InnerMedicalFormTitle
        iconUrl={headingIcon}
        bgcolor="#6383F1"
        title="Heading"
      />
      <InnerMedicalFormBody>
        <p>Welcome to Day Spa Wellington</p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerHeading
