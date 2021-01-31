import { Button, ButtonTypes } from '@pabau/ui'
import React, { FC, useState } from 'react'
import labTestIcon from '../../assets/images/medicalform_labtest.svg'
import styles from './InnerMedicalForm.module.less'
import InnerMedicalFormEditIcon from './InnerMedicalFormEditIcon'
import InnerMedicalFormRequired from './InnerMedicalFormRequired'
import InnerMedicalFormTitle from './InnerMedicalFormTitle'

interface P {
  required?: boolean
}
const InnerLabTest: FC<P> = ({ required }) => {
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
            iconUrl={labTestIcon}
            bgcolor="#FAAD14"
            title="Lab tests"
          />
        </div>
        <div className={styles.formItem}>
          <div className={styles.formCommon}>
            <Button type={ButtonTypes.default} size="small">
              Blood Test Group
            </Button>
            <Button
              type={ButtonTypes.default}
              size="small"
              style={{ marginLeft: '10px' }}
            >
              TL Profile Group
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InnerLabTest
