import React, { FC } from 'react'
import { TimePicker } from 'antd'
import { TimePickerProps } from 'antd/lib/time-picker'
import styles from './TimeInput.module.less'

/* eslint-disable-next-line */
interface TimeInputProps extends TimePickerProps {
  label?: string
}

export const TimeInput: FC<TimeInputProps> = ({ label = '', ...props }) => {
  return (
    <div className={styles.timeInputContainer}>
      <p>{label}</p>
      <TimePicker {...props} format="HH:mm" placeholder="--:--" />
    </div>
  )
}

export default TimeInput
