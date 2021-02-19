import React, { useEffect } from 'react'
import styles from './Lead-forms.module.less'
import { CheckCircleFilled } from '@ant-design/icons'
import confetti from 'canvas-confetti'
import { Input } from 'antd'

const { TextArea } = Input

const demoText = `<a
href=”https://www.capterra.com/reviews/140062/Pabau-CRM? utm_source=venfor&utm_medium=badge&utm_campaignn=capterra_reviews_badge”> <img border=”0” src=”https://assets.caoterra.com/badge/ee5fd76v=2099212&p=14006” /> </a>`
export const LeadFormResult: React.FC = () => {
  const randomInRange = (min, max) => {
    return Math.random() * (max - min) + min
  }

  useEffect(() => {
    confetti({
      angle: randomInRange(55, 125),
      spread: randomInRange(50, 70),
      particleCount: randomInRange(50, 100),
      origin: { y: 0.6 },
    })
  }, [])

  return (
    <div className={styles.successAllContentCenter}>
      <div className={styles.textAllCenter}>
        <CheckCircleFilled className={styles.checkIconStyle} />
        <div className={styles.successTextStyle}>
          <h1>Success. We created your form</h1>
          <p>An embed form code:</p>
        </div>
        <div className={styles.successInput}>
          <div className={styles.succesBoxCenter}>
            <div className={styles.formSuccesBox}>
              <TextArea
                disabled
                className={styles.inputDisabledStyle}
                rows={8}
                defaultValue={demoText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LeadFormResult
