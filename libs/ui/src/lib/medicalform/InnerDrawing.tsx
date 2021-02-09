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
  handleId?: number
  handlingSelectComponent?: (
    isActive?: boolean,
    handleId?: number,
    componentName?: string
  ) => void
}
const InnerDrawing: FC<P> = ({
  required,
  activate,
  handleId,
  handlingSelectComponent,
}) => {
  return (
    <InnerElement
      handleId={handleId}
      activate={activate}
      componentName="Drawing"
      handlingSelectComponent={handlingSelectComponent}
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
        <p style={{ textAlign: 'left' }}>
          Please drawer where we will be insering botox
        </p>
      </InnerMedicalFormBody>
    </InnerElement>
  )
}

export default InnerDrawing
