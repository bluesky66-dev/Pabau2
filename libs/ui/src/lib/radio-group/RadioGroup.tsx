import React, { FC, useState, useEffect } from 'react'
import { Radio, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import styles from './RadioGroup.module.less'

export interface RadioGroupProps extends FormProps {
  label?: string
  value: string
  radioItems: Array<string>
  tooltip?: string
  onChange?(val): void
}

export const RadioGroup: FC<RadioGroupProps> = ({
  label,
  value = 0,
  radioItems,
  tooltip,
  onChange,
  ...props
}) => {
  const [form] = Form.useForm()
  const [radioChecked, setRadioChecked] = useState(0)
  const onRadioChecked = (e) => {
    setRadioChecked(e.target.value)
    onChange?.(radioItems[e.target.value])
  }

  useEffect(() => {
    const elIndex = radioItems.indexOf(value.toString())
    if (elIndex < 0) {
      setRadioChecked(0)
    } else {
      setRadioChecked(elIndex)
    }
  }, [value, radioItems])

  return (
    <div className={styles.radioGroupContainer}>
      <Form form={form} layout="vertical" {...props}>
        <Form.Item label={label} tooltip={tooltip ? tooltip : ''}>
          <Radio.Group onChange={(e) => onRadioChecked(e)} value={radioChecked}>
            {radioItems?.map((item, index) => (
              <Radio key={item} value={index}>
                {item}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
      </Form>
    </div>
  )
}

export default RadioGroup
