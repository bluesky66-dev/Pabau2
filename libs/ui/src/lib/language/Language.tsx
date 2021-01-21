import { Select } from 'antd'
import React, { FC } from 'react'
import cn_flag from '../../assets/images/country-flags/cn.png'
import bg_flag from '../../assets/images/country-flags/gb.png'
import './Language.module.less'

const Language: FC = () => {
  const langs = [
    { key: 1, label: 'English', value: 'english', img: bg_flag },
    { key: 2, label: 'Chinese', value: 'chinese', img: cn_flag },
  ]
  const { Option } = Select
  return (
    <Select defaultValue="english">
      {langs.map(({ key, label, value, img }) => (
        <Option key={key} value={value}>
          <img alt={label} src={img} style={{ width: '18px', marginBottom: '2px' }} /> {label}
        </Option>
      ))}
    </Select>
  )
}
export default Language
