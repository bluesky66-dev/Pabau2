import React, { FC } from 'react'
import backImg from '../../assets/images/medicalform_back.svg'
import backgroundImg from '../../assets/images/medicalform_builder.svg'
import styles from './MedicalFormBuilder.module.less'

const MedicalFormEditMain: FC = () => {
  return (
    <div className={styles.medicalFormEditMainPanel}>
      <img src={backgroundImg} alt="" />
      <h1>Start building your form with components</h1>
      <span>Drag and drop components from the left menu here</span>
      <div className={styles.medicalFormEditDesc}>
        <img src={backImg} alt="" />
        <span>Place your first component here</span>
      </div>
    </div>
  )
}

export default MedicalFormEditMain
