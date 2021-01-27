import React, { FC, useState, useEffect } from 'react'
import { Input, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import PhoneNumberAreaCodes from './PhoneNumberAreaCodes'
import PhoneInput from 'react-phone-number-input/input'
import { formatPhoneNumber } from 'react-phone-number-input'
import styles from './PhoneNumberInput.module.less'

export interface PhoneNumberInputProps {
  countryCode?: string
  onChange(val): void
}

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  countryCode = 'GB',
  onChange,
}) => {
  const [phoneCode, setPhoneCode] = useState('+44')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [number, setNumber] = useState('')
  const handleMenuClick = (e) => {
    setPhoneCode(`+${PhoneNumberAreaCodes[e.key][1]}`)
  }
  const handleChangePhoneNumber = (val) => {
    const value = formatPhoneNumber(val)
    setNumber(value)
  }
  const handleChangeInput = (e) => {
    const { value } = e.target
    const pattern = new RegExp(/^\d*$/i)
    if (pattern.test(value)) {
      setPhoneNumber(value)
      onChange(`${phoneCode}${value}`)
    }
  }
  const menu = (
    <Menu className={styles.menuContainer} onClick={(e) => handleMenuClick(e)}>
      {PhoneNumberAreaCodes.map((code, index) => (
        <Menu.Item key={index}>{`${code[2]} (+${code[1]})`}</Menu.Item>
      ))}
    </Menu>
  )
  const selectBefore = (
    <Dropdown overlay={menu} trigger={['click']}>
      <div className={styles.phoneCodeContainer}>
        <p>{phoneCode}</p>
        <DownOutlined />
      </div>
    </Dropdown>
  )

  useEffect(() => {
    const phoneNumberCode = PhoneNumberAreaCodes.find(
      (code) => code[2] === countryCode
    )
    if (phoneNumberCode) setPhoneCode(`+${phoneNumberCode[1]}`)
  }, [countryCode])

  return (
    <div className={styles.phoneNumberInputContainer}>
      <p>Phone Number</p>
      <div className={styles.phoneNumberInput}>
        <Input
          addonBefore={selectBefore}
          value={phoneNumber}
          onChange={(e) => handleChangeInput(e)}
        />
        <PhoneInput
          country={countryCode}
          value={number}
          onChange={(val) => handleChangePhoneNumber(val)}
        />
      </div>
    </div>
  )
}

export default PhoneNumberInput
