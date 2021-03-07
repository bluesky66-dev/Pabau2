import { MedicalFormPreview as MedicalFormPreviewPanel } from '@pabau/ui'
import React, { FC } from 'react'
import iconHome from '../../assets/images/share.svg'
import styles from './MedicalFormBuilder.module.less'

const data = [
  {
    step: 1,
    name: 'Check Details',
    imgPath: iconHome,
    isActive: true,
    index: 0,
  },
  {
    step: 2,
    name: 'History',
    imgPath: iconHome,
    isActive: true,
    index: 1,
  },
  {
    step: 3,
    name: 'Consent',
    imgPath: iconHome,
    isActive: false,
    index: 2,
  },
  {
    step: 4,
    name: 'Complete',
    imgPath: iconHome,
    isActive: false,
    index: 3,
  },
]

const MedicalFormPreview: FC = () => {
  return (
    <div className={styles.medicalFormEditPanel}>
      <MedicalFormPreviewPanel
        desktopTemp="https://fresha.com/"
        appTemp="https://fresha.com/"
        step={2}
        stepData={[]}
        user={{
          name: 'Sylvia Cole',
          date: 'December 24, 1992',
          src: '',
          tags: ['Botox'],
        }}
      />
    </div>
  )
}

export default MedicalFormPreview
