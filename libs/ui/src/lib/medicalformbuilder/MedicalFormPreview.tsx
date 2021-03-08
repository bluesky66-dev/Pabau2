import { MedicalFormPreview as MedicalFormPreviewPanel } from '@pabau/ui'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  refreshPreview: boolean
}
const MedicalFormPreview: FC<P> = ({ refreshPreview }) => {
  return (
    <div className={styles.medicalFormEditPanel}>
      <MedicalFormPreviewPanel
        desktopTemp="https://fresha.com/"
        appTemp="https://fresha.com/"
        step={2}
        stepData={[]}
        visiblePreviewButton={!refreshPreview}
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
