import React, { FC, useState, useEffect } from 'react'
import { Input, Dropdown, Menu } from 'antd'
import { DownOutlined } from '@ant-design/icons'
import PhoneNumberAreaCodes from './PhoneNumberAreaCodes'
import styles from './PhoneNumberInput.module.less'

export interface PhoneNumberInputProps {
  countryCode?: string
  onChange(val): void
}

export const PhoneNumberInput: FC<PhoneNumberInputProps> = ({ countryCode = 'GB', onChange }) => {
  const [phoneCode, setPhoneCode] = useState('+44')
  const handleMenuClick = (e) => {
    setPhoneCode(`+${PhoneNumberAreaCodes[e.key][1]}`)
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
    const phoneNumberCode = PhoneNumberAreaCodes.find((code) => code[2] === countryCode)
    if (phoneNumberCode) setPhoneCode(`+${phoneNumberCode[1]}`)
  }, [countryCode])

  return (
    <div className={styles.phoneNumberInputContainer}>
      <p>Phone Number</p>
      <div className={styles.phoneNumberInput}>
        <Input addonBefore={selectBefore} onChange={(e) => onChange(phoneCode + e.target.value)} />
      </div>
    </div>
  )
}

export default PhoneNumberInput
