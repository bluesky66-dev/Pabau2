import { MedicalFormPreview as MedicalFormPreviewPanel } from '@pabau/ui'
import React, { FC } from 'react'
import styles from './MedicalFormBuilder.module.less'

interface P {
  refreshPreview: boolean
  closePreviewDialog: () => void
}
const MedicalFormPreview: FC<P> = ({ refreshPreview, closePreviewDialog }) => {
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
        closePreviewDialog={closePreviewDialog}
      />
    </div>
  )
}

export default MedicalFormPreview
