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
}
const InnerLabTest: FC<P> = ({ required }) => {
  return (
    <InnerElement>
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
