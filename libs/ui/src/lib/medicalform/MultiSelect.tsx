import { Select } from 'antd'
import React, { FC } from 'react'

const { Option } = Select

interface OPTION_TYPE {
  id: number
  label: string
}

interface P {
  title?: string
  options?: OPTION_TYPE[]
}

const MultiSelect: FC<P> = ({ title, options }) => {
  return (
    <>
      <h3 style={{ marginTop: '5px' }}>{title}</h3>
      <Select
        mode="multiple"
        allowClear
        style={{ width: '100%' }}
        placeholder="Please select"
      >
        {options?.map(({ id, label }) => (
          <Option key={id} value={id}>
            {label}
          </Option>
        ))}
      </Select>
    </>
  )
}

export default MultiSelect
