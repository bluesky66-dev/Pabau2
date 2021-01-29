import React, { FC, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { PhoneNumberUtil } from 'google-libphonenumber'
import ClassNames from 'classnames'
import styles from './PhoneNumberInput.module.less'
import 'react-phone-input-2/lib/style.css'

const phoneUtil = PhoneNumberUtil.getInstance()
export interface PhoneNumberInputProps {
  countryCode?: string
  onChange(val): void
}

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  countryCode = 'GB',
  onChange,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [valid, setValid] = useState(true)
  const handleChangeInput = (val, country) => {
    try {
      const isValid = phoneUtil.isValidNumberForRegion(
        phoneUtil.parse(val, country.countryCode.toUpperCase()),
        country.countryCode.toUpperCase()
      )
      setValid(isValid)
    } catch {
      setValid(false)
    }
    setPhoneNumber(val)
    onChange(`${val}`)
  }

  return (
    <div className={styles.phoneNumberInputContainer}>
      <p className={styles.phoneNumberLabel}>Phone Number</p>
      <div
        className={
          valid
            ? styles.phoneNumberInput
            : ClassNames(styles.phoneNumberInput, styles.redBorder)
        }
      >
        <PhoneInput
          country={countryCode.toLowerCase()}
          value={phoneNumber}
          onChange={(value, country) => handleChangeInput(value, country)}
        />
      </div>
      {!valid && (
        <p className={styles.phoneNumberValidMsg}>
          Please enter a valid phone number
        </p>
      )}
    </div>
  )
}

export default PhoneNumberInput
