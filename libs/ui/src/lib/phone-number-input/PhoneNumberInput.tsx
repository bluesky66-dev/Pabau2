import React, { FC, useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { PhoneNumberUtil } from 'google-libphonenumber'
import ClassNames from 'classnames'
import styles from './PhoneNumberInput.module.less'

const phoneUtil = PhoneNumberUtil.getInstance()
export interface PhoneNumberInputProps {
  countryCode?: string
  onChange(val: string, valid?: boolean): void
}

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  countryCode = 'GB',
  onChange,
}) => {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [valid, setValid] = useState(true)
  const handleChangeInput = (val, country) => {
    let validNumber
    try {
      const isValid = phoneUtil.isValidNumberForRegion(
        phoneUtil.parse(val, country.countryCode.toUpperCase()),
        country.countryCode.toUpperCase()
      )
      setValid(isValid)
      validNumber = isValid
    } catch {
      setValid(false)
      validNumber = false
    }
    setPhoneNumber(val)
    onChange(`${val}`, validNumber)
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
        <div className={styles.phoneNumberValidMsg}>
          Please enter a valid phone number
        </div>
      )}
    </div>
  )
}

export default PhoneNumberInput
