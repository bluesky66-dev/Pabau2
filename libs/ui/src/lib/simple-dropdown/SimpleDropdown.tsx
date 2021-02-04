import React, { FC, useState, useEffect } from 'react'
import { Select, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import { SizeType } from 'antd/es/config-provider/SizeContext'
import styles from './SimpleDropdown.module.less'

export interface SimpleDropdownProps extends FormProps {
  label?: string
  value?: string
  tooltip?: string
  size?: SizeType
  dropdownItems: Array<string>
  onSelected(val): void
}

export const SimpleDropdown: FC<SimpleDropdownProps> = ({
  label,
  value,
  dropdownItems,
  tooltip,
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
  useEffect(() => {
    if (value) {
      setSelected(value)
    } else {
      dropdownItems.length > 0 && setSelected(dropdownItems[0])
    }
  }, [value, dropdownItems, label, tooltip])
  return (
    <div className={styles.simpleDropdownContainer}>
      <Form form={form} layout="vertical" {...props}>
        <Form.Item label={label ? label : ''} tooltip={tooltip ? tooltip : ''}>
          <Select
            value={selected}
            onChange={(value) => handleClickSelect(value)}
            size={size}
          >
            {Array.isArray(dropdownItems) &&
              dropdownItems.length > 0 &&
              dropdownItems.map((item) => (
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
