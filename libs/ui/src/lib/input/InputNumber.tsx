import React, { PropsWithChildren } from 'react'
import { Form, InputNumber as AntInput } from 'antd'
import { FormProps } from 'antd/lib/form'
import styles from './Input.module.less'

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
  requiredMsg?: string
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
  requiredMsg,
  type,
  onChange,
  isFormatter,
  ...props
}: PropsWithChildren<InputNumberProps>): JSX.Element {
  const [form] = Form.useForm()

  const handleInputChange = (value) => {
    onChange?.(value)
  }

  return (
    <div className={styles.inputContainer}>
      <Form
        {...props}
        form={form}
        requiredMark={requiredMark}
        layout="vertical"
      >
        <Form.Item
          label={label ? label : ''}
          name="input-item"
          help={requiredMsg}
          validateStatus={requiredMsg ? 'error' : 'success'}
        >
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
