import React, { FC, useState, useEffect } from 'react'
import { Radio, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
// import styles from './RadioGroup.module.less'

interface RadioItem {
  title: string
}

export interface RadioGroupProps extends FormProps {
  label?: string
  defaultValue: number
  radioItems: RadioItem[]
  tooltip?: string
  onChange?(val): void
}

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  defaultValue = 0,
  radioItems,
  tooltip,
  onChange,
  ...props
}) => {
  const [form] = Form.useForm()
  const [value, setValue] = useState(0)
  const onRadioChecked = (e) => {
    setValue(e.target.value)
    if (onChange) {
      onChange(radioItems[e.target.value])
    }
  }

  useEffect(() => {
    setValue(defaultValue)
  }, [defaultValue, radioItems])

  return (
    <Form form={form} layout="vertical" {...props}>
      <Form.Item label={label} tooltip={tooltip ? tooltip : ''}>
        <Radio.Group onChange={(e) => onRadioChecked(e)} value={value}>
          {Array.isArray(radioItems) &&
            radioItems.length > 0 &&
            radioItems.map((item, index) => (
              <Radio key={item.title} value={index}>
                {item.title}
              </Radio>
            ))}
        </Radio.Group>
      </Form.Item>
    </Form>
  )
}

export default RadioGroup
