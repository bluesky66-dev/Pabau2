import React, { FC, useState, useEffect, ReactNode } from 'react'
import { Radio } from 'antd'
import styles from './RadioGroup.module.less'

interface RadioItem {
  title: string
}

export interface RadioGroupProps {
  label?: string
  icon?: ReactNode
  defaultValue: number
  radioItems: RadioItem[]
  onChange?(val): void
}

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  icon,
  defaultValue = 0,
  radioItems,
  onChange,
}) => {
  const [value, setValue] = useState(0)
  const onRadioChecked = (e) => {
    setValue(e.target.value)
    if (onChange) {
      onChange(radioItems[e.target.value])
    }
  }

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue, radioItems])

  return (
    <div className={styles.radioGroupContainer}>
      {label && (
        <p className={styles.radioGroupLabel}>
          <span>{label}</span>
          {icon && icon}
        </p>
      )}
      <Radio.Group onChange={(e) => onRadioChecked(e)} value={value}>
        {Array.isArray(radioItems) &&
          radioItems.length > 0 &&
          radioItems.map((item, index) => (
            <Radio key={item.title} value={index}>
              {item.title}
            </Radio>
          ))}
      </Radio.Group>
    </div>
  )
}

export default RadioGroup
