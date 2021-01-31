import React, { FC, useState } from 'react'
import drawingIcon from '../../assets/images/medicalform_drawing.svg'
import innerDrawingIcon from '../../assets/images/medicalform_innerdrawing.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}

const InnerDrawing: FC<P> = ({ required }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <div
      className={
        clicked ? `${styles.mainBorder} ${styles.activate}` : styles.mainBorder
      }
    >
      <div
        className={
          clicked ? `${styles.mainBody} ${styles.activate}` : styles.mainBody
        }
        onClick={(e) => setClicked((e) => !e)}
      >
        {required && <InnerMedicalFormRequired />}
        <InnerMedicalFormEditIcon />
        <div className={styles.formItem} style={{ borderTop: 'none' }}>
          <InnerMedicalFormTitle
            iconUrl={drawingIcon}
            bgcolor="#F78561"
            title="Drawing"
          />
        </div>
        <div className={`${styles.formItem} ${styles.centerDiv}`}>
          <div className={styles.formCommon}>
            <img style={{ width: '300px' }} src={innerDrawingIcon} alt="" />
            <p style={{ textAlign: 'left' }}>
              Please drawer where we will be insering botox
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerDrawing
