import {
  CheckCircleFilled,
  CheckCircleTwoTone,
  EyeInvisibleOutlined,
} from '@ant-design/icons'
import { Input, Popover } from 'antd'
import React, { PropsWithChildren, useState } from 'react'
import styles from './PasswordWithHelper.module.less'

/* eslint-disable-next-line */

interface PasswordWithHelperProps {
  stength?: number
  width?: string
  onChange?: (value: string) => void
}

export function PasswordWithHelper({
  width,
  onChange,
}: PropsWithChildren<PasswordWithHelperProps>): JSX.Element {
  const [value, setValue] = useState('')
  const [strength, setStrength] = useState(0)
  const [color, setColor] = useState('red')

  const handleChange = (e) => {
    let strengthRank = 0
    const val = e.target.value
    if (val.length > 7) strengthRank++
    if (hasNumber(val)) strengthRank++
    if (hasUpperLower(val)) strengthRank++
    if (hasSpecial(val)) strengthRank++

    if (strengthRank === 1) setColor('red')
    if (strengthRank === 2) setColor('#faad14')
    if (strengthRank === 3) setColor('#6699cc')
    if (strengthRank === 4) setColor('green')

    setStrength(strengthRank)
    setValue(e.target.value)
    onChange?.(e.target.value)
  }

  const hasNumber = (value) => {
    return /\d/.test(value)
  }
  const hasUpperLower = (value) => {
    return /(?=.*[a-z])(?=.*[A-Z])/.test(value)
  }
  const hasSpecial = (value) => {
    return /[^\dA-Za-z]/.test(value)
  }

  const content = (
    <>
      <div className={styles.helperPhase}>
        <p>
          {value.length > 7 ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>
            Eight or more characters
          </span>
        </p>
        <p>
          {hasUpperLower(value) ? (
            <CheckCircleTwoTone />
          ) : (
            <CheckCircleFilled />
          )}
          <span className={styles.helperPhaseStep}>
            Uppercase & lowercase characters
          </span>
        </p>
        <p>
          {hasNumber(value) ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>At least one number</span>
        </p>
        <p>
          {hasSpecial(value) ? <CheckCircleTwoTone /> : <CheckCircleFilled />}
          <span className={styles.helperPhaseStep}>
            At least one special character
          </span>
        </p>
      </div>
      <div className={styles.helperStrength}>
        <div className={styles.strengthStart}>Strength</div>
        <div className={styles.strengthEnd} style={{ color: color }}>
          {strength === 1
            ? 'Week'
            : strength === 2
            ? 'Fair'
            : strength === 3
            ? 'Good'
            : strength === 4
            ? 'Strong'
            : ''}
        </div>
      </div>
      <div className={styles.helperPercent}>
        <div
          className={styles.helperPercentStepPass}
          style={{ borderBottom: `3px solid ${color}` }}
        />
        <div
          className={styles.helperPercentStepPass}
          style={{ borderBottom: `3px solid ${color}` }}
        />
        <div
          className={styles.helperPercentStepPass}
          style={{ borderBottom: `3px solid ${color}` }}
        />
        <div
          className={styles.helperPercentStepPass}
          style={{ borderBottom: `3px solid ${color}` }}
        />
      </div>
    </>
  )
  return (
    <Popover placement="right" content={content}>
      <Input.Password
        value={value}
        placeholder="New password"
        iconRender={(visible) => <EyeInvisibleOutlined />}
        style={{ width: width }}
        onChange={handleChange}
      />
    </Popover>
  )
}

export default PasswordWithHelper
