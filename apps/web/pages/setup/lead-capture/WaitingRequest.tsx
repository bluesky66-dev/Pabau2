import React from 'react'
import styles from './lead-setting.module.less'
import { Button } from '@pabau/ui'
import { Progress, Image } from 'antd'
import ErrorImage from '../../../assets/images/error.png'

interface LeadTestWaitingInterface {
  progressStatus?: number
  triggerRequest: boolean
  triggerError: boolean
}

export const LeadTestWaiting: React.FC<LeadTestWaitingInterface> = ({
  progressStatus = 75,
  triggerRequest,
  triggerError,
}) => {
  return (
    <>
      {triggerRequest && (
        <div className={styles.awaitingRequest}>
          <div>
            <div className={styles.iconCenter}>
              <Progress
                type="circle"
                percent={progressStatus}
                showInfo={false}
                width={72}
              />
            </div>
            <div className={styles.awaitingHeadingStyle}>
              <h1>Awaiting Request</h1>
              <p>
                Please submit your request to Pabau. Your lead will appear{' '}
                <br />
                here once we have received.
              </p>
            </div>
          </div>
        </div>
      )}

      {triggerError && (
        <div className={styles.allContentCenter}>
          <div>
            <div className={styles.imageCenter}>
              <Image src={ErrorImage} />
            </div>
            <div className={styles.awaitingHeadingStyle}>
              <h1>No request found</h1>
              <p>There were no requests found.</p>
            </div>
            <div className={styles.tryAgainButton}>
              <Button className={styles.tryAgainBtn}>Test trigger</Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LeadTestWaiting
