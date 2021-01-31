import React, { PropsWithChildren } from 'react'
import { Input as AntInput, Form } from 'antd'
import { FormProps } from 'antd/lib/form'
import styles from './input.module.less'

enum ButtonSize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

export interface CheckBoxProps extends FormProps {
  label?: string
  text?: string
  size?: ButtonSize
  disabled?: boolean
  placeHolderText?: string
  reqiredMsg?: string
  type?: string
  onChange?(val): void
}

export function Input({
  text,
  label,
  size,
  disabled,
  placeHolderText,
  requiredMark = false,
  reqiredMsg,
  type,
  onChange,
  ...props
}: PropsWithChildren<CheckBoxProps>): JSX.Element {
  const [form] = Form.useForm()
  const handleInputChange = (e) => {
    onChange && onChange(e.target.value)
  }

  return (
    <div className={styles.inputContainer}>
      <Form
        form={form}
        requiredMark={requiredMark}
        layout="vertical"
        {...props}
      >
        <Form.Item
          label={label ? label : ''}
          name="marketingSorce"
          rules={[
            {
              type: type === 'email' ? 'email' : undefined,
              message: 'Please enter valid email!',
            },
            {
              required: true,
              message: reqiredMsg,
            },
          ]}
        >
          <AntInput
            className="input-style"
            placeholder={placeHolderText}
            value={text}
            size={size}
            defaultValue={text}
            disabled={disabled}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Item>
      </Form>
    </div>
  )
}

export default Input
