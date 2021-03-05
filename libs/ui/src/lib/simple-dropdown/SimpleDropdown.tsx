import React, { FC, useState } from 'react'
import { Select, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import styles from './SimpleDropdown.module.less'

export interface SimpleDropdownProps extends FormProps {
  label?: string
  value?: string
  tooltip?: string
  placeHolderText?: string
  size?: SizeType
  dropdownItems: Array<string>
  onSelected(val): void
}

export const SimpleDropdown: FC<SimpleDropdownProps> = ({
  label,
  value,
  dropdownItems,
  tooltip,
  placeHolderText = '',
  size = 'middle',
  onSelected,
  ...props
}) => {
  const [form] = Form.useForm()
  const [selected, setSelected] = useState('')
  const handleClickSelect = (value) => {
    setSelected(value)
    onSelected(value)
  }
  return (
    <div className={styles.simpleDropdownContainer}>
      <Form form={form} layout="vertical" {...props}>
        <Form.Item label={label ? label : ''} tooltip={tooltip ? tooltip : ''}>
          <Select
            value={selected}
            onSelect={(value) => handleClickSelect(value)}
            size={size}
            placeholder={placeHolderText}
          >
            {dropdownItems?.map((item) => (
              <Select.Option key={item} value={item}>
                {item}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
      </Form>
    </div>
  )
}

export default SimpleDropdown
