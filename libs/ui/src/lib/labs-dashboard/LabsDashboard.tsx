import React, { FC, useState } from 'react'
import { Switch } from '@pabau/ui'
import { Card } from 'antd'
import styles from './LabsDashboard.module.less'

/* eslint-disable-next-line */
export interface LabsDashboardProps {}

export const LabsDashboard: FC<LabsDashboardProps> = ({ ...props }) => {
  const [topBannerVisibility, setTopBannerVisibility] = useState(true)

  const LabsDashboardTopBanner = () => {
    return (
      <div className={styles.topBanner}>
        <a
          onClick={() => {
            setTopBannerVisibility(
              (topBannerVisibility) => !topBannerVisibility
            )
          }}
        >
          &#10005;
        </a>
        <div className={styles.dataDiv}>
          <h3>Integrate your Lab</h3>
          <p>
            We noticed that you are processing lab results, however have not
            setup integration for “UD Labs”. To receive these automatically.
            Just have your lab provider send those results to
            labs+482@pabau.com, and then you can automatically match the results
            against the patient.
          </p>
        </div>
        <div className={styles.paperIcon}>
          <div className="miniPaperDiv">
            <div className="miniPaperSwitch">
              <Switch
                defaultChecked={true}
                checked={true}
                style={{ border: '1px solid red' }}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.labsDashboard}>
      {topBannerVisibility && <div>{LabsDashboardTopBanner()}</div>}
      <div></div>
    </div>
  )
}

export default LabsDashboard
