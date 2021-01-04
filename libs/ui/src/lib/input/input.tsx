import React, { PropsWithChildren } from 'react'
import { Input as AntInput, Form } from 'antd'
import { FormProps } from 'antd/lib/form'

enum ButtonSize {
  small = 'small',
  middle = 'middle',
  large = 'large',
}

export interface CheckBoxProps extends FormProps {
  text?: string
  size?: ButtonSize
  disabled?: boolean
  placeHolderText?: string
  reqiredMsg?: string
}

export function Input({
  text,
  size,
  disabled,
  placeHolderText,
  requiredMark = false,
  reqiredMsg,
  ...props
}: PropsWithChildren<CheckBoxProps>): JSX.Element {
  const [form] = Form.useForm()

  return (
    <Form form={form} requiredMark={requiredMark} layout="vertical" {...props}>
      <Form.Item
        label="Name"
        name="marketingSorce"
        rules={[
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
        />
      </Form.Item>
    </Form>
  )
}

export default Input
