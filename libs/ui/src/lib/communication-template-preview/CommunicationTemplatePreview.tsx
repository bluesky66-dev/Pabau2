import { Smstext } from '@pabau/ui'
import { Button, Card } from 'antd'
import React, { FC } from 'react'

import styles from './CommunicationTemplatePreview.module.less'

/* eslint-disable-next-line */
export interface CommunicationTemplatePreviewProps {}

export const CommunicationTemplatePreview: FC<CommunicationTemplatePreviewProps> = () => {
  const btn = <Button className={styles.sendButton}>{'Send Test SMS'}</Button>
  return (
    <div className={styles.previewContainer}>
      <Card title="Example Message" extra={btn}>
        <div className={styles.templatePreview}>
          <Smstext
            smsMessage={
              'Hi Kirsty, this is a friendly reminder about your appointment with M-A Hair Dressing for Mon, Nov 16 at 11:00am. Manage booking: [Appointment link] (NO REPLY)'
            }
          />
        </div>
      </Card>
    </div>
  )
}

export default CommunicationTemplatePreview
