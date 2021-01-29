import React, { FC, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import styles from './PhoneNumberInput.module.less'
import 'react-phone-input-2/lib/style.css'

export interface PhoneNumberInputProps {
  countryCode?: string
  onChange(val): void
}

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  countryCode = 'GB',
  onChange,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const handleChangeInput = (val) => {
    setPhoneNumber(val)
    onChange(`${val}`)
  }

  return (
    <div className={styles.phoneNumberInputContainer}>
      <p>Phone Number</p>
      <div className={styles.phoneNumberInput}>
        <PhoneInput
          country={countryCode.toLowerCase()}
          value={phoneNumber}
          onChange={(val) => handleChangeInput(val)}
        />
      </div>
    </div>
  )
}

export default PhoneNumberInput
