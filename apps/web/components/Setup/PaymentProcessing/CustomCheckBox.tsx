import React, { FC, useState, useEffect } from 'react'
import styles from './index.module.less'
import checkboxOutlined from '../../../assets/images/checkbox-outlined.svg'

interface P {
  checked?: boolean
  disabled?: boolean
  label?: string
  value?: string
  onChange?(val): void
}

const CustomCheckBox: FC<P> = ({
  checked = false,
  disabled = false,
  label = '',
  value = '',
  onChange = () => true,
}) => {
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    setIsChecked(checked)
  }, [checked])

  const onClick = () => {
    if (!disabled) {
      onChange(!isChecked ? value : null)
      setIsChecked(!isChecked)
    }
  }

  return (
    <div className={styles.customCheckbox} onClick={onClick}>
      {isChecked ? (
        <img src={checkboxOutlined} alt="check outlined" />
      ) : (
        <div className={styles.notChecked} />
      )}
      {label && <span>{label}</span>}
    </div>
  )
}

export default CustomCheckBox
