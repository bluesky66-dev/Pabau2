import React, { FC } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import LeftSidebarElement from './LeftSidebarElement'
import LeftSidebarMedicalFormTitle from './LeftSidebarMedicalFormTitle'

const LeftSidebarBasicDrawing: FC = () => {
  return (
    <LeftSidebarElement>
      <LeftSidebarMedicalFormTitle
        iconUrl={drawingIcon}
        bgcolor="#F78561"
        title="Drawing"
        desc="Draw on an image or a photo"
      />
    </LeftSidebarElement>
  )
}

export default LeftSidebarBasicDrawing
