import React, { FC } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import innerDrawingIcon from '../../assets/images/medicalform_innerdrawing.svg'
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
const InnerDrawing: FC<P> = ({
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
        iconUrl={drawingIcon}
        bgcolor="#F78561"
        title="Drawing"
      />
      <InnerMedicalFormBody>
        <img
          style={{
            width: '300px',
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
          src={innerDrawingIcon}
          alt=""
        />
        {formData.txt1 !== '' && (
          <p style={{ textAlign: 'left' }}>{formData.txt1}</p>
        )}
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerDrawing
