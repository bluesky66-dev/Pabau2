import React, { FC, useState } from 'react'
import textBlockIcon from '../../assets/images/medicalform_textblock.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

const InnerTextBlock: FC = () => {
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
          iconUrl={textBlockIcon}
          bgcolor="#6383F1"
          title="Text block"
        />
      </div>
      <div className={styles.formItem}>
        <div className={styles.formCommon}>
          <p>
            At Day Space Wellington we believe you deserve to make the most of
            your me-time. To say no to stress and push pause on life. To relax,
            unwind, recharge and simply, live better.
          </p>
        </div>
      </div>
    </div>
  )
}

export default InnerTextBlock
