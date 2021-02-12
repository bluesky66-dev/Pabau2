import { Button, ButtonTypes } from '@pabau/ui'
import React, { FC } from 'react'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
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
const InnerLabTest: FC<P> = ({
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
        iconUrl={labTestIcon}
        bgcolor="#FAAD14"
        title="Lab tests"
      />

      <InnerMedicalFormBody>
        <Button type={ButtonTypes.default} size="small">
          Blood Test Group
        </Button>
        <Button
          type={ButtonTypes.default}
          size="small"
          style={{ marginLeft: '10px' }}
        >
          TL Profile Group
        </Button>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerLabTest
