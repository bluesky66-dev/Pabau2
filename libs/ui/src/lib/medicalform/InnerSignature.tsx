import React, { FC, useState } from 'react'
import signatureIcon from '../../assets/images/medicalform_signature.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

const InnerSignature: FC = () => {
  const [clicked, setClicked] = useState(false)
  return (
    <div
      className={
        clicked ? `${styles.mainBody} ${styles.activate}` : styles.mainBody
      }
      onClick={(e) => setClicked((e) => !e)}
    >
      <InnerMedicalFormEditIcon />
      <div className={styles.formItem} style={{ borderTop: 'none' }}>
        <InnerMedicalFormTitle
          iconUrl={signatureIcon}
          bgcolor="#F78561"
          title="Signature"
        />
      </div>
    </div>
  )
}

export default InnerSignature
