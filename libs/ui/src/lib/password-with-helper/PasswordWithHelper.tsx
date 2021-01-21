import { CheckCircleFilled, CheckCircleTwoTone, EyeInvisibleOutlined } from '@ant-design/icons'
import { Input, Popover } from 'antd'
import React, { PropsWithChildren } from 'react'
import styles from './PasswordWithHelper.module.less'

/* eslint-disable-next-line */

export interface PasswordWithHelperProps {
  stength?: number
  width?: string
}

export function PasswordWithHelper({
  stength,
  width,
}: PropsWithChildren<PasswordWithHelperProps>): JSX.Element {
  const content = (
    <>
      <div className={styles.helperPhase}>
        <p>
          {stength && stength >= 1 ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>Eight or more characters</span>
        </p>
        <p>
          {stength && stength >= 2 ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>Uppercase & lowercase characters</span>
        </p>
        <p>
          {stength && stength >= 3 ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>At least one number</span>
        </p>
        <p>
          {stength && stength >= 4 ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>At least one special character</span>
        </p>
      </div>
      <div className={styles.helperStrength}>
        <div className={styles.strengthStart}>Strngth</div>
        <div className={styles.strengthEnd}>Good</div>
      </div>
      <div className={styles.helperPercent}>
        <div
          className={
            stength && stength >= 1 ? styles.helperPercentStepPass : styles.helperPercentStepNoPass
          }
        ></div>
        <div
          className={
            stength && stength >= 2 ? styles.helperPercentStepPass : styles.helperPercentStepNoPass
          }
        ></div>
        <div
          className={
            stength && stength >= 3 ? styles.helperPercentStepPass : styles.helperPercentStepNoPass
          }
        ></div>
        <div
          className={
            stength && stength >= 4 ? styles.helperPercentStepPass : styles.helperPercentStepNoPass
          }
        ></div>
      </div>
    </>
  )
  return (
    <Popover placement="right" content={content}>
      <Input.Password
        placeholder="New password"
        iconRender={(visible) => <EyeInvisibleOutlined />}
        style={{ width: width }}
      />
    </Popover>
  )
}

export default PasswordWithHelper
