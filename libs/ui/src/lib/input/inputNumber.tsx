import React, { PropsWithChildren, useEffect, useState } from 'react'
import { Form, InputNumber as AntInput } from 'antd'
import { FormProps, Rule } from 'antd/lib/form'
import styles from './input.module.less'

enum ButtonSize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

export interface InputNumberProps extends FormProps {
  label?: string
  value?: number
  size?: ButtonSize
  disabled?: boolean
  placeHolderText?: string
  reqiredMsg?: string
  type?: string
  isFormatter?: boolean
  onChange?(val): void
}

export function InputNumber({
  value,
  label,
  size,
  disabled,
  placeHolderText,
  requiredMark = false,
  reqiredMsg,
  type,
  onChange,
  isFormatter,
  ...props
}: PropsWithChildren<InputNumberProps>): JSX.Element {
  const [form] = Form.useForm()
  const [rules, setRules] = useState<Rule[]>([])
  const handleInputChange = (value) => {
    onChange?.(value)
  }

  useEffect(() => {
    let items: Rule[] = []
    if (requiredMark) {
      items = [
        ...items,
        {
          required: true,
          message: reqiredMsg ? reqiredMsg : '',
        },
      ]
    }
    setRules(items)
  }, [requiredMark, reqiredMsg, type])

  return (
    <div className={styles.inputContainer}>
      <Form
        {...props}
        form={form}
        requiredMark={requiredMark}
        layout="vertical"
      >
        <Form.Item label={label ? label : ''} name="input-item" rules={rules}>
          <AntInput
            className={styles.inputNumber}
            placeholder={placeHolderText}
            formatter={(value) => (isFormatter ? `£ ${value}` : `${value}`)}
            defaultValue={value}
            size={size}
            disabled={disabled}
            onChange={(value) => handleInputChange(value)}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default InputNumber
