import React, { FC } from 'react'

import { Button } from '@pabau/ui'
import styles from './UserDetail.module.less'

const PersonalDetail: FC = () => {
  return (
    <div>
      <div className={styles.personalDetailHead}>
        <h2>Personal Details</h2>
        <div className={styles.personalDetailHeadBtn}>
          <Button className={styles.personalBtn} type={'default'}>
            Send reset password email
          </Button>
          <Button className={styles.personalBtn} type={'default'}>
            Save changes
          </Button>
        </div>
      </div>
    </div>
  )
}

export default PersonalDetail
