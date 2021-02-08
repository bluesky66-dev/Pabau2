import React, { FC, useState } from 'react'
import { Select } from 'antd'
import styles from './AddSuggestion.module.less'
const { Option } = Select

/* eslint-disable-next-line */
export interface AddSuggestionProps {
  label: string
  defaultSelected: Array<string | number>
  options: Array<string | number>
  onChange
}

export const AddSuggestion: FC<AddSuggestionProps> = ({
  label,
  defaultSelected,
  options,
  onChange,
}) => {
  const [selected, setSelected] = useState(defaultSelected)

  const handleChange = (value) => {
    setSelected(value)
    onChange(value)
  }

  return (
    <div className={styles.addSuggestion}>
      <div className={styles.label}>{label}</div>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        placeholder={label}
        defaultValue={selected}
        onChange={handleChange}
      >
        {options &&
          options.length &&
          options.map((el, index) => (
            <Option key={`multiCheckBoxOption${index}`} value={el}>
              {el || ''}
            </Option>
          ))}
      </Select>
    </div>
  )
}

export default AddSuggestion
