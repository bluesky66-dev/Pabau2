import { Radio } from 'antd'
import React, { FC, useState } from 'react'

interface P {
  title: string
  value: string
}

const typeOptions = [
  { label: 'Text', value: 'text' },
  { label: 'Email', value: 'email' },
  { label: 'Number', value: 'number' },
  { label: 'Date', value: 'date' },
]

const SettingElementTypeOption: FC<P> = ({ title, value }) => {
  const [selOption, setSelOption] = useState(value)
  return (
    <>
      <h3 style={{ marginTop: '20px' }}>{title}</h3>
      <Radio.Group
        options={typeOptions}
        defaultValue={selOption}
        value={value}
        onChange={(e) => setSelOption(e.target.value)}
        optionType="button"
        buttonStyle="solid"
      />
    </>
  )
}

export default SettingElementTypeOption
