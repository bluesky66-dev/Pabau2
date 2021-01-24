import { Select } from 'antd'
import React, { FC } from 'react'
import { languageMenu } from '../../assets/images/lang-logos'

export const Language: FC = () => {
  const { Option } = Select
  return (
    <Select defaultValue="English">
      {languageMenu.map((lang, index) => (
        <Option key={index} value={lang.label}>
          <img alt={lang.label} src={lang.logo} style={{ width: '18px', marginBottom: '2px' }} />{' '}
          {lang.label}
        </Option>
      ))}
    </Select>
  )
}
export default Language
